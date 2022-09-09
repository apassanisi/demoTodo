<script setup lang="ts">
	import { Todo } from '@/pages/index.vue';
	import { Filter } from '@/types/Filter';

	const props = defineProps<{
		modelValue: Filter;
	}>();

	const emit = defineEmits<{
		(e: 'addTodo', newTodo: Todo): void;
		(e: 'updateFilter', newFilter: Filter): void;
	}>();

	const newTodo = ref<string>();
	const filter = useVModel(props, 'modelValue', emit, { passive: true });

	const addTodo = () => {
		if (newTodo.value) {
			emit('addTodo', { title: newTodo.value, complete: false });
			newTodo.value = '';
		}
	};
</script>

<template>
	<div class="todolist">
		<div class="todolist__top">
			<h1><span>TODO</span> APP</h1>
			<div class="todolist__add-todo">
				<input
					type="text"
					placeholder="Add a new todo..."
					v-model="newTodo"
				/>
				<button @click="addTodo()">Add Todo</button>
			</div>
			<select
				class="todolist__filter"
				v-model="filter"
				@change="emit('updateFilter', filter)"
			>
				<option value="all">Select Filter...</option>
				<option value="complete">Complete</option>
				<option value="incomplete">Incomplete</option>
			</select>
		</div>
		<div class="todolist__bottom">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
	.todolist {
		// border: 1px red dashed;
		&__filter {
			// border: 1px red dashed;
		}
	}
	// .todolist {
	// 	text-align: center;
	// 	margin: 1rem;
	// 	padding: 1rem;
	// 	display: flex;
	// 	flex-direction: column;
	// 	max-width: 500px;
	// 	background-color: #171a21;
	// 	margin: 4rem auto 0 auto;
	// 	&__add-todo {
	// 		margin: 0.5rem 0;
	// 		display: flex;
	// 		justify-content: space-between;
	// 		input {
	// 			color: black;
	// 			padding-top: 0.3rem;
	// 			padding-left: 0.5rem;
	// 		}
	// 	}
	// 	&__filter {
	// 		margin: 0.5rem 0;
	// 		border: 1px solid #aaa;
	// 		color: black;
	// 	}

	// 	h1 {
	// 		font-size: 2rem;
	// 		color: #e40046;
	// 		margin-bottom: 2rem;
	// 		font-weight: 600;
	// 		span {
	// 			color: #ffffff;
	// 		}
	// 	}
	// }
</style>
