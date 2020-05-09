# vue-bem-classes (/¯◡ ‿ ◡)/¯

## Installation

```sh
npm install -S vue-bem-classes
```

or

```sh
yarn add vue-bem-classes
```

## Contributing

After cloning the repo

```sh
npm install
```

To run examples in the playground

```sh
npm run dev
```

To build the package

```sh
npm run build
```

## The Why

### BEM methodology

BEM (Block, Element, Modifier) is a component-based approach to web development.
The idea behind it is to divide the user interface into independent blocks.
This makes interface development easy and fast even with a complex UI,
and it allows reuse of existing code without copying and pasting.

Vue has the powerful built-in class and style bindings. However, it can get
cumbersome building dynamic BEM classes from your component's data & props in
the template. This utility encourages you to use a single computed property to
build your class object that conforms to the BEM methodology.

## The Who

## API Reference

- [createBem](#createBem)
- [bemClasss](#bemClass)

### createBem

This function returns a BEM class builder with an optional `options` argument
to configure the naming convention as defined in the [@bem/sdk.naming.entity](https://github.com/bem/bem-sdk/tree/master/packages/naming.entity)
package with the available presets as outlined in [@bem/sdk.naming.presets](https://github.com/bem/bem-sdk/tree/master/packages/naming.presets)

```js
import { createBem } from 'vue-bem-classes';

const bemClass = createBem('two-dashes');

```

### bemClass

This function takes as argument(s) a BEM entity.

```js
{
  block: 'btn',
  elem: '...',
  mod: {
    name: '...', value: "..."
  }
}
```

## Usage

```vue
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
      // Possible outputs: "btn btn_primary", "btn btn_secondary",
      // "btn_tertiary" "btn btn_primary" "btn btn_primary btn_disabled"
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

```

