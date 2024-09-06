<template>
  <section class="flex flex-col items-center gap-6">
    <div v-tilt class="w-64 h-64 rounded-full overflow-hidden">
      <NuxtImg src="/hana.jpg" class="w-full h-full object-cover" />
    </div>
    <h1 class="text-center font-bold text-2xl">
      Hana's Git Chatbot Assistance
    </h1>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-2 w-full">
      <input
          maxlength="50"
          v-model.trim="customerName"
          type="text"
          placeholder="Your name"
          class="w-full transition p-2 text-sm border border-slate-300/60 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 pr-16 rounded-xl"
      />
      <small class="text-slate-500 italic">
        Please provide a name so Hana knows who she's talking to.
      </small>
      <button
          :disabled="hasNameError"
          type="submit"
          class="transition w-full bg-blue-950 text-slate-300 font-medium py-2 px-3 rounded hover:bg-opacity-90"
      >
        Start a New Chat
      </button>
    </form>
  </section>
</template>
<script setup lang="ts">
import {useIsChatting} from "~/composables/states";
import {useCustomer} from "~/composables/customer";

const isChatting = useIsChatting()
const {customerName, hasNameError} = useCustomer()

function handleSubmit() {
  isChatting.value = true
}

</script>