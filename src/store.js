import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patients: [
            {
                name: 'Ramón Antonio Esteban Gómez de Valdés',
                age: 97,
                CC: 3543213514,
                profileImg: 'https://epmghispanic.media.clients.ellingtoncms.com/img/photos/2019/06/07/don_ramon_t640x360.jpg?0d5a8931fa89b9128468049ef05510d8e5899a73'
            },
            {
                name: 'El mejor presidente de colombia',
                age: 68,
                CC: 1230000,
                profileImg: 'https://i.pinimg.com/originals/65/45/fc/6545fc56ba7b96c68d69cd961dd28bb5.jpg'
            },
            {
                name: 'Ivan Duque',
                age: 43,
                CC: 788645,
                profileImg: '@/assets/ivanNero.png'
            },
            {
                name: 'Madre miaaaa el bichoooo',
                age: 35,
                CC: 7777777777777,
                profileImg: 'https://i.ytimg.com/vi/WMk_KX_x6X4/maxresdefault.jpg'
            }
        ]
    },
    mutations: {

    },
    actions: {

    }
})