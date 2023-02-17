import { defineRule } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

defineRule("lowercase", (value: string) => {
  const regex = /^[a-z0-9.@]*$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
});
