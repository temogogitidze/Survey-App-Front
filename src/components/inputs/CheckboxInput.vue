<template>
  <Field v-slot="{ field }" name="remember" type="checkbox" :value="true">
    <label>
      <input type="checkbox" v-bind="field" :value="true" />
      Remember me
    </label>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";
</script>
