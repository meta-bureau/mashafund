<template>
  <div class="bg-primary-9 w-full overflow-hidden">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-5 md:px-11 xl:px-0 xl:w-[80%] my-20 md:my-36 founder-bg-logo">
        <Title :text="$t('founders.title')" color="white"/>
        <div class="flex w-full flex-col mt-11 md:mt-16">
          <div class="flex flex-col items-center md:items-start md:flex-row md:justify-between">
            <div class="w-[320px] xl:w-[392px] h-fit image-bg-right-logo">
              <img class="rounded shadow-dark" src="@/assets/img/founder_1.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center mt-8 md:mt-0 md:ml-20 md:w-7/12 h-full z-10">
              <p class="text-gray text-2xl lg:text-4xl">{{ $t('founders.founder_1.title') }}</p>
              <div class="space-y-4 md:space-y-8 mt-6 md:mt-12">
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  {{ $t('founders.founder_1.text_1') }}
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  {{ $t('founders.founder_1.text_2') }}
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  {{ $t('founders.founder_1.text_3') }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center md:items-start md:flex-row-reverse md:justify-between mt-20 md:mt-28">
            <div class="w-[320px] xl:w-[392px] h-fit image-bg-right-logo">
              <img class="rounded shadow-dark" src="@/assets/img/founder_2.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center mt-8 md:mt-0 md:mr-20 md:w-7/12 h-full z-10">
              <p class="text-gray text-2xl lg:text-4xl">{{ $t('founders.founder_2.title') }}</p>
              <div class="space-y-4 md:space-y-8 mt-6 md:mt-12">
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  {{ $t('founders.founder_2.text_1') }}
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  {{ $t('founders.founder_2.text_2') }}
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  {{ $t('founders.founder_2.text_3') }}
                </p>
              </div>
            </div>
          </div>
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
.founder-bg-logo {
  @apply relative;

  &:before, &:after {
    content: '';
    background-image: url("../../assets/img/logo_3.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute z-0;
  }

  &:before {
    @apply w-[857px] h-[2173px] left-[-477px] bottom-[-236px];
  }

  &:after {
    @apply w-[867px] h-[2197px] right-[-596px] top-[83px];
  }
}
</style>