import { defineStore } from "pinia";
import { ref } from "vue";

import { User, RegisterData, UserData, LoginData } from "@/models/user";
import axiosClient from "@/config/axios/axios";

export const useAuthStore = defineStore("useAuthStore", () => {
  const user = ref<User>({
    data: {},
    token: sessionStorage.getItem("TOKEN"),
  });
  const errorMessage = ref<String>("");

  function register(userData: RegisterData): void {
    axiosClient
      .post("/register", userData)
      .then(({ data }) => {
        user.value.data = data.user;
        user.value.token = data.token;
        sessionStorage.setItem("TOKEN", data.token);
      })
      .then(() => {
        this.router.push({ name: "Dashboard" });
      });
  }

  function login(userData: LoginData): void {
    axiosClient
      .post("/login", userData)
      .then(({ data }) => {
        user.value.data = data.user;
        user.value.token = data.token;
        sessionStorage.setItem("TOKEN", data.token);
      })
      .then(() => {
        this.router.push({ name: "Dashboard" });
      })
      .catch((err) => {
        errorMessage.value = err.response.data.error;
      });
  }

  function logout(): void {
    axiosClient.post("/logout").then((res) => {
      user.value.data = {} as UserData;
      user.value.token = null;
      sessionStorage.removeItem("TOKEN");
      this.router.push({ name: "Login" });
    });
  }

  function getUser(): void {
    axiosClient.get("/user").then((res) => {
      user.value.data = res.data;
    });
  }

  return { user, errorMessage, logout, register, login, getUser };
});
