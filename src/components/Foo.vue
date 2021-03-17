<template>
  <div>
    foo -----------------
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
})
</script>

<style scoped></style>
