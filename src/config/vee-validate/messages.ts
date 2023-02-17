import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize("en", {
    messages: {
      min: "{field} must have at least 0:{min} symbols",
      required: "{field} is required",
      email: "{field} is not in email format",
    },
  }),
});
