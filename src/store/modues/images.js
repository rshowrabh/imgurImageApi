
import api from './../../api/imgur'
import {router}  from '../../main'

const state = {
    images :[]
};

const getters = {
    allImages : state => state.images
};

const actions = {
   async fetchImages({rootState, commit}){
       const {token} = rootState.auth
      const response = await  api.fetchImages(token);
      console.log(response)
      commit('setImages', response.data.data)
    },

    async uploadImages({rootState} , images){
        // get access token
        const {token} = rootState.auth

        // call api module
        await api.upload(images, token);


        // redirect user to image list 
        router.push('/gallary')

       
        console.log(images);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}