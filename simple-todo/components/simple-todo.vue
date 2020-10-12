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
				<button @click="addToFavorites(todo)">Add to favorites</button>
				</li>
		</ul>
		<h1 class = "favorites header"> Favorites </h1>
		<ul>
			<li
				v-for="(favorite, index) in favorites"
				:key="index"
			>
				{{favorite.text}}
				<button @click="removeFavorite(favorite)">Remove favorite</button>
			</li>
		</ul>
		<h1 class = "cat facts"> Cat Facts </h1>
		<p>How many cat facts?</p>
		<form @submit.prevent="fetchCat">
			<input
			  type="number"
			  placeholder="How many cat facts?"
			  v-model="number"
			/>
			<button> Add Todo </button>
		</form>
	</div>
</template>

<script>
import store from '../store';

export default {
	data() {
		return {
			text: '',
			number: 0
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
		addToFavorites(id) {
			store.commit('addToFavorites', id)
		},
		removeFavorite(id) {
			store.commit('removeFavorite', id)
		},
		fetchCat() {
			store.commit('fetchCat', this.number)
		}
	}
}
</script>
