import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // ваші дані тут, (альтернатива data)
        gameName: 'Gladiator',
        playersName: [],
        user: {
            name: 'Bob',
            strength: 12,
            speed: 11,
        },

        items:[
            {name: 'mecz', value: '111'},
            {name: 'bronik', value: '109'},
            {name: 'buty', value: '80'},
            {name: 'plecak', value: '30'},
        ],
    },
    mutations: {
        // методи для зміни данних в state (сетери), (альтернатива methods)
        // (state, itemName)  аргумент state - щоб можна було звернутись до даних зі state
        //                    аргумент itemName - вказує на конкретну вартість із state
        increment(state, itemName){
            state.user[itemName]++;
        },

        decrement(state, itemName){
            state.user[itemName]--;
        },

        addPlayerName(state, playerName){
            state.playersName.push(playerName);
        }
    },
    actions: {
        // для методів з ассинхронним кодом. Спочатку має виконатись асинхронний код а потім можна викликати функцію із mutations
        // context - доступ до обєктів із store, context = this.store
        // commit - звертаємось до mutations
       increment: (context, itemName) => {
           setTimeout(()=>{
               context.commit('increment', itemName);
           }, 2000)
       },
    },

    getters: {
        // ваші геттери тут (альтернатива computed)
        getItems: (state) => {
            return state.items;  //.filter(item => item.value > 50);
        }
    },
});