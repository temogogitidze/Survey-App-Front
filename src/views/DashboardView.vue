<template>
  <DashboardComponent>
    <template v-slot:header>Dashboard</template>
    <template v-slot:content>Content</template>
  </DashboardComponent>
</template>

<script setup lang="ts">
import DashboardComponent from "@/components/page-components/DashboardComponent.vue";
</script>
