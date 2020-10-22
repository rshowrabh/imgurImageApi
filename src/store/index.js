import Vuex from 'vuex'
import Vue from 'vue'
import auth from './modues/auth'
import images from './modues/images'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
});