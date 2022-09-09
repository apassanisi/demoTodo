<script setup lang="ts">
	import { Todo } from '@/pages/index.vue';
	import { Filter } from '@/types/Filter';
	import IconPlus from '~icons/ant-design/plus-circle-filled';
	import IconCircle from '~icons/akar-icons/circle';
	import IconCircleFill from '~icons/akar-icons/circle-fill';

	const props = defineProps<{
		modelValue: Filter;
	}>();

	const emit = defineEmits<{
		(e: 'addTodo', newTodo: Todo): void;
		(e: 'update:modelValue', newFilter: Filter): void;
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
			<div>
				<h1>demo<span>TODO</span></h1>
				<div class="todolist__top__filter">
					<div
						class="todolist__top__filter-item"
						@click="filter = 'all'"
					>
						<p>ALL</p>
						<IconCircleFill v-if="filter === 'all'" />
						<IconCircle v-else />
					</div>
					<div
						class="todolist__top__filter-item"
						@click="filter = 'complete'"
					>
						<p>DONE</p>
						<IconCircleFill v-if="filter === 'complete'" />
						<IconCircle v-else />
					</div>
					<div
						class="todolist__top__filter-item"
						@click="filter = 'incomplete'"
					>
						<p>NOT DONE</p>
						<IconCircleFill v-if="filter === 'incomplete'" />
						<IconCircle v-else />
					</div>
					<!-- <select v-model="filter" @change="emit('updateFilter', filter)">
					<option value="all">Select Filter...</option>
					<option value="complete">Complete</option>
					<option value="incomplete">Incomplete</option>
				</select> -->
				</div>
			</div>

			<div class="todolist__top__add-todo">
				<input
					type="text"
					placeholder="Add a new todo..."
					v-model="newTodo"
				/>
				<IconPlus class="cursor-pointer mt-0.5" @click="addTodo()"
					>Add Todo</IconPlus
				>
			</div>
		</div>
		<div class="todolist__bottom">
			<slot />
		</div>
	</div>
</template>

<style lang="scss"></style>
