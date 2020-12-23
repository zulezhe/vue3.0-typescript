<template>
  <div class="canvas-container w-article"> </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, onMounted } from 'vue';
  import { Particle } from './canvas';
  export default defineComponent({
    name: 'WParticle',
    components: {},
    setup() {
      const state = reactive({
        account: '内容',
      });
      const mounted = onMounted(() => {
        const obj = {
          color: '#0288d1',
          radius: 10,
          rate: 3,
          count: 100,
          line: false,
          bounce: true,
        };
        const particleBg = new Particle('.canvas-container', obj);
        particleBg.draw();
      });
      return {
        ...toRefs(state),
        mounted,
      };
    },
  });
</script>
<style lang="less" scoped>
  .w-article {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #243949 0%, #517fa4 100%);
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
</style>
