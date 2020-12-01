<template>
  <div>{{ num }}</div>
  <div ref="el">div 元素</div>
  <span>{{ content }}</span>
</template>

<script>
import { getCurrentInstance, inject, onMounted, reactive, ref, watchEffect } from "vue";
export default {
  setup() {
    console.log(inject("info"));

    const state = reactive({ count: 0, name: "zs" });

    // `watchEffect` 它与 `watch` 的区别主要有以下几点：
    // 1. 不需要手动传入依赖
    // 2. 每次初始化时会执行一次回调函数来自动获取依赖
    // 3. 无法获取到原值，只能得到变化后的值
    watchEffect(() => {
        console.log(state.count);
        console.log(state.name);
        /*  初始化时打印：
            0
            zs
            1秒后打印：
            1
            ls
        */
    });

    setTimeout(() => {
      state.count++;
      state.name = "ls";
    }, 4000);

    // getCurrentInstance
    const num = ref(3);
    const instance = getCurrentInstance();
    console.log(instance);

    // 创建一个DOM引用，名称必须与元素的ref属性名相同
    const el = ref(null)
    // 在挂载后才能通过 el 获取到目标元素
    onMounted(() => {
        el.value.innerHTML = '内容被修改'
    })

    const content = ref('c组件')

    return {
        content,
        num,
        el // 把创建的引用 return 出去
    };
  },
};
</script>

<style>
</style>