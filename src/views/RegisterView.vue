<template>
  <section class="flex justify-center">
    <RegisterGif />
  </section>
  <section class="flex flex-col text-center space-y-3">
    <h1 class="font-extrabold text-4xl">Register for free</h1>
    <p class="text-md text-violet-700">
      OR
      <span class="underline"><router-link to="login">login</router-link></span>
      if you already have an account
    </p>
  </section>
  <section>
    <Form @submit="submitRegister">
      <Input name="Name" rules="required" />
      <Input name="Email" rules="required" />
      <Input name="Password" rules="required" type="password" />
      <AuthButton classes="my-2">Register</AuthButton>
    </Form>
  </section>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";
import { useRouter } from "vue-router";

import Input from "@/components/inputs/Input.vue";
import AuthButton from "@/components/buttons/AuthButton.vue";
import RegisterGif from "@/components/gifs/RegisterGif.vue";
import { RegisterData } from "@/models/user";
import { useAuthStore } from "@/store/useAuthStore";

const router = useRouter();

const store = useAuthStore();

const user = <RegisterData>{
  name: "",
  email: "",
  password: "",
};

function submitRegister(values: any): void {
  user.name = values.Name;
  user.email = values.Email;
  user.password = values.Password;

  store.register(user);
  router.push({ name: "Dashboard" });
}
</script>
