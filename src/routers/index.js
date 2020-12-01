
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../views/index.vue'
import SetupTest from '/@cpt/setup_test.vue'
import ReactiveTest from '/@cpt/reactive_test.vue'
import RefToRef from '/@cpt/ref&toRef.vue'
import ShallowReactive from '/@cpt/shallowReactive.vue'
import MarkRaw from '/@cpt/markRaw.vue'
import A from '/@cpt/A.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'index', component: Index, children: []},
        {path: '/setupTest', name: 'setupTest', component: SetupTest},
        {path: '/reactiveTest', name: 'reactiveTest', component: ReactiveTest},
        {path: '/refToRef', name: 'refToRef', component: RefToRef},
        {path: '/shallowReactive', name: 'shallowReactive', component: ShallowReactive},
        {path: '/markRaw', name: 'markRaw', component: MarkRaw},
        {path: '/a', name: 'a', component: A}
    ]
})

export { router }
