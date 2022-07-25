export const validation = {
  errors: {},

  setRules(inputValue, field, displayField, count) {
    field = field ? field : "";
    displayField = displayField ? displayField : "";
    count = count ? count : 0;

    if (!inputValue || inputValue === "") {
      this.errors[field] = `The ${displayField} field is required.`;

      return false;
    } else {
      delete this.errors[field];
    }

    if (count && count > 0) {
      if (inputValue.length < count) {
        this.errors[
          field
        ] = `The ${displayField} field must be at least ${count} characters long.`;
      }
    }
  },

  handleValidateEmail(email) {
    let re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      this.errors["email"] = "Invalid email.";
    } else {
      delete this.errors["email"];
    }
  },

   run() {
    return !Object.keys(this.errors).length;
  },
};
