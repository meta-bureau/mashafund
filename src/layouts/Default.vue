<template>
  <div class="flex flex-col items-center overflow-hidden font-montserrat">
    <Hero/>
    <About/>
    <Founders/>
    <Partners/>
    <Projects/>
    <Requisites/>
    <Footer/>
  </div>
</template>

<script>
import Hero from '@/components/layout/Hero.vue'
import About from '@/components/layout/About.vue'
import Founders from '@/components/layout/Founders.vue'
import Partners from '@/components/layout/Partners.vue'
import Projects from '@/components/layout/Projects.vue'
import Requisites from '@/components/layout/Requisites.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  components:{
    Hero,
    About,
    Founders,
    Partners,
    Projects,
    Requisites,
    Footer,
  }
}
</script>

<style lang="scss">

</style>
