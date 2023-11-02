<template>
    <tr>
        <td class="text-left">{{ title }}</td>
        <td class="text-right">{{ value }}</td>
        <td class="text-right">
          <q-icon :name="valid ? 'check' : 'error'" :color="valid ? 'positive' : 'negative'" size="2em"></q-icon>
        </td>
      </tr>
</template>

<script setup lang="ts">
const { title, value, validators} = defineProps(['title', 'value', 'validators']);

let valid = true;
validators?.forEach(element => {
  if(!element(value)) valid = false;
});

</script>