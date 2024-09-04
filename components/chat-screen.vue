<template>
  <section class="flex flex-col md:min-w-[520px] lg:min-w-[620px] w-[300px]">
    <!-- Customer Support Agent -->
    <div class="flex items-center gap-3.5 pb-4 border-b border-dashed">
      <div>
        <div
            class="w-12 h-12 overflow-hidden rounded-full image-fit border-2 border-slate-200/70"
        >
          <img src="/hana.jpg" />
        </div>
      </div>
      <div>
        <div class="font-medium truncate max-w-[9rem] md:max-w-none">
          Hana
        </div>
        <div
            class="text-slate-500 mt-0.5 truncate max-w-[9rem] md:max-w-none"
        >
          Customer Support Agent
        </div>
      </div>
    </div>

    <!-- Messages -->
    <div
        class="flex flex-col gap-3.5 py-5 px-3 overflow-y-scroll max-h-[400px]"
    >
      <!-- To flip message use "flex-row-reverse" -->
      <div v-for="mes in messages" :key="mes.name" class="flex items-end gap-3" :class="{'flex-row-reverse': !mes.isHana}">
        <!-- Profile Image -->
        <img
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
          {{customerInitials}}
        </div>
        <!-- Main Content -->
        <div
            class="w-3/5 flex flex-col gap-2 border px-4 pt-3 pb-4 rounded-xl bg-slate-50/80 border-slate-200/80"
        >
          <!-- Message Content -->
          <div v-if="mes.isHana" v-html="mes.message"></div>
          <div v-else>
           {{mes.message}}
          </div>
          <!-- Time -->
          <div class="text-xs text-slate-500/70">{{mes.timestamp}}</div>
        </div>
      </div>
    </div>
    <MessageForm/>
  </section>
</template>
<script setup lang="ts">
import {useMessages} from "~/composables/states";

const messages = useMessages()
const {customerInitials} = useCustomer()

</script>