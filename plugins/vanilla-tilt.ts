import VanillaTilt from 'vanilla-tilt';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('tilt', {
        mounted(el, binding) {
            VanillaTilt.init(el, binding.value || {});
        },
        updated(el, binding) {
            VanillaTilt.init(el, binding.value || {});
        }
    });
});
