<template>
  <div>
    <button
      type="submit"
      class="w-full bg-violet-700 p-2 rounded-md text-white"
      :class="classes"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({ classes: { type: String, required: false } });
</script>
