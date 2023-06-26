<script setup lang="ts">
import { ref, watch } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import signInValidationScheme from "@/components/validatorSchema/SignInValidationScheme";
import FormBaseComponent from "./FormBaseComponent.vue";
import { useAuthStore } from "@/store/authStore";

const isOpen = ref(false);
const authStore = useAuthStore();

const { defineComponentBinds, handleSubmit, resetForm } = useForm({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: toTypedSchema(signInValidationScheme),
});

const vuetifyConfig = (state: any) => ({
  props: {
    "error-messages": state.errors,
  },
});

const email = defineComponentBinds("email", vuetifyConfig);
const password = defineComponentBinds("password", vuetifyConfig);

const onSubmit = handleSubmit((values) => {
  authStore.signInAsync({ email: values.email, password: values.password });
  isOpen.value = false;
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
    <template v-slot:activator="{ props }">
      <v-btn elevation="2" v-bind="props">Sign In</v-btn>
    </template>

    <FormBaseComponent form-title="Sing In">
      <template #form-body>
        <v-form @submit.prevent="onSubmit">
          <v-text-field v-bind="email" label="Email" />
          <v-text-field v-bind="password" type="password" label="Password" />
          <v-btn color="primary" variant="flat" type="submit">Ok</v-btn>
          <v-btn color="primary" variant="outlined" @click="handleClose">Cancel</v-btn>
        </v-form>
      </template>
    </FormBaseComponent>
  </v-dialog>
</template>

<style></style>
