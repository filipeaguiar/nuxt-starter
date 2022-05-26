<template>
  <div>
    <h1>Logado: {{ authStore.isAuthenticated }}</h1>
    <v-container>
      <v-btn color="black" rounded @click="authStore.login({ mail: 'admin', password: 'admin' })">login</v-btn>

      <v-btn color="black" rounded @click="authStore.logout">logout</v-btn>
    </v-container>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from './store/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

onUpdated(() => {
  console.log(authStore.isAuthenticated)
})

</script>
