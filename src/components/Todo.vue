<script setup lang="ts">
	const props = defineProps<{
		title: string;
		complete: boolean;
		index: number;
	}>();
	const deleteTodo = () => {
		emit('deleteTodo', props.index);
	};
	const toggleComplete = () => {
		emit('toggleComplete', props.index);
	};
</script>

<template>
	<div @click="toggleComplete" class="todo" :class="{ complete }">
		<p>{{ title }}</p>
		<small>{{ complete ? 'Complete' : 'Incomplete' }}</small>
		<button @click.prevent="deleteTodo">Delete</button>
	</div>
	<div></div>
</template>

<style lang="scss">
	.todo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: red;
		margin: 0.5rem 0;
		cursor: pointer;
		padding-left: 1rem;
		transition: all 0.2s ease-in;
		position: relative;
		p {
			padding-top: 0.3rem;
		}
	}

	small {
		font-size: 0.7rem;
		position: absolute;
		top: 0.1rem;
		right: 4.5rem;
	}
	.todo.complete {
		background-color: green;
	}
</style>
