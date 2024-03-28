<script setup></script>

<template>
  <section>
    <div class="contentOne">
      <div class="contentTwo">
        <div class="contentThree">
          <h1>Register your account</h1>
          <form class="loginForm" action="#">
            <div>
              <label for="name">Your name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John"
                required="true"
              />
            </div>
            <div>
              <label for="lastname">Your lastname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                required="true"
              />
            </div>
            <div>
              <label for="email">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                required="true"
              />
            </div>
            <div>
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                required="true"
              />
            </div>
            <div class="buttonSubmit">
              <button type="submit">Sign in</button>
            </div>
          </form>
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
