<template>
  <div class="s-canvas">
    <canvas id="s-canvas"></canvas>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { props } from './props';
  // import VerifcCode from './canvas.ts';
  export default defineComponent({
    name: 'ContextMenu',
    props: props,
    setup() {
      onMounted(() => {
        // console.log(VerifcCode);
        // const verifcCode = new VerifcCode('s-canvas', {});
      });
      return () => {
        // VerifcCode;
      };
    },
  });
</script>
<style lang="less">
  .s-canvas {
    width: 100px;
    height: 50px;
    border: 10px solid red;
    .s-canvas {
      width: 100%;
      height: 100%;
    }
  }
</style>
