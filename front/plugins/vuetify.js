import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
        primary: '#565656',
        secondary: '#9B9B9F',
        accent: '#65B3FC',
        error: 'red',
        info: '#FFBE5E',
        success: 'green',
        warning: 'red',
    },
    customProperties: true,
    iconfont: 'md',
})