<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'setupTest',
  setup() {
    const states = reactive({
      msg: "setup  API"
    });

    return {
      ...toRefs(states)
    }
  }
}
</script>
