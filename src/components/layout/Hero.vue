<template>
  <div class="bg-primary w-full h-screen hero-bg-logo" style="width: 1440px; height: 732px;">
    <div class="flex h-full">
      <div class="flex flex-1">
        <div class="">

          <Title text="«Фонд МАША»"/>
        </div>
      </div>
      <div class="w-[408px] h-full flex hero-image gradient"></div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title.vue'

export default {
  components: {
    Title,
  },
}
</script>

<style lang="scss">

.hero-bg-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: 351px 832px;
    background-position: 38px -187px;

    @apply absolute opacity-30 w-full h-full;
  }
}

.hero-image{
  background-image: url("../../assets/img/hero_1_1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -160px;
}

</style>