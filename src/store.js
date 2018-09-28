import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        checkBoxOptions: {
            1: {
                value: "oppositionAll",
                key: "Oppositions",
            },
            2: {
                value: "opposition",
                id: 5,
                key: "Opposition Team Name"
            },
            3: {
                value: "match_result",
                id: 8,
                key: "Match Result"
            },
            4: {
                value: "date",
                id: 7,
                key: 'Date'
            },
            5: {
                value: "ground",
                id: 6,
                key: 'Ground'
            }
        },
        enableToShow: false,
        match_toShow: {},
        selectedFilter: ''

    },
    getters: {
        checkBoxOptions(state) {
            return state.checkBoxOptions
        },
        matchToShow(state){
          return state.match_toShow
        },
    },
    mutations: {
        filterMutation(state, choice) {
            state.filter_choice.push(choice)
        },
        indexMutation(state, matchR) {
            state.match_toShow = matchR;
        }
    },
    actions: {
        DataBaseBuilding({ commit }, filter) {
            let choice = filter
            commit('filterMutation', choice)
        },
        SelectedCardOFIndex({ commit }, matchR) {
            const match = {
                batting_score: matchR.batting_score,
                wickets: matchR.wickets,
                runs_conceded: matchR.runs_conceded,
                catches: matchR.catches,
                stumps: matchR.stumps,
                opposition: matchR.opposition,
                ground: matchR.ground,
                date: matchR.date,
                match_result: matchR.match_result,
                result_margin: matchR.result_margin,
                toss: matchR.toss,
                batting_innings: matchR.batting_innings
            };
            commit('indexMutation', match)
        }
    }

})
