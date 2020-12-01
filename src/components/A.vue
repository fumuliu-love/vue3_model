<template>
  <B></B>
</template>

<script>
import { provide } from 'vue'
import { useStore } from 'vuex'
import B from './B.vue'

export default {
    components: {
        B
    },
    setup() {
        const obj = {
            name: 'Provide Inject',
            age: 34
        }
        // 向子组件以及子孙组件传递名为info的数据
        provide('info', obj);

        // 获取 vuex 实例
        
        const store = useStore();
        setTimeout(() => {
            store.state.age = 55
            console.log(store);
        }, 5000)
    }
}
</script>

<style>

</style>