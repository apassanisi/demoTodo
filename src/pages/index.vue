<script setup lang="ts">
	const filter = ref<string>();
	const todos = ref<Todo[]>([{ title: 'test todo', complete: false }]);

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

	onMounted(() => {
		const lStorage = JSON.parse(localStorage.getItem('todos'));
		if (lStorage === null) {
			todos.value = [{ title: 'test todo', complete: false }];
		} else {
			todos.value = lStorage;
		}
	});

	const addTodo = (todoTitle: string) => {
		todos.value.push({ title: todoTitle, complete: false });
		persist();
	};

	const deleteTodo = (todo: number) => {
		todos.value.splice(todo, 1);
		persist();
	};

	const toggleComplete = (todo: number) => {
		if (todos.value[todo]) {
			todos.value[todo].complete = !todos.value[todo].complete;
			persist();
		}
	};

	const updateFilter = (filter: string) => {
		filter = filter;
	};

	const persist = () => {
		localStorage.removeItem('todos');
		localStorage.setItem('todos', JSON.stringify(todos).replace(',', '\,'));
	};
</script>

<template>
	<div id="app">
		<TodoList
			@addTodo="addTodo"
			@updateFilter="updateFilter"
			:filter="filter"
		>
			<Todo
				v-for="(todo, index) in filteredTodos"
				:key="index"
				:todo="todo"
				:index="index"
				:title="todo.title"
				:complete="todo.complete"
				@deleteTodo="deleteTodo"
				@toggleComplete="toggleComplete"
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
