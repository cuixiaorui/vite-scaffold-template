<template>
  <div>
    home vuex -> count : {{ count }}
    <button @click="handleClick">click</button>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    console.log(store)
    const count = computed(() => store.state.count)
    const handleClick = () => {
      store.commit('add')
    }
    return {
      count,
      handleClick,
    }
  },
}
</script>

<style></style>
