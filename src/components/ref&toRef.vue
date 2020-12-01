<template>
  <p>{{ state1 }}</p>
  <button @click="add1">增加</button>
  <br />
  <p>{{ state2 }}</p>
  <button @click="add2">增加</button>
</template>

<script>
import { ref, toRef, toRefs } from 'vue';
export default {
  setup() {
    const obj = {count: 3}
    const state1 = ref(obj.count);
    const state2 = toRef(obj, 'count');

    function add1() {
        state1.value ++
        console.log('原始值：', obj)
        console.log('响应式数据对象：', state1);
    }

    function add2() {
        state1.value ++
        console.log('原始值：', obj)
        console.log('响应式数据对象：', state2);
    }
    // 1. `ref` 是对传入数据的拷贝；`toRef` 是对传入数据的引用
    // 2. `ref` 的值改变会更新视图；`toRef` 的值改变不会更新视图
    
     const obj2 = {
        name: '前端印象',
        age: 22,
        gender: 0
    }
    // 2. 将 obj 对象中属性count的值转化为响应式数据
    const state = toRefs(obj2)

    // 3. 打印查看一下
    console.log(state)
    
    return {
        state1,
        state2,
        add1,
        add2
    }
  },
};
</script>

<style>
</style>
