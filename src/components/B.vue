<template>
{{ state }} <br>
{{ state2.count }} <br>
{{ state3.count}}<br>
{{state3.name}}
  <CC ref="cc"></CC>
</template>

<script>
import CC from './CC.vue'
import { inject, onMounted, reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        CC
    },
    setup() {
        console.log(inject('info'))

        /**
         * watch**：watch( source, cb, [options] )
         * 参数说明：
         * - source：可以是表达式或函数，用于指定监听的依赖对象
         * - cb：依赖对象变化后执行的回调函数
         * - options：可参数，可以配置的属性有 immediate（立即触发回调函数）、deep（深度监听
         */
        const state = ref(0)
        watch(state, (newValue, oldValue) => {
            console.log(`原始值${oldValue}`);
            console.log(`新值为${newValue}`);
        })
        setTimeout(() => {
            state.value ++
        }, 1000);

        const state2 = reactive({count: 0})
        watch(() => state2.count, (newValue, oldValue) => {
            console.log(`原值为${oldValue}`);
            console.log(`新值为${newValue}`);
        })
        setTimeout(() => {
            state2.count ++
        }, 2000);

        const store = useStore()

        // watch 同时监听多个值
        const state3 = reactive({count: 11, name: 'xz'});
        state3.count = store.state.age;
        watch([() => state3.count, () => state3.name], ([newCount, newName], [oldCount, oldName]) => {
            console.log(oldCount);
            console.log(newCount);
            console.log(oldName);
            console.log(newName);
        });
        // setTimeout(() => {
        //     state3.count ++;
        //     state3.name = 'ls';
        // }, 3000)
        const cc = ref(null);
        onMounted(() => {
            // console.log(cc.value.content)
            cc.value.content = 'B组件修改的内容'
        })
        return {
            state,
            state2,
            state3,
            cc
        }
    }
}
</script>

<style>

</style>