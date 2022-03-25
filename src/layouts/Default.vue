<template>
<!--  <div class="flex flex-col items-center">-->
  <div class="flex flex-col items-center overflow-hidden">
    <Hero/>
    <About/>
  </div>
</template>

<script>
import Hero from '@/components/layout/Hero.vue'
import About from '@/components/layout/About.vue'

export default {
  components:{
    Hero,
    About,
  }
}
</script>

<style lang="scss">

</style>
