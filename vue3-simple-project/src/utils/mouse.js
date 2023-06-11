import { onMounted, onUnmounted, ref } from "vue"

export function useMouse() {
    const x = ref(0)
    const y = ref(0)
    // 更新鼠标坐标轴
    const update = (e) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    // 组件生命周期
    onMounted(() => window.addEventListener("mousemove", update))
    onUnmounted(() => window.removeEventListener("mousemove", update))

    return {x, y}
}