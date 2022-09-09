<script setup lang="ts">
	import { Todo } from '@/pages/index.vue';

	const emit = defineEmits<{
		(e: 'deleteTodo', todoIndex: number): void;
		(e: 'toggleComplete', todoIndex: number): void;
	}>();

	const props = defineProps<{
		todo: Todo;
		index: number;
	}>();
</script>

<template>
	<div
		@click="emit('toggleComplete', index)"
		class="todo"
		:class="{ complete: todo.complete }"
	>
		<p>{{ todo.title }}</p>
		<small>{{ todo.complete ? 'Complete' : 'Incomplete' }}</small>
		<button @click="emit('deleteTodo', index)">Delete</button>
	</div>
</template>

<style lang="scss">
	.todo {
		// border: 1px red dashed;
	}
	// .todo {
	// 	display: flex;
	// 	justify-content: space-between;
	// 	align-items: center;
	// 	background-color: red;
	// 	margin: 0.5rem 0;
	// 	cursor: pointer;
	// 	padding-left: 1rem;
	// 	transition: all 0.2s ease-in;
	// 	position: relative;
	// 	p {
	// 		padding-top: 0.3rem;
	// 	}
	// }

	// small {
	// 	font-size: 0.7rem;
	// 	position: absolute;
	// 	top: 0.1rem;
	// 	right: 4.5rem;
	// }
	// .todo.complete {
	// 	background-color: green;
	// }
</style>
