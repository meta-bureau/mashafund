<template>
  <div class="bg-primary-9 w-full overflow-hidden">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-[80%] my-[142px] founder-bg-logo">
        <Title text="ЗАСНОВНИЦІ" color="white"/>
        <div class="flex w-full flex-col mt-[70px]">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div class="w-[392px] h-[450px] image-bg-right-logo shadow-dark">
              <img class="rounded" src="../../assets/img/founder_1.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center w-7/12 h-full z-10">
              <p class="text-gray text-4xl">Марія Єфросініна</p>
              <div class="space-y-[30px] mt-[50px]">
                <p class="text-gray text-2xl leading-[30px]">
                  Українська телеведуча, акторка, громадська діячка, співзасновниця серії благодійних заходів «Charity
                  weekend», Голова опікунської ради благодійного фонду «Твоя опора»;
                </p>
                <p class="text-gray text-2xl leading-[30px]">
                  Почесний посол ООН в галузі народонаселення Україні з питань гендерної рівності та боротьби з
                  насильством;
                </p>
                <p class="text-gray text-2xl leading-[30px]">
                  Автор та ведуча проектів на YouTube каналі «Ваша МАША».
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:flex-row-reverse md:justify-between mt-[116px]">
            <div class="w-[392px] h-[450px] image-bg-right-logo shadow-dark">
              <img class="rounded" src="../../assets/img/founder_2.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center w-7/12 h-full z-10">
              <p class="text-gray text-4xl">Ксана Нечипоренко</p>
              <div class="space-y-[30px] mt-[50px]">
                <p class="text-gray text-2xl leading-[30px]">
                  Директор громадської організації GoGlobal, координатор Українського антикризового центру у Варшаві.
                  Співзасновниця «Фонд МАША», член Наглядової ради фонду «Твоя Опора»;
                </p>
                <p class="text-gray text-2xl leading-[30px]">
                  2019-2020 роки керівниця стратегічної групи радників при прем'єр-міністрі України, голова наглядової
                  ради «УкраїнаІнвест».
                </p>
                <p class="text-gray text-2xl leading-[30px]">
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