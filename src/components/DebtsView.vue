<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div v-if="debts!==null" v-for="debtEl in debts" :key="debtEl.id">
        <debt :debt ="debtEl" />
    </div>
    <NewDebt />

  </div>
</template>

<script>
  import Debt from './Debt'
  import NewDebt from "./NewDebt";
  export default {
    name: 'DebtsView',
    components: {NewDebt, Debt},
    data () {
      return {
        baseURL: 'http://localhost:3000',
        msg: 'My debts:',
        debts: null

      }
    },
        mounted () {
        this.$http.get(this.baseURL + '/debts').then(response => (this.debts = response.data))
      }


  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

</style>
