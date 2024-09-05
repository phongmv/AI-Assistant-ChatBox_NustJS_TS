<template>
  <section class="flex flex-col md:min-w-[520px] lg:min-w-[720px] w-[300px]">
    <!-- Customer Support Agent -->
    <div class="flex items-center gap-3.5 pb-4 border-b border-dashed">
      <div>
        <div
            class="w-12 h-12 overflow-hidden rounded-full image-fit border-2 border-slate-200/70"
        >
          <NuxtImg src="/hana.jpg" />
        </div>
      </div>
      <div>
        <div class="font-medium truncate max-w-[9rem] md:max-w-none">
          Hana
        </div>
        <div class="text-slate-500 text-sm mt-0.5 truncate max-w-[9rem] md:max-w-none">
          Git Command Assistant and 🫥
        </div>
        <p class="text-red-800 italic text-sm">**Please note** : This app is frontend only 🏝 and does not have backend APIs 🖇, no ML model 🤖</p>
        <p class="text-red-900 italic text-sm">Just for fun! 😅</p>
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
            class="w-3/4 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80"
        >
          <!-- Message Content -->
          <div class="text-sm break-words overflow-auto typing-text" v-if="mes.isHana" v-html="mes.message"></div>
          <div class="text-sm break-words overflow-auto" v-else>
            {{ mes.message }}
          </div>
          <!-- Time -->
          <div class="text-xs text-slate-500/70">{{ mes.timestamp }}</div>
        </div>
      </div>
    </div>
    <MessageForm @on-submit="handleScrollToBottom" />
  </section>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMessages } from '~/composables/states';

const messages = useMessages();
const { customerInitials } = useCustomer();
const messagesContainer = ref<HTMLDivElement | null>(null);

// Watch for changes in messages and scroll to the bottom
function handleScrollToBottom (){
  setTimeout(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  }, 200)
}

watch(messages, () => {
  handleScrollToBottom()
}, { deep: true });
</script>

<style>

.typing-text {
  display: inline-block;
  overflow: hidden; /* Hide text outside of the container */
  white-space: nowrap; /* Prevent text from wrapping to a new line */
  position: relative;
  color: #333; /* Text color */
  animation: typing 1s steps(40, end);
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
