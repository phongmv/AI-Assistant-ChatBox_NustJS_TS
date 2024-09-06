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
import type {IGitCommands, IQuestionAnswer, IQuestionAnswers} from "~/interfaces/IGitCommands";
import {formatDate, replaceSpecialCharacters} from "~/helpers/message-formatter";

interface IEmits {
  (e: 'onSubmit'): void
}

const emits = defineEmits<IEmits>()
const newMessage = ref("")
const messages = useMessages()
const {customerInitials, customerName} = useCustomer()
const questions = ref<IQuestionAnswers>({...await getQuestionsResponse()})
const gitCommands = ref<IGitCommands>({...await getFakeAIResponse()})

//init value
onMounted(() => {
  messages.value.push({
    name: "Hana",
    message: `<p class="text-wrap text-sm">Hi ${customerName.value}! I'm Hana 😍</p>` +
        `<p class="text-wrap text-sm text-gray">My job is help answer about <strong>Git<strong>, if you have any question, talkin me! </p>`,
    isHana: true,
    timestamp: formatDate(),
    id: Date.now()
  })
})

import stringSimilarity from 'string-similarity';
import {SpecialKey} from "~/contants/special-key";

function findBestMatch(question: string): string | null {
  const threshold = 0.6; // 60% similarity threshold
  const {training_data} = questions.value;

  // Normalize the input question
  const normalizedQuestion = question.toLowerCase();

  let bestMatch: IQuestionAnswer | null = null;
  let highestSimilarity = 0;

  for (const data of training_data) {
    // Normalize each question in the training data
    const normalizedDataQuestion = data.question.toLowerCase();

    // Calculate similarity
    const similarity = stringSimilarity.compareTwoStrings(normalizedQuestion, normalizedDataQuestion);

    if (similarity > highestSimilarity && similarity >= threshold) {
      highestSimilarity = similarity;
      bestMatch = data;
    }
  }

  // Provide feedback if no good match is found
  return bestMatch
      ? `${bestMatch?.syntax ? '<strong>Syntax: </strong>' : ""}${bestMatch?.syntax || ""}${bestMatch?.syntax ? '<br><strong>Description: </strong>' : ''}${bestMatch.answer}`
      : "Sorry, I couldn't find a good match for your question. It's better to search using English keywords.";
}


async function getFakeAiResponse(keySearching: string) {
  emits("onSubmit");

  const keyData = Object.keys(gitCommands.value);
  const keysFilter = replaceSpecialCharacters(keySearching).split(" ").filter(k => !!k);

  //handle multiple keywords
  if (!keySearching.split(" ").some(i => SpecialKey.includes(i))) {
    let matchingKeys = keyData.filter(key =>
        keysFilter.some(filterKey => key === filterKey)
    );


    if (matchingKeys.length > 1 && gitCommands.value) {
      return matchingKeys.map(key =>
          `<p class="text-wrap text-sm"><strong>Syntax:</strong> ${gitCommands?.value[key]?.command}</p>` +
          `<p class="text-wrap text-sm text-gray"><strong>Description:</strong> ${gitCommands?.value[key]?.description}</p>`
      ).join('<hr class="my-4"/>');
    }
  }

  //handle specifier keywords
  if (findBestMatch(keySearching))
    return `<p class="text-sm text-wrap">${findBestMatch(keySearching)}</p>`
}


async function handleSubmit() {
  messages.value.push({
    name: customerInitials.value,
    message: newMessage.value,
    isHana: false,
    timestamp: formatDate(),
    id: Date.now()
  })

  const commandNode = await getFakeAiResponse(newMessage.value) || ''
  const parsedMessage = await marked.parse(dompurify.sanitize(commandNode))
  newMessage.value = ""

  messages.value.push({
    name: "Hana",
    message: parsedMessage,
    isHana: true,
    timestamp: formatDate(),
    id: Date.now()
  })
}
</script>