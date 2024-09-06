<template>
  <div class="relative bg-container w-full h-full font-sans">
    <div class="flex items-center justify-center h-full">
      <div
          class="max-w-[800px] relative z-20 shadow-lg after:content-[' '] after:z-[-1] after:h-full after:bg-slate-100 after:border after:border-slate-200 after:absolute after:left-2.5 after:right-2.5 after:top-0 after:mt-2 after:rounded"
      >
        <div class="bg-white border border-slate-200 p-6 rounded shadow-lg shadow-blue-500/50">
          <!-- Start Screen -->
          <strart-screen v-if="!isChatting" />

          <!-- Chat Screen -->
          <chat-screen v-else />
        </div>
      </div>
    </div>
  </div>
  <NuxtParticles
      id="tsparticles"
      :options="options"
  />
</template>

<script lang="ts" setup>
import {  useRuntimeConfig } from '#imports'
import { loadFull } from 'tsparticles'
import { tsParticles } from '@tsparticles/engine'

const { mode } = useRuntimeConfig().public.particles

if(import.meta.client && mode === 'custom') {
  await loadFull(tsParticles)
}
const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  particles: {
    color: {
      value: "#000"
    },
    links: {
      color: "#000",
      enable: true
    },
    move: {
      enable: true
    },
    number: {
      value: 100
    }
  }
}

const isChatting = useIsChatting()
</script>

<style>
html,
body,
#__nuxt {
  height: 100%;
  width: 100%;
}

.bg-container {
  position: relative;
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

.bg-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(245, 247, 250, 0.5), rgba(195, 207, 226, 0.5));
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
  pointer-events: none; /* Ensures the background does not block interactions */
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
