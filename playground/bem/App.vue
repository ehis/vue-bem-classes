<template>
  <div id="app">
    <CustomButton>click me</CustomButton>
    <CustomButton variant="secondary">click me</CustomButton>
    <CustomButton variant="tertiary">click me</CustomButton>
    <CustomButton disabled>disabled click me</CustomButton>
  </div>
</template>

<script>
import CustomButton from './components/Button.vue';

export default {
  components: {
    CustomButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
