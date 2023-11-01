<template>
    <tr>
        <td class="text-left">{{ title }}</td>
        <td class="text-right">{{ value }}</td>
        <td class="text-right">
          <q-icon :name="isValid == 'true' ? 'check' : 'error'" :color="isValid == 'true' ? 'positive' : 'negative'" size="2em"></q-icon>
        </td>
      </tr>
</template>

<script setup lang="ts">
const { title, value, isValid } = defineProps(['title', 'value', 'isValid']);

</script>