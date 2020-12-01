<template>
  <div>
    {{ state }}
  </div>
</template>

<script>
import { reactive, ref, toRef } from "vue";
export default {
  name: "reactiveTest",
//   setup() {
//     const state = reactive({
//       count: 3,
//     });

//     const obj = {count: 3}
//     const state1 = ref(obj)
//     const state2 = reactive(obj)
//     /**
//      * 建议：
//      *   1. 基本类型值（`String` 、`Nmuber` 、`Boolean` 等）或
//      * 单值对象（类似像`{count: 3}` 这样只有一个属性值的对象）使用 `ref`
//      *  2. 引用类型值（`Object` 、`Array`）使用 `reactive`
//      */
//     console.log(state1);
//     console.log(state2);

//     return {
//       state,
//     };
//   },
  setup() {
      const obj = {count: 3, name: "toRef"}
      const state = toRef(obj, 'count')

      return {
          state
      }
  }
};
</script>

<style>
</style>