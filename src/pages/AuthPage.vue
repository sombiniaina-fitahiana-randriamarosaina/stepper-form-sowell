<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding>
        <div class="row window-height">
          <div class="col column content-center bgWhite">
            <div class="q-mt-xl">
              <q-img src="src/assets/Sowell-logo.svg" style="width: 210px" />
            </div>
            <div class="column col content-center justify-center center">
              <div class="q-pl-md q-pr-md" style="max-width: 500px">
                <h4 class="title">Login</h4>
                <div class="subtitle">
                  Type a username and a complex password to log in
                </div>

                <q-form @submit="handleSubmit">
                  <div>
                    <div
                      class="q-ml-xs q-mb-xs text-subtitle2 text-weight-bold"
                    >
                      Username
                    </div>
                    <q-input
                      v-model.trim="username"
                      dense
                      outlined
                      input-class="text-subtitle2 text-weight-medium"
                    />
                    <div
                      class="q-ml-xs q-mb-xs text-subtitle2 text-weight-bold"
                    >
                      Password
                    </div>
                    <q-input
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      dense
                      outlined
                      input-class="text-subtitle2 text-weight-bold"
                    >
                      <template #append>
                        <q-icon
                          :name="showPassword ? ionEyeOffSharp : ionEyeSharp"
                          class="cursor-pointer q-mr-sm lightenDark"
                          @click="showPassword = !showPassword"
                        />
                      </template>
                    </q-input>
                  </div>
                  <div class="row q-mt-md">
                    <q-btn
                      label="Log in"
                      color="primary"
                      no-caps
                      unelevated
                      data-cy="submit-login"
                      text-color="white"
                      :loading="isLoading"
                      type="submit"
                      :disable="isSubmitBtnDisabled || isLoading"
                      class="submitBtn text-subtitle2 text-weight-bold"
                    />
                  </div>
                </q-form>
              </div>
            </div>
          </div>
          <div
            class="column col justify-center content-center mobile"
            :style="'background: #eef8fd'"
          >
            <q-img
              src="src/assets/illustration-login.svg"
              class="q-pl-md q-pr-md logoWhite"
            />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ionEyeSharp, ionEyeOffSharp } from '@quasar/extras/ionicons-v5';
import { computed, ref } from 'vue';
const username = ref('');
const password = ref('');
const showPassword = ref(false);
const isLoading = ref(false);

const isSubmitBtnDisabled = computed(() => {
  return false;
});

const handleSubmit = () => {
  console.log('🚀 ~ file: AuthPage.vue:88 ~ handleSubmit ~ handleSubmit:');
};
</script>
