<template>
  <div class="bg-primary w-full">
    <div class="2xl:container flex hero-bg-logo">
      <div class="flex flex-col items-center w-full relative">
        <div class="w-full px-5 md:px-11 xl:px-0 xl:w-[80%] z-20 absolute top-0 mt-5">
          <header class="flex justify-between items-center w-full">
            <a class="inline-flex" href="/">
              <img alt="" src="@/assets/img/logo.svg"/>
            </a>
            <div class="">
              <LocaleSelect/>
            </div>
          </header>
        </div>
        <div class="flex justify-end w-full h-full">
          <div class="w-7/12 xl:w-6/12 pr-2.5 ml-5 md:ml-11 mt-56">
            <Title :text="$t('hero.title')"/>
            <p class="mt-11 mb-8 text-lg lg:text-2xl font-normal">
              Це громадська організація, заснована у 2020 році телеведучою,
              благодійницею та Почесним послом ООН в Україні Марією Єфросініною.
            </p>
            <p class="text-lg lg:text-2xl font-normal mb-28">
              Фонд МАША має необхідний людський ресурс для допомоги постраждалим у війні в Україні.
            </p>
            <div class="hidden md:flex justify-center mb-16">
              <a class="text-primary-9" href="#sec-about" v-smooth-scroll>
                {{ $t('actions.scrollToDown') }}
                <img class="mx-auto mt-2" src="@/assets/img/icons/arrow-down.svg" alt="arrow-down">
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
import LocaleSelect from '@/components/ui/LocaleSelect.vue'

export default {
  components: {
    Title,
    LocaleSelect,
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