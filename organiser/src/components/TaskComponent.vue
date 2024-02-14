<template>

<li> 
    <div v-if="edit">  
    {{ task }}
    </div>
    <div v-else>
        <q-input v-model="task"></q-input>
    </div>
<q-btn @click="emitDelete" icon="remove"></q-btn>
<q-btn @click="edit = !edit" icon="edit"></q-btn>
</li>

</template>

<script setup lang="ts">
import { ref, toRef } from 'vue';


const props = defineProps(['task']);
const emit = defineEmits(['delete']);
const edit = ref<boolean>(true);
const task = toRef<string>(props.task);

function emitDelete(): void {
    
    emit('delete', props.task)
}

</script>