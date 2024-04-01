<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { useUsersStore } from '../../stores/users.store';
import { useAlertStore } from '../../stores/alert.store';
import { router } from '../../router';

const schema = Yup.object().shape({
  name: Yup.string().required('First name is required.'),
  lastname: Yup.string().required('Last name is required.'),
  email: Yup.string().required('Email is required.'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

async function onSubmit(values) {
  const userStore = useUsersStore();
  const alertStore = useAlertStore();
  try {
    await userStore.register(values);
    await router.push('/users/login');
    alertStore.success('Registration successfull');
  } catch (error) {
    alertStore.error(error);
  }
}
</script>

<template>
  <section>
    <div class="contentOne">
      <div class="contentTwo">
        <div class="contentThree">
          <h1>Register your account</h1>
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors, isSubmitting }"
            class="loginForm"
            action="#"
          >
            <div>
              <label for="name">Your name</label>
              <Field
                :class="{ 'is-invalid': errors.firstname }"
                type="text"
                name="name"
                id="name"
                placeholder="John"
                required="true"
              />
              <div class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div>
              <label for="lastname">Your lastname</label>
              <Field
                :class="{ 'is-invalid': errors.lastname }"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                required="true"
              />
              <div class="invalid-feedback">{{ errors.lastname }}</div>
            </div>
            <div>
              <label for="email">Your email</label>
              <Field
                :class="{ 'is-invalid': errors.email }"
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required="true"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div>
              <label for="password">Password</label>
              <Field
                :class="{ 'is-invalid': errors.password }"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required="true"
              />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="buttonSubmit">
              <button :disabled="isSubmitting" type="submit">Sign in</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.contentOne {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.contentTwo {
  width: 100%;
  border-radius: 0.5rem;
  max-width: 28rem;
}

.contentThree {
  padding: 1.5rem;
  margin-top: 16px;
  margin-bottom: 16px;
}

.loginForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h1 {
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: rgb(17 24 39);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(17 24 39);
}

input {
  background-color: rgb(249 250 251);
  border-width: 1px;
  border-color: rgb(209 213 219);
  color: rgb(17 24 39);
  border-radius: 0.5rem;
  display: block;
  width: 100%;
  padding: 0.625rem;
}

button {
  color: rgb(255, 255, 255);
  background-color: rgb(78, 78, 243);
  font-weight: 500;
  border-radius: 0.5rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  text-align: center;
  cursor: pointer;
  width: 60%;
}

.buttonSubmit {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
