<template>
  <div>
    foo -----------------

    <button @click="handleLogin">login</button>
    <button @click="handleGetUser">get user</button>
    <Bar></Bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Bar from '@/components/Bar.vue'

export default defineComponent({
  components: {
    Bar,
  },
  setup() {
    const handleLogin = () => {
      fetch('/login', {
        method: 'POST',
      }).then(res => {
        console.log('login completed')
        console.log(res)
      })
    }
    const handleGetUser = () => {
      fetch('/user').then(res => {
        console.log(res)
      })
    }

    return {
      handleLogin,
      handleGetUser,
    }
  },
})
</script>

<style scoped></style>
