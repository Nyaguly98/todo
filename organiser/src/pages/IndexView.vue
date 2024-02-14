<template>

<h1>Task List</h1>

<q-input v-model="task"></q-input>
<q-btn @click="addTaskButton" icon="add"></q-btn>

<ul>
    <task-component
    v-for="i of taskList"
    :key="i.title"
    :task="i"
    @delete="deleteTask($event)"
/>
</ul>

</template>

<script setup lang="ts">
import TaskComponent from 'src/components/TaskComponent.vue';
import { ref } from 'vue';


const taskList = ref<Task[]>([]);

interface Task {
    title: string;
    priority: string;
}

const task = ref<Task>({title, priority});

function addTaskButton(): void{
    taskList.value.push(task.value);

}

function deleteTask(title: string): void {
    
    const index = taskList.value.findIndex((el)=> el.title == title);
    taskList.value.splice(index, 1);
}


</script>

<style>

</style>