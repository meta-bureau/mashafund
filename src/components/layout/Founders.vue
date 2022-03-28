<template>
  <div class="bg-primary-9 w-full overflow-hidden">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-11 xl:px-0 xl:w-[80%] my-36 founder-bg-logo">
        <Title text="ЗАСНОВНИЦІ" color="white"/>
        <div class="flex w-full flex-col mt-16">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div class="w-[320px] xl:w-[392px] h-fit image-bg-right-logo">
              <img class="rounded shadow-dark" src="@/assets/img/founder_1.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center ml-20 w-7/12 h-full z-10">
              <p class="text-gray text-4xl">Марія Єфросініна</p>
              <div class="space-y-8 mt-12">
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  Українська телеведуча, акторка, громадська діячка, співзасновниця серії благодійних заходів «Charity
                  weekend», Голова опікунської ради благодійного фонду «Твоя опора»;
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  Почесний посол ООН в галузі народонаселення Україні з питань гендерної рівності та боротьби з
                  насильством;
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  Автор та ведуча проектів на YouTube каналі «Ваша МАША».
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row-reverse md:justify-between mt-[116px]">
            <div class="w-[320px] xl:w-[392px] h-fit image-bg-right-logo">
              <img class="rounded shadow-dark" src="@/assets/img/founder_2.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center mr-20 w-7/12 h-full z-10">
              <p class="text-gray text-4xl">Ксана Нечипоренко</p>
              <div class="space-y-8 mt-12">
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  Директор громадської організації GoGlobal, координатор Українського антикризового центру у Варшаві.
                  Співзасновниця «Фонд МАША», член Наглядової ради фонду «Твоя Опора»;
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  2019-2020 роки керівниця стратегічної групи радників при прем'єр-міністрі України, голова наглядової
                  ради «УкраїнаІнвест».
                </p>
                <p class="text-gray text-lg lg:text-2xl leading-7">
                  До Євромайдану, 2009 рік Ксана розпочинала діяльність Единбурзької бізнес-школи Eastern Europe в
                  Україні, а після революції стала головою Секретаріату, а потім членом Наглядової ради "Реанімаційного
                  пакету реформ".
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