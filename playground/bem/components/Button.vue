<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script>
import { createBem } from 'vue-bem-classes';

const bemClass = createBem();

export default {
  name: 'CustomButton',
  props: { 
    disabled: { type: Boolean, default: false },
    variant: {
      type: String,
      default: 'primary',
      validator: function(value) { 
        return ['primary', 'secondary', 'tertiary'].includes(value);
      }
    }
  },
  computed: {
    buttonClasses() {
      return bemClass({
        block: 'btn'
      }, {
        block: 'btn',
        mod: {
          name: this.variant
        }
      }, {
        block: 'btn', 
        mod: {
          name: 'disabled', val: this.disabled
        }
      });
    }
  }
}
</script>


<style>
.btn {
  padding: 1rem .5rem;
  font-size: 16px;
  text-align: center;
  border: none;
  cursor: pointer;
}

.btn_primary {
  background-color: royalblue;
  color: white;
}

.btn_secondary {
  background-color: darkseagreen;
  color: white;
}

.btn_tertiary {
  color: #2c3e50;
  background-color: papayawhip;
}

.btn_disabled {
  background-color: slategray;
  opacity: 0.5;
}
</style>
