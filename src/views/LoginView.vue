<template>
  <section class="flex justify-center">
    <LoginGif />
  </section>
  <section class="flex flex-col text-center space-y-3">
    <h1 class="font-extrabold text-4xl">Sign in to your account</h1>
    <p class="text-md text-violet-700">
      OR
      <span class="underline"
        ><router-link to="register">register</router-link></span
      >
      if you dont have an one
    </p>
  </section>
  <section>
    <Form @submit="submitLogin">
      <div
        class="flex justify-between items-center bg-rose-600 px-1 py-2 rounded-md cursor-pointer hover:bg-rose-700"
        v-if="errorMessage"
        @click="errorCloseHandler()"
      >
        <p class="text-white">{{ errorMessage }}</p>
        <CloseIcon />
      </div>
      <Input name="Email" rules="required" />
      <Input name="Password" rules="required" type="password" />
      <section class="flex my-2 justify-between">
        <div class="flex">
          <CheckboxInput />
        </div>
        <p class="text-violet-700">Forgot your password?</p>
      </section>
      <AuthButton>Login</AuthButton>
    </Form>
  </section>
</template>

<script setup lang="ts">
import { Form } from "vee-validate";

import Input from "@/components/inputs/Input.vue";
import AuthButton from "@/components/buttons/AuthButton.vue";
import LoginGif from "@/components/gifs/LoginGif.vue";
import CheckboxInput from "@/components/inputs/CheckboxInput.vue";
import { LoginData } from "@/models/user";
import { useAuthStore } from "@/store/useAuthStore";
import { storeToRefs } from "pinia";
import CloseIcon from "@/components/icons/CloseIcon.vue";

const store = useAuthStore();

const user = <LoginData>{
  email: "",
  password: "",
  remember: false,
};

const { errorMessage } = storeToRefs(store);

function submitLogin(values: any): void {
  user.email = values.Email;
  user.password = values.Password;
  user.remember = values.remember ?? false;

  store.login(user);
}

function errorCloseHandler() {
  errorMessage.value = "";
}
</script>
