
import {InertiaApp} from '@inertiajs/inertia-vue';
import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faEject, faUserPlus, faUndoAlt, faTrashAlt, faUpload, faPlus, faAngleDoubleLeft, faAngleDoubleRight,
    faAngleLeft, faAngleRight, faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window._ = require('lodash');

window.events = new Vue();


library.add(
    faEject, faUserPlus, faUndoAlt, faTrashAlt, faUpload, faPlus, faAngleDoubleLeft, faAngleDoubleRight,
    faAngleLeft, faAngleRight, faAngleUp, faAngleDown
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(InertiaApp);

const app = document.getElementById('app');

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);
