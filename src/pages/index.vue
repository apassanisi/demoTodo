<script setup lang="ts">
	import { Filter } from '@/types/Filter';
	import { useStorage } from '@vueuse/core';

	export type Todo = {
		title: string;
		complete: boolean;
	};

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
</script>

<template>
	<div id="app">
		<TodoList
			@addTodo="(newTodo: Todo) => todos.push(newTodo)"
			@updateFilter="(newFilter: Filter) => filter = newFilter"
			:modelValue="filter"
		>
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
	body {
		background-color: #0f1117;
		color: #ffffff;
	}

	h1,
	h2,
	h3 {
		font-family: khula;
	}
	p,
	a,
	button,
	input,
	select {
		font-family: muli;
	}

	button {
		border: 2px solid #e40046;
		background-color: #0f1117;
		padding: 0.15rem 0.5rem;
	}
</style>

<route lang="yaml">
name: home
layout: default
</route>
