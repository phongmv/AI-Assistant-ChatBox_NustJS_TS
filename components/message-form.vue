<template>
  <form @submit.prevent="handleSubmit" class="relative">
            <textarea
                v-model.trim="newMessage"
                @keypress.enter.prevent="handleSubmit"
                class="transition p-4 w-full text-sm border border-slate-300/60 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 pr-16 rounded-xl resize-none"
                placeholder="Enter your message..."
            ></textarea>
    <button
        onclick=""
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
import dompurify from "Dompurify"
import {getFakeAIResponse} from "~/services/message.service";
import type {IGitCommands} from "~/interfaces/IGitCommands";

interface IEmits {
  (e: 'onSubmit'): void
}

const emits = defineEmits<IEmits>()
const newMessage = ref("")
const messages = useMessages()
const {customerInitials} = useCustomer()
const gitCommands = ref<IGitCommands>({})

function replaceSpecialCharacters(input: string): string {
  const regex = /[;,.!?()\-@!#$%^&*]/g;
  return input.replace(regex, ' ');
}


async function getFakeAiResponse(keySearching: string): Promise<string> {
  if (!keySearching) {
    return '<p class="text-wrap">Please! try searching for something else :"((</p>';
  }

  gitCommands.value = { ...await getFakeAIResponse() };

  emits("onSubmit");
  const keyData = Object.keys(gitCommands.value);
  const keysFilter = replaceSpecialCharacters(keySearching).split(" ").filter(k => !!k);

  const matchingKeys = keyData.filter(key =>
      keysFilter.some(filterKey => key.includes(filterKey))
  );

  if (matchingKeys.length > 0 && gitCommands.value) {
    return matchingKeys.map(key =>
        `<p class="text-wrap text-sm"><strong>Syntax:</strong> ${gitCommands?.value[key]?.command}</p>` +
        `<p class="text-wrap text-sm text-gray"><strong>Description:</strong> ${gitCommands?.value[key]?.description}</p>`
    ).join('<hr class="my-4"/>');
  }

  return `<p class="text-wrap text-sm"><strong>^^!</strong> Hi! I'm Hana</p>` +
      `<p class="text-wrap text-sm text-gray">My job is help answer about basic git commands, if you have any question, talkin me!</p>`;
}


async function handleSubmit(){
  messages.value.push({
    name: customerInitials.value,
    message: newMessage.value,
    isHana: false,
    timestamp: new Date().toLocaleString([],  {
      timeStyle: "short"
    })
  })

  const commandNode = await getFakeAiResponse(newMessage.value) || ''
  const parsedMessage = await marked.parse(dompurify.sanitize(commandNode))
  newMessage.value = ""

  messages.value.push({
    name: "Hana",
    message: parsedMessage,
    isHana: true,
    timestamp: new Date().toLocaleString([],  {
      timeStyle: "short"
    })
  })
}
</script>