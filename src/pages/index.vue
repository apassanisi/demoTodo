<script setup lang="ts">
	import { Filter } from '@/types/Filter';
	import { Theme } from '@/types/Theme';
	import { useStorage } from '@vueuse/core';

	export type Todo = {
		title: string;
		complete: boolean;
	};

	const THEMES: Theme[] = ['notebook', 'phone'];
	const currentTheme = ref<number>(0);
	const filter = ref<string>('all');

	const todos = useStorage('demo-Todo:todolist', [
		{ title: 'First Todo', complete: false },
	]);

	const filteredTodos = computed(() => {
		if (filter.value === 'all') {
			return todos.value;
		} else if (filter.value === 'complete') {
			return todos.value.filter(todo => {
				return todo.complete === true;
			});
		} else if (filter.value === 'incomplete') {
			return todos.value.filter(todo => {
				return todo.complete === false;
			});
		}
	});

	const switchTheme = () => {
		if (currentTheme.value < THEMES.length - 1) {
			currentTheme.value++;
		} else {
			currentTheme.value = 0;
		}
	};
</script>

<template>
	<div class="content" :class="THEMES[currentTheme]">
		<button @click="switchTheme">Theme Switcher</button>
		<TodoList
			@addTodo="(newTodo: Todo) => todos.push(newTodo)"
			@updateFilter="(newFilter: Filter) => filter = newFilter"
			:modelValue="filter"
		>
			<div class="rule-line"></div>
			<Todo
				v-for="(todo, index) in filteredTodos"
				:key="index"
				:todo="todo"
				:index="index"
				:title="todo.title"
				:complete="todo.complete"
				@deleteTodo="(todoIndex: number) => todos.splice(todoIndex, 1)"
				@toggleComplete="(todoIndex: number) => todos[todoIndex].complete = !todos[todoIndex].complete"
			/>
			<p v-if="!todos.length">Enter a todo item!</p>
		</TodoList>
	</div>
</template>

<style lang="scss">
	.content {
		@apply flex flex-col px-4 py-8 gap-4;
		&.notebook {
			@apply h-full bg-purple;
			.todolist {
				@apply bg-paper rounded-md relative shadow-2xl;
				&__top {
					@apply p-4 pl-14;
				}
				&__bottom {
					@apply border-t border-t-blueLine p-2 pl-14;
					.rule-line {
						@apply h-full w-[1px] absolute top-0 left-10 bg-redLine;
					}
				}
			}
		}
		&.phone {
			@apply h-full bg-black text-yellow;
			p,
			a,
			button,
			input,
			select {
				@apply font-roboto;
			}
			h1,
			span {
				@apply font-arvo font-bold;
			}
		}
	}

	// body {
	// 	background-color: #0f1117;
	// 	color: #ffffff;
	// }

	// h1,
	// h2,
	// h3 {
	// 	font-family: khula;
	// }
	// p,
	// a,
	// button,
	// input,
	// select {
	// 	font-family: muli;
	// }

	// button {
	// 	border: 2px solid #e40046;
	// 	background-color: #0f1117;
	// 	padding: 0.15rem 0.5rem;
	// }
</style>

<route lang="yaml">
name: home
layout: default
</route>
