<template>
  <form @submit.prevent="handleSubmit" class="relative">
            <textarea
                maxlength="200"
                v-model.trim="newMessage"
                @keypress.enter.prevent="handleSubmit"
                class="transition p-4 w-full text-sm border border-slate-300/60 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 pr-16 rounded-xl resize-none"
                placeholder="Enter your message..."
            ></textarea>
    <button
        type="submit"
        class="absolute top-2 right-2 h-10 w-10 flex items-center justify-center bg-gradient-to-t from-sky-500 to-emerald-500 rounded-full text-white"
    >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-send"
          viewBox="0 0 16 16"
      >
        <path
            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
        />
      </svg>
    </button>
  </form>
</template>
<script setup lang="ts">
import {marked} from "marked";
import dompurify from "dompurify"
import {getFakeAIResponse, getQuestionsResponse} from "~/services/message.service";
import type {IGitCommands, IQuestionAnswers} from "~/interfaces/IGitCommands";
import {formatDate, replaceSpecialCharacters} from "~/helpers/message-formatter";
import {specialKey, welcomeKey} from "~/constant/keys";

interface IEmits {
  (e: 'onSubmit'): void
}

const emits = defineEmits<IEmits>()
const newMessage = ref("")
const messages = useMessages()
const {customerInitials, customerName} = useCustomer()
const gitCommands = ref<IGitCommands>({ ...await getFakeAIResponse()})
const questions = ref<IQuestionAnswers>({...await getQuestionsResponse()})

//init value
onMounted(  () => {
  messages.value.push({
    name: "Hana",
    message: `<p class="text-wrap text-sm"><strong>^^!</strong> Hi ${customerName.value}! I'm Hana 😍</p>` +
        `<p class="text-wrap text-sm text-gray">My job is help answer about basic git commands, if you have any question, talkin me! </p>`,
    isHana: true,
    timestamp: new Date().toLocaleString([],  {
      timeStyle: "short"
    })
  })
})

function getKeywordMatchCount(question: string, keywords: string[]): number {
  const questionWords = question.toLowerCase().split(/\s+/);
  return keywords.reduce((count, keyword) => {
    return count + (questionWords.includes(keyword.toLowerCase()) ? 1 : 0);
  }, 0);
}

function getAnswerForQuestion(question: string) {
  const foundInQuestions = questions.value["training_data"].find((q) => {
    const questionKeywords = q.question.split(/\s+/);
    const matchCount = getKeywordMatchCount(question, questionKeywords);
    const threshold = Math.ceil(questionKeywords.length * 1 / 2);
    return matchCount >= threshold;
  });

  if (foundInQuestions) {
    return foundInQuestions.answer
  }
}

async function getFakeAiResponse(keySearching: string): Promise<string> {

  if (getAnswerForQuestion(keySearching))
    return `<p class="text-sm text-wrap">${getAnswerForQuestion(keySearching)}</p>`

    emits("onSubmit");
    const keyData = Object.keys(gitCommands.value);
    const keysFilter = replaceSpecialCharacters(keySearching).split(" ").filter(k => !!k).map(i => i.toLowerCase());


    let matchingKeys = keyData.filter(key =>
        keysFilter.some(filterKey => key === filterKey)
    );

    //handle special key all
    for (const key of keysFilter) {
      if (welcomeKey.includes(key))
        return `<p class="text-wrap text-sm"><strong>^^!</strong> Hi ${customerName.value}! I'm Hana 😍</p>`

      if (specialKey.includes(key)) matchingKeys = keyData
    }

    if (matchingKeys.length > 0 && gitCommands.value) {
      return matchingKeys.map(key =>
          `<p class="text-wrap text-sm"><strong>Syntax:</strong> ${gitCommands?.value[key]?.command}</p>` +
          `<p class="text-wrap text-sm text-gray"><strong>Description:</strong> ${gitCommands?.value[key]?.description}</p>`
      ).join('<hr class="my-4"/>');
    }


    return '<p class="text-sm text-wrap">Oops! Please try searching for something else. It\'s better if you use <strong>specific git command name</strong>. I’m so sorry 😭!</p>'
  }


async function handleSubmit() {
    messages.value.push({
      name: customerInitials.value,
      message: newMessage.value,
      isHana: false,
      timestamp: formatDate()
    })

    const commandNode = await getFakeAiResponse(newMessage.value) || ''
    const parsedMessage = await marked.parse(dompurify.sanitize(commandNode))
    newMessage.value = ""

    messages.value.push({
      name: "Hana",
      message: parsedMessage,
      isHana: true,
      timestamp: formatDate()
    })
  }
</script>