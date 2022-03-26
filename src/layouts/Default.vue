<template>
  <div class="flex flex-col items-center overflow-hidden font-montserrat">
    <Hero/>
    <About/>
    <Founders/>
    <Partners/>
  </div>
</template>

<script>
import Hero from '@/components/layout/Hero.vue'
import About from '@/components/layout/About.vue'
import Founders from '@/components/layout/Founders.vue'
import Partners from '@/components/layout/Partners.vue'

export default {
  components:{
    Hero,
    About,
    Founders,
    Partners,
  }
}
</script>

<style lang="scss">

</style>
