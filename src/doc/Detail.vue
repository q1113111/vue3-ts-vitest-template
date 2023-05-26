<template>
  <main>
    <nav class="fixed flex flex-col h-full p-4 space-y-4 font-semibold text-white bg-slate-600">
      <button
        v-for="(btn,i) of btnArr"
        :key="i"
        @click="btn.handler"
      >
        {{ btn.label }}
      </button>
    </nav>
    <component :is="components" />
  </main>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseBtn from './components/DbaseBtn.vue'
import { LabelHandler } from '@/interface'
import Icon from './components/DIcon.vue'
import type { Ref } from 'vue'

const is:Ref<string> = ref('BaseBtn')
const components = computed(() => {
  return {
    BaseBtn,
    Icon
  }[is.value]
})
const btnArr:LabelHandler[] = [
  {
    label: 'BaseBtn',
    handler: () => { is.value = 'BaseBtn' }
  },
  {
    label: 'Icon',
    handler: () => { is.value = 'Icon' }
  }
]
</script>
