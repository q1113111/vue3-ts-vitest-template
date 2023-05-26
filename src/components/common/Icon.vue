<template>
  <svg :class="[iconClass,size,useColors]">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { IconProps } from '@/interface/index'
const props = withDefaults(defineProps<IconProps>(), {
  size: 'w-6 h-6',
  color: 'text-hint',
  disable: false,
  disableColor: 'text-load',
  iconClass: ''
})

const useColors = computed<string>(() => props.disable ? props.disableColor : props.color)
</script>
