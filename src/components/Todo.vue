<script setup lang="ts">
	import { Todo } from '@/pages/index.vue';
	import IconCheckBox from '~icons/ant-design/check-circle-filled';
	import IconCheckBoxFill from '~icons/ant-design/check-circle-outlined';
	import IconDelete from '~icons/ant-design/delete-filled';

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
	<div class="todo" :class="{ complete: todo.complete }">
		<div class="todo__title">
			<p
				class="todo__title__checkbox"
				@click="emit('toggleComplete', index)"
			>
				<IconCheckBox v-if="todo.complete" />
				<IconCheckBoxFill v-if="!todo.complete" />
			</p>
			<p>{{ todo.title }}</p>
		</div>
		<IconDelete class="todo__delete" @click="emit('deleteTodo', index)" />
	</div>
</template>

<style lang="scss"></style>
