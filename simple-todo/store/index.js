import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
			state.todos.splice(state.todos.indexOf(todo), 1)
		},
		addTofavorites(state, todo) {

			for (let index = 0; index < state.favorites.length; index++)
				if (state.favorites[index] == todo)
					return

			state.favorites.push(todo)
		},
		removefavorite(state, todo) {
			state.favorites.splice(state.favorites.indexOf(todo), 1)
		},
		fetchCat(state, number) {
			//TODO
		}
	}
})
