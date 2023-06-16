<script setup>
    import {defineProps, defineEmits, ref, computed} from 'vue'
    const props = defineProps({
        score: Number,
        color: {type: String, default: "orange"},
        // 星星数量
        stars: {type: Number, default: 5}
    })
    const themeObj = { 'black': '#00', 'white': '#fff', 'red': '#f5222d', 'orange': '#fa541c', 'yellow': '#fadb14', 'green': '#73d13d', 'blue': '#40a9ff', }

    const score = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.score, 10 - props.score))
    const fontstyle = computed(() => "color:" + themeObj[props.color] + ";font-size:2rem")

    const stars = ref(props.stars)

    const width = ref(props.score)
    const fontwidth = computed(() => `width:${width.value}em;`)

    const emits = defineEmits("update-rate")

    const mouseOver = (num) => width.value = num
    const mouseOut = () => width.value = props.score
    const onRate = (num) => emits("update-rate", num)

</script>

<template>
    <div :style="fontstyle">
        <div class="rate" @mouseout="mouseOut()">
            <span @mouseover="mouseOver(num)" v-for="num in stars" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in stars" :key="num">★</span>
            </span>
        </div>
    </div>
</template>
<style scoped>
.rate{  
    position: relative;  
    display: inline-block;
}
.rate > span.hollow {  
    position:absolute;  
    display: inline-block;  
    top: 0;  
    left: 0;  
    overflow: hidden;
}
</style>