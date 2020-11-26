
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../views/index.vue'
import SetupTest from '/@cpt/setup_test.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', name: 'index', component: Index, children: []},
        {path: '/setupTest', name: 'setupTest', component: SetupTest}
    ]
})

export { router }
