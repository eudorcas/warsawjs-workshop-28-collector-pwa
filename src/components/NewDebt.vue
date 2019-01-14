<template>
  <div class="newDebt">
    <label>Title
      <input v-model="newDebt.title" type="text" name="title" id="name">
    </label>
    <label>Amount
      <input v-model="newDebt.amount" type="text" name="amount" id="amount">
    </label>
    <label>Who
      <input v-model="newDebt.who" type="text" name="who" id="who">
    </label>
    <button @click="addToList" type="submit">Add</button>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  name: 'NewDebt',
  data() {
    return {
      newDebt : {
        title: '',
        amount: '',
        who: ''
      }

    }
  },
  methods: {
    addToList() {
      axios.post('http://localhost:3000/debts', this.newDebt)
        .then(response => console.log(response))
    }
  }

}
</script>

<style>

</style>
