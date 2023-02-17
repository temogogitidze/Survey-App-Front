<template>
  <div class="flex flex-col w-full">
    <Field
      :name="name"
      :rules="rules"
      :type="type"
      class="border border-gray-300 rounded-md px-2 py-1 my-2"
      :placeholder="name"
    />
    <ErrorMessage class="text-red-500" :name="name" />
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  name: { type: String, required: true },
  rules: { type: String, required: false },
  type: { type: String, required: false },
});
</script>
