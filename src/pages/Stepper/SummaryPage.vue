<template>
  <q-markup-table flat bordered>
    <thead>
      <tr>
        <th colspan="3">
          <div class="row no-wrap items-center">
            <div class="text-h6 q-ml-md">Personal info</div>
          </div>
        </th>
      </tr>
      <tr>
        <th class="text-left" width="15%">Label</th>
        <th class="text-right" width="80%">Value</th>
        <th class="text-right" width="5%">Validity</th>
      </tr>
    </thead>
    <tbody>
      <SummaryRowItem title="Fisrtname" :value="form.firstname" isValid="true"></SummaryRowItem>
      <SummaryRowItem title="Lastname" :value="form.lastname" isValid="false"></SummaryRowItem>
      <SummaryRowItem title="Birthdate" :value="form.birthdate" isValid="true"></SummaryRowItem>
      <SummaryRowItem title="Bio" :value="form.bio" isValid="true"></SummaryRowItem>
      <SummaryRowTitle title="Professional info"></SummaryRowTitle>
      <SummaryRowItem title="English proficiency" :value="form.professional.english" isValid="true"></SummaryRowItem>
      <SummaryRowItem title="French proficiency" :value="form.professional.french" isValid="false"></SummaryRowItem>
      <SummaryRowItem title="German proficiency" :value="form.professional.german" isValid="false"></SummaryRowItem>
      <template v-if="form.professional.degrees.length">
        <SummaryRowTitle title="Degrees"></SummaryRowTitle>
        <template v-for="(degree, i) in form.professional.degrees" :key="degree.id">
          <SummaryRowItem title="Title" :value="degree.title" isValid="true"></SummaryRowItem>
          <SummaryRowItem title="Field" :value="degree.field" isValid="true"></SummaryRowItem>
          <SummaryRowItem title="Year" :value="degree.year" isValid="true"></SummaryRowItem>
          <SummaryRowItem title="Details" :value="degree.details" isValid="true"></SummaryRowItem>
          <tr v-if="i < form.professional.degrees.length">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>
      <template v-if="form.published_works_count > 0">
        <SummaryRowTitle title="Publications"></SummaryRowTitle>
        <template v-for="(work, i) in form.published_works" :key="work.id">
          <SummaryRowItem title="Title" :value="work.title" isValid="true"></SummaryRowItem>
          <SummaryRowItem title="Link" :value="work.link" isValid="true"></SummaryRowItem>
          <SummaryRowItem title="Year" :value="work.year" isValid="true"></SummaryRowItem>
          <tr v-if="i < form.published_works_count - 1">
            <td colspan="3"></td>
          </tr>
        </template>
      </template>
    </tbody>
  </q-markup-table>
</template>
<script setup lang="ts">
import SummaryRowItem from 'src/components/SummaryRowItem.vue';
import SummaryRowTitle from 'src/components/SummaryRowTitle.vue';

import { useFormStore } from 'src/stores/form-store';
const { form } = useFormStore();
</script>

<style>
td {
  max-width: 400px;
  overflow: scroll;
}
</style>
