<template>
  <section class="flex flex-col md:min-w-[520px] lg:min-w-[720px] w-[300px]">
    <!-- Customer Support Agent -->
    <div class="flex items-center gap-3.5 pb-4 border-b border-dashed">
      <div>
        <div class="w-12 h-12 overflow-hidden rounded-full image-fit border-2 border-slate-200/70">
          <NuxtImg src="/hana.jpg" />
        </div>
      </div>
      <div v-tilt="{ max: 25, speed: 400, glare: true, 'max-glare': 0.5 }">
        <div class="font-medium truncate max-w-[9rem] md:max-w-none">
          Hana's Git Assistance
        </div>
        <div class="text-slate-500 text-sm mt-0.5 truncate max-w-[9rem] md:max-w-none">
        </div>
        <p class="text-xs">🏝 <span class="text-red-800">frontend</span> only</p>
        <p class="text-xs">🖇 not have <span class="text-red-800 text-xs">backend APIs</span></p>
        <p class="text-xs">🤖 not have <span class="text-red-800 text-xs">machine learning model</span></p>
      </div>
    </div>

    <!-- Messages -->
    <div
        ref="messagesContainer"
        class="flex flex-col gap-3.5 py-5 px-3 overflow-y-scroll max-h-[400px]"
    >
      <!-- To flip message use "flex-row-reverse" -->
      <div
          v-for="mes in messages"
          :key="mes.name"
          class="flex items-end gap-3"
          :class="{ 'flex-row-reverse': !mes.isHana }"
      >
        <!-- Profile Image -->
        <NuxtImg
            v-if="mes.isHana"
            alt="hana"
            class="block w-12 h-12 overflow-hidden rounded-full border-2 border-slate-200/70"
            src="/hana.jpg"
        />
        <!-- Text Image -->
        <div
            v-else
            class="flex uppercase items-center justify-center text-xl text-center text-white font-bold bg-gradient-to-t from-sky-500 to-emerald-500 w-12 h-12 overflow-hidden rounded-full border-2 border-slate-200/70"
        >
          {{ customerInitials }}
        </div>
        <!-- Main Content -->
        <div
            class="w-3/4 flex flex-col gap-2 border px-4 pt-3 pb-3 rounded-xl bg-slate-50/80 border-slate-200/80"
        >
          <!-- Message Content -->
          <div v-if="mes.isHana" class="relative">
            <div class="text-sm break-words overflow-auto typing-text"  v-html="mes.message"></div>
            <button  @click="copyToClipboard(mes)"
                     :class="{ 'text-green-800': isCopied[mes.id] }"
                     class="flex justify-center items-center w-1 h-1 text-black text-xs p-3 mt-2 absolute bottom-[-28px] right-[4px]">{{isCopied[mes.id] ? "Copied" : "Copy"}}</button>
          </div>
          <div class="text-sm break-words overflow-auto" v-else>
            {{ mes.message }}
          </div>
          <!-- Time -->
          <div class="text-[10px] text-slate-500/70">{{ mes.timestamp }}</div>
        </div>
      </div>
    </div>
    <MessageForm @on-submit="handleScrollToBottom" />
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMessages } from '~/composables/states';
import type {IMessage} from "~/interfaces/IMessage";
import {stripHtmlTags} from "~/helpers/strip-html-tags";

const isCopied = ref<{[key: string]: boolean}>({})
const messages = useMessages();
const { customerInitials } = useCustomer();
const messagesContainer = ref<HTMLDivElement | null>(null);
const timeOutIds = ref<{[key: string]: any}>({})


// Watch for changes in messages and scroll to the bottom
function handleScrollToBottom (){
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTo({
        top: messagesContainer.value.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
}

function copyToClipboard(mes: IMessage) {
  const plainText = stripHtmlTags(mes.message);
  navigator.clipboard.writeText(plainText).then(() => {
    isCopied.value[mes.id] = true

  // clear existing timeout
  clearTimeout(timeOutIds.value[mes.id])

  // set timeout
 timeOutIds.value[mes.id] = setTimeout(() => {
   isCopied.value[mes.id] = false
 }, 5000)

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

watch(messages, () => {
  handleScrollToBottom()
}, { deep: true });
</script>

<style>
.typing-text {
  display: inline-block;
  position: relative;
  word-break: break-word;
  color: #333; /* Text color */
  animation: typing 1s steps(80, end);
  pointer-events: auto; /* Allow text selection */
}

.typing-text::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%);
  z-index: 1;
  pointer-events: none; /* Ensure the gradient does not block interactions */
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
