<template>
  <figure class="photo">
  <img class="photo__img" src="https://placeimg.com/640/480/animals/gray">
  <figcaption class="photo__caption">Look at me!</figcaption>
</figure>

</template>

<script>
import { createBem } from 'vue-bem-classes';

const bemClass = createBem('two-dashes');

export default {
  name: 'Thumbnail'
}
</script>

<style>
  .photo { 
  } /* Specificity of 10 */
  .photo__img { 
  } /* Specificity of 10 */
  .photo__caption { 
    color: dimgray;
  } /* Specificity of 10 */
</style>

