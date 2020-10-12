<template>
	<div>
		<form @submit.prevent="addTodo">
			<input
			  type="text"
			  placeholder="What must be done?"
			  v-model="text"
			/>
			<button> Add Todo </button>
		</form>
		<ul>
			<li
			  v-for="(todo, index) in todos"
			  :key="index"
			>{{ todo.text }}
				<button @click="removeTodo(todo)">x</button>
				<button @click="addTofavorites(todo)">Add to favorites</button>
				</li>
		</ul>
		<h1 class = "favorites header"> favorites </h1>
		<ul>
			<li
				v-for="(favorite, index) in favorites"
				:key="index"
			>
				{{favorite.text}}
				<button @click="removefavorite(todo)">Remove favorite</button>
			</li>
		</ul>
	</div>
</template>

<script>
import store from '../store';

export default {
	data() {
		return {
			text: ''
		}
	},

	computed: { todos: () => store.state.todos, favorites: () => store.state.favorites },

	methods: {
		addTodo() {
			store.commit('addTodo', this.text)
			this.text = ''
		},
		removeTodo(id) {
			store.commit('removeTodo', id)
		},
		addTofavorites(id) {
			store.commit('addTofavorites', id)
		},
		removefavorite(id) {
			store.commit('removefavorite', id)
		}
	}
}
</script>
