<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { marked } from 'marked'
import { mockNotes } from './utils/data_mock'

// 笔记列表
const notes = ref([])
// 被选中的笔记
const selectedId = ref(null)
const selectedNote = computed(() => selectedId.value ? notes.value.find(n => n.id === selectedId.value) : null)
// 预览内容
const notePreviewContent = computed(() => selectedNote ? marked.parse(selectedNote.value.content) : "") 

// 侦听器，当`notes`发生变化时，触发笔记保存
watch(notes, () => saveNotes(), {deep: true})
watch(selectedId, () => localStorage.setItem("selected-id", selectedId.value))

// 组件挂载成功之后，从LocalStorage中读取缓存数据
onMounted(() => {
  const notesJSON = localStorage.getItem("notes")
  if(notesJSON) {
    notes.value = JSON.parse(notesJSON)
    selectedId.value = localStorage.getItem("selected-id")
  }
})

/**
 * 新建笔记
 */
function addNote() {
  const time = new Date()
  const note = {
    // 笔记的唯一标识符
    id: String(time.valueOf()),
    // 标题
    title: "New Note " + notes.value.length,
    // Markdown格式内容
    content: "**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting.",
    // 创建时间
    created: time,
    // 是否收藏
    favorite: false
  }
  notes.value.push(note)
}
/**
 * 选中笔记
 * @param {*} note 
 */
function selectNote(note) {
  selectedId.value = note.id
}
/**
 * 删除选中的笔记
 */
function deleteNote() {
  if(selectedNote.value && confirm("Delete this note?")) {
    const index = notes.value.indexOf(selectedNote.value)
    if(index != -1) {
      notes.value.splice(index, 1)
    }
  }
}
/**
 * 收藏选中的笔记
 */
function favoriteNote() {

}
/**
 * 将内存中的笔记保存到浏览器的LocalStorage中
 */
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes.value))
}
</script>


<template>
  <!-- 工具栏 -->
  <aside class="side-bar">
    <div class="toolBar">
      <button :title="notes.length + ' note(s) already'" @click="addNote">Add note</button>
    </div>
    <div class="notes">
      <div :class="{ selected: note.id === selectedId }" v-for="note in notes" @click="selectNote(note)">{{ note.title }}</div>
    </div>
  </aside>
  <!-- 笔记内容和预览 -->
  <template v-if="selectedNote">
    <section class="main">
      <div class="toolBar">
        <input type="text" v-model="selectedNote.title" placeholder="Note title" />
        <button @click="deleteNote" title="Remove note">Delete</button>
        <button><Star v-show="!selectedNote.favorite" style="width: 1em; height: 1em; margin-right: 8px; color: red;" /><el-icon v-show="selectedNote.favorite" :color="red"><StarFilled /></el-icon></button>
      </div>
      <textarea class="content" v-model="selectedNote.content"></textarea>
    </section>
    <aside class="preview" v-html="notePreviewContent"></aside>
  </template>
</template>

<style scoped>
.side-bar {
  width: 20%;
}
.selected {
  background-color: grey;
  color: white;
}
.main, .preview {
  width: 40%;
}
.preview {
  border-left: solid 4px #f8f8f8;
}
textarea {
  resize: none;
  border: none;
  box-sizing: border-box;
  margin: 0 4px;
  font-family: monospace;
  width: 100%;
  height: 100vh;
}
</style>