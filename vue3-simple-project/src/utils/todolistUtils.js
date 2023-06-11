import {computed, ref} from 'vue'

export function useTodos() {
    const title = ref("")
    const todos = ref([
        {
            title: "学习Java",
            done: false
        },
        {
            title: "学习Python",
            done: true
        }
    ])
    // computed
    const active = computed(() => todos.value.filter(v => !v.done).length)
    const all = computed(() => todos.value.length)
    const allDone = computed({
        get: () => active === 0,
        set: (v) => todos.value.forEach((todo) => todo.done = v)
    })

    function addTodo() {
        todos.value.push({
            title: title.value,
            done: false
        })
        title.value = ""
    }
    function clear() {
        todos.value = todos.value.filter(i => !i.done)
    }
    return {title, todos, active, all, allDone, addTodo, clear}
}
