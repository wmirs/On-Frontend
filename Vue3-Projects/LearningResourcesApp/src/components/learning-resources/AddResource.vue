<script>
  export default {
    data() {
      return {
        inputsIsInValid: false,
      };
    },
    inject: ['addResource'],
    methods: {
      submitData() {
        const title = this.$refs.inputTitle.value;
        const desc = this.$refs.inputDesc.value;
        const link = this.$refs.inputLink.value;
        if (title.trim() === '' || desc.trim() === '' || link.trim() === '') {
          this.inputsIsInValid = true;
        } else {
          const newResource = {
            id: new Date().toString(),
            title: title,
            description: desc,
            link: link,
          };
          this.addResource(newResource);
        }
      },
      confirmError() {
        this.inputsIsInValid = false;
      },
    },
  };
</script>
<template>
  <base-dialog
    v-if="inputsIsInValid"
    title="Invalid Inputs"
    @close="confirmError"
  >
    <template #default>
      <p>
        Title, description, link can't be empty. Please enter at least one
        character.
      </p>
    </template>
    <template #menu>
      <base-button @click="confirmError">Okey</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="inputTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="inputDesc"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="inputLink" />
      </div>
      <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>
<style scoped>
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }

  .form-control {
    margin: 1rem 0;
  }
</style>
