<script setup lang="ts">
import { useForm } from "vee-validate";
import { ref, watch } from "vue";
import FormBaseComponent from "./FormBaseComponent.vue";
import { toTypedSchema } from "@vee-validate/yup";
import signUpValidationScheme from "@/components/validatorSchema/signUpValidationScheme";

const isOpen = ref(false);

const { defineComponentBinds, handleSubmit, resetForm } = useForm({
  initialValues: {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  },
  validationSchema: toTypedSchema(signUpValidationScheme),
});

const vuetifyConfig = (state: any) => ({
  props: {
    "error-messages": state.errors,
  },
});

const email = defineComponentBinds("email", vuetifyConfig);
const username = defineComponentBinds("username", vuetifyConfig);
const password = defineComponentBinds("password", vuetifyConfig);
const confirmPassword = defineComponentBinds("confirmPassword", vuetifyConfig);

const onSubmit = handleSubmit((values) => {
  console.log(values);

  handleClose();
});

const handleClose = () => {
  isOpen.value = false;
};

watch(isOpen, () => {
  resetForm();
});
</script>

<template>
  <v-dialog v-model="isOpen" width="auto">
    <template #activator="{ props }">
      <v-btn variant="outlined" v-bind="props">Sign Up</v-btn>
    </template>

    <FormBaseComponent form-title="Sign Up">
      <template #form-body>
        <v-form @submit.prevent="onSubmit">
          <v-text-field v-bind="email" label="Email" />
          <v-text-field v-bind="username" label="Username" />
          <v-text-field type="password" v-bind="password" label="Password" />
          <v-text-field type="password" v-bind="confirmPassword" label="Confirm Password" />
          <v-btn color="primary" variant="flat" type="submit">Ok</v-btn>
          <v-btn color="primary" @click="handleClose" variant="outlined">Cancel</v-btn>
        </v-form>
      </template>
    </FormBaseComponent>
  </v-dialog>
</template>
