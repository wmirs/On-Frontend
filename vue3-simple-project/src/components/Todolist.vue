<script setup>
import { ref } from 'vue'
import { useTodos } from '../utils/todolistUtils'
import { useMouse } from '../utils/mouse.js'

const count = ref(1)
const color = ref("red")
const add = () => {
    count.value++
    color.value = Math.random() > 0.5 ? "blue" : "red"
}


const {title, todos, active, all, allDone, addTodo, clear} = useTodos()

const {x, y} = useMouse()
console.log(x, y)
</script>

<template>
    <div>
        <h1 @click="add">{{ count }}</h1>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <button v-if="active < all" @click="clear">清理</button>
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{done: todo.done}">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选<input type="checkbox" v-model="allDone" />
            <span>{{ active }} / {{ all }}</span>
        </div>
    </div>
</template>
<style scoped>
h1{
    color: v-bind(color);
}
</style>