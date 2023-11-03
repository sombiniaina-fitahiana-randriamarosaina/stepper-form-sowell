<template>
  <div class="q-pa-md">
    <q-list>
      <template v-for="user in users" :key="user">
        <q-item>
          <q-item-section>
            <q-item-label class="bold-text"
              >{{ user.name }} ({{ user.username }})</q-item-label
            >
            <q-item-label>{{ user.email }} </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset />
      </template>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { fetchUsers } from 'src/services/users.services';
import { useQuasar } from 'quasar';

const $q = useQuasar();
$q.loadingBar.start();

let users = ref([]);

(() => {
  setTimeout(async () => {
    try {
      const data = await fetchUsers();
      users.value = data;
    } catch (error) {
      $q.notify({
        message: error.message,
        color: 'red',
      });
    } finally {
      $q.loadingBar.stop();
    }
  }, 2000); // Pour simuler une connexion lente et obtenir le loadingBar.
})();
</script>
<style>
.bold-text {
  font-weight: bold;
}
</style>
