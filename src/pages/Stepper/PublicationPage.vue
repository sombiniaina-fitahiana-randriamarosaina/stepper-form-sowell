<template>
  <q-form>
    <template v-for="work in form.published_works" :key="work.id">
      <div class="column q-gutter-y-sm">
        <q-input outlined label="Title" v-model="work.title">
          <template v-slot:prepend>
            <q-icon name="book" />
          </template>
        </q-input>
        <q-input 
          outlined label="Field" 
          v-model="work.link" 
          :rules="[validateLink]">
          <template v-slot:prepend>
            <q-icon name="link" />
          </template>
        </q-input>
        <q-input
          label="Year"
          v-model.number="work.year"
          type="number"
          :rules="[
            (val) => (val >= 1923 && val < 2023) || 'Please type a valid year',
          ]"
          outlined
        >
          <template v-slot:prepend>
            <q-icon name="calendar_month" />
          </template>
        </q-input>
      </div>
      <q-separator class="q-mb-md"></q-separator>
    </template>
  </q-form>
</template>
<script setup lang="ts">
import { useFormStore } from 'src/stores/form-store';
import { computed } from 'vue';

const { form } = useFormStore();

const validateLink = computed(() => (value : string) => {
      const urlPattern = /^http(s)?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\S*)$/;
      return urlPattern.test(value) ? true : 'Invalid link. Please enter a valid HTTP or HTTPS link.';
})
</script>
