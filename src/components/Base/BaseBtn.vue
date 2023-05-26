<template>
  <button
    class="flex items-center"
    :class="[height,spacing,btnColor,rounded,color]"
  >
    <Icon
      v-show="beforeIcon"
      size="w-5 h-5"
      :name="beforeIcon"
      class="mr-2"
    />
    <p class="text-base ">
      {{ label }}
    </p>
    <Icon
      v-show="afterIcon"
      size="w-5 h-5"
      :name="afterIcon"
      class="ml-2"
    />
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { ButtonProps } from '@/interface/index'
const props = withDefaults(defineProps<ButtonProps>(), {
  height: 'h-10',
  color: 'text-white',
  rounded: 'rounded-full',
  size: 'default',
  label: '',
  beforeIcon: '',
  afterIcon: '',
  type: 'primary'
})
const spacing = computed<string|undefined>(() => {
  return {
    large: 'px-6',
    default: 'px-5',
    small: 'px-3'
  }[props.size]
})

const btnColor = computed<string|undefined>(() => {
  return {
    primary: 'bg-teal-600 hover:bg-teal-800',
    secondary: 'bg-sky-600 hover:bg-sky-800',
    error: 'bg-rose-600 hover:bg-rose-800',
    default: 'text-black hover:bg-neutral-400 hover:text-white',
    disable: 'bg-neutral-400 text-neutral-700 pointer-events-none'
  }[props.type]
})
</script>
