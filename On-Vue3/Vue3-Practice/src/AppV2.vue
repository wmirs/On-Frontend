<script>
  export default {
    data() {
      return {
        userName: '',
        userAge: null,
        userProfile: '',
        checkedValue: true,
        checkedNames: [],
        picked: null,
        selected: '',
        selecteItemList: [
          { code: 'chinese', value: '中文' },
          { code: 'english', value: '英语' },
          { code: 'japanese', value: '日语' },
        ],
        seletedList: [],
      };
    },
  };
</script>
<template>
  <div>
    <label for="name">Name: </label>
    <input id="name" type="text" v-model.trim="userName" />
  </div>
  <div>
    <label for="age">Age: </label>
    <input id="age" type="number" v-model.number="userAge" />
  </div>
  <div>
    <label for="profile">Profile: </label>
    <textarea id="profile" rows="3" v-model.lazy="userProfile"></textarea>
  </div>
  <p>
    Your name is {{ userName }}, age is {{ userAge }}, your profile is
    {{ userProfile }}.
  </p>

  <hr />

  <p style="white-space: pre-line">{{ multiMessages }}</p>
  <hr />
  <input type="checkbox" id="inputCheckbox" v-model="checkedValue" />
  <label for="inputCheckbox">{{ checkedValue }}</label>
  <hr />
  <p>Checked Names: {{ checkedNames }}</p>
  <input id="remilia" type="checkbox" value="remilia" v-model="checkedNames" />
  <label for="remilia">Remilia Scarlet</label>
  <input id="flandre" type="checkbox" value="flandre" v-model="checkedNames" />
  <label for="flandre">Flandre Scarlet</label>
  <input id="cirno" type="checkbox" value="cirno" v-model="checkedNames" />
  <label for="cirno">Cirno</label>
  <hr />
  <input id="one" type="radio" value="one" v-model="picked" />
  <label for="one">One</label>
  <input id="two" type="radio" value="two" v-model="picked" />
  <label for="two">Two</label>
  <button @click="this.picked = null">Remove Picked::{{ picked }}</button>
  <hr />
  <p>{{ selected }}</p>
  <select v-model="selected">
    <option disabled value="">Please Select One</option>
    <option v-for="item in selecteItemList" :key="item.code" :value="item.code">
      {{ item.value }}
    </option>
  </select>
  <p>{{ seletedList }}</p>
  <select v-model="seletedList" multiple>
    <option v-for="item in selecteItemList" :key="item.code" :value="item.code">
      {{ item.value }}
    </option>
  </select>
</template>
<style scoped>
  p,
  span,
  label {
    color: white;
  }
</style>
