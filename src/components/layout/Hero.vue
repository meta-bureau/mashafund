<template>
  <div class="bg-primary w-full">
    <div class="2xl:container flex hero-bg-logo">
      <div class="flex flex-col w-full relative">
        <header class="flex items-center z-20 absolute left-0 right-0 top-0 justify-between mt-5 mx-36">
          <a class="inline-flex" href="/">
            <img alt="" src="../../assets/img/logo.svg"/>
          </a>
          <div class="">
            <button type="button">ua</button>
          </div>
        </header>
        <div class="flex justify-end w-full h-full">
          <div class="max-w-[686px] mt-[222px]">
            <Title text="«Фонд МАША»"/>
            <p class="mt-11 mb-[30px] text-2xl font-normal">
              Це громадська організація, заснована у 2020 році телеведучою,
              благодійницею та Почесним послом ООН в Україні Марією Єфросініною.
            </p>
            <p class="text-2xl font-normal">
              Фонд МАША має необхідний людський ресурс для допомоги постраждалим у війні в Україні.
            </p>
            <div class="flex justify-center mt-28 mb-12">
              <a class="text-primary-9" href="#sec-about" v-smooth-scroll>
                Прокрути вниз
                <img class="mx-auto mt-2" src="../../assets/img/icons/arrow-down.svg" alt="arrow-down">
              </a>
            </div>
          </div>
          <div class="w-[408px] h-full flex hero-image gradient"></div>
        </div>
      </div>
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

.hero-image {
  background-image: url("../../assets/img/hero_1_1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: -160px;
}

</style>