<template>
  <div class="debt">
    <ul>
      <li>
        {{debt.title}}
      </li>
      <li>
        To: {{debt.who}}
      </li>
      <li>
        ${{debt.amount}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Debt',
  props: ['debt']


}
</script>

<style scoped>
</style>
