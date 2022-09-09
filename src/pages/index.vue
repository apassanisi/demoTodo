<script setup lang="ts">
	import { Filter } from '@/types/Filter';
	import { Theme } from '@/types/Theme';
	import { useStorage } from '@vueuse/core';
	import TactileNoiseUrl from '../assets/tactile_noise.webp';
	import PaperUrl from '../assets/paper.jpg';
	import IconArrowUp from '~icons/ant-design/arrow-up-outlined';

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

	// const switchTheme = () => {
	// 	if (currentTheme.value < THEMES.length - 1) {
	// 		currentTheme.value++;
	// 	} else {
	// 		currentTheme.value = 0;
	// 	}
	// };
</script>

<template>
	<div
		class="content"
		:style="{ backgroundImage: `url(${TactileNoiseUrl})` }"
		:class="THEMES[currentTheme]"
	>
		<!-- <button
			class="bg-black text-white font-bold rounded-sm w-fit px-4 py-1 mx-auto shadow-lg"
			@click="switchTheme"
		>
			Theme Switcher
		</button> -->
		<TodoList
			:style="{ backgroundImage: `url(${PaperUrl})` }"
			@addTodo="(newTodo: Todo) => todos.push(newTodo)"
			@update:modelValue="(newFilter: Filter) => filter = newFilter"
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
			<div v-if="!todos.length" class="no-todos">
				<IconArrowUp class="mt-0.5" />
				<p>Enter a todo item!</p>
			</div>
		</TodoList>
	</div>
</template>

<style lang="scss">
	.content {
		@apply flex flex-col px-4 py-8 gap-4;
		&.notebook {
			@apply h-full;
			p,
			a,
			button,
			input,
			select {
				@apply font-roboto text-base;
			}
			h1,
			span {
				@apply font-arvo font-bold;
			}
			.todolist {
				@apply bg-paper rounded-md relative shadow-2xl max-w-xl w-full mx-auto;
				&__top {
					@apply p-4 pl-14 gap-8 flex flex-col border-b border-b-blueLine;
					> div {
						@apply flex justify-between;
					}
					h1 {
						@apply text-2xl;
					}
					span {
						@apply text-yellow;
					}
					&__filter {
						@apply flex flex-col text-xs;
						&-item {
							@apply flex gap-1 justify-end cursor-pointer;
							p {
								@apply text-xs;
							}
						}
					}
					&__add-todo {
						@apply flex gap-2;
						input {
							@apply w-full px-1 text-base focus:outline-none border-dashed border-b border-b-black;
						}
					}
				}
				&__bottom {
					@apply overflow-hidden pb-4;
					.rule-line {
						@apply h-full w-[1px] absolute top-0 left-10 bg-redLine;
					}
					.todo {
						@apply relative py-1 pr-4 pl-14 flex justify-between gap-2 border-b border-b-blueLine;
						&__title {
							@apply flex items-center gap-2;
							&__checkbox {
								@apply cursor-pointer mt-0.5;
							}
						}
						&__delete {
							@apply cursor-pointer mt-0.5;
						}
					}
				}
				.no-todos {
					@apply relative py-1 pr-4 pl-14 flex gap-2 border-b border-b-blueLine;
				}
			}
		}
	}
</style>

<route lang="yaml">
name: home
layout: default
</route>
