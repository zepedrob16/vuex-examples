import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const URL = 'https://cat-fact.herokuapp.com'

export default new Vuex.Store({
	state: {
		todos: [],
		favorites: []
	},
	mutations: {
		addTodo(state, text) {
			state.todos.push({ text })
		},
		removeTodo(state, todo) {
			for (let index = 0; index < state.favorites.length; index++)
				if (state.favorites[index] == todo)
					state.favorites.splice(index, 1)

			state.todos.splice(state.todos.indexOf(todo), 1)
		},
		addToFavorites(state, todo) {

			for (let index = 0; index < state.favorites.length; index++)
				if (state.favorites[index] == todo)
					return

			state.favorites.push(todo)
		},
		removeFavorite(state, todo) {
			state.favorites.splice(state.favorites.indexOf(todo), 1)
		},
		fetchCat(state, number) {
			axios.get(`${URL}/facts/random?animal_type=cat&amount=${number}`).then(res =>{
				res.data.forEach(fact => {
					var text = fact.text
					state.todos.push({ text })
				});
				//var text = res.data.text
				//state.todos.push({ text })
			})
		}
	}
})
