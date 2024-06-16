import {createStore} from 'vuex';
import task from './module/task';
import product from "@/store/module/product";

const store = createStore({
    modules: {
        task,
        product
    },
});

export default store;
