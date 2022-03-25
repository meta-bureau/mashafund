<template>
  <div class="bg-gray w-full">
    <div id="sec-about" class="2xl:container flex flex-col items-center">
      <div class="flex justify-end w-[80%] mt-[135px] relative">
        <div class="absolute left-0 bottom-14 z-10 shadow-light">
          <!--        <div class="absolute right-[66%] bottom-14 z-10 shadow-light">-->
          <div class="about-bg-left-logo w-[392px] h-[450px]">
            <img class="rounded" width="392" height="450" src="../../assets/img/it_seems.jpg">
          </div>
        </div>
        <div class="w-[852px] pl-[196px] pr-[83px] pt-20 text-lg font-normal rounded bg-primary about-bg-right-logo">
          <Title text="ПРО ФОНД"/>
          <p class="leading-[30px] text-primary-9 font-montserrat mt-10">
            Фонд МАША був заснований з метою протидії домашньому та гендерно зумовленому
            насильству, прагнув створити нульову толерантність до будь-якого виду насильства.
          </p>
          <p class="bg-gray w-max rounded mt-[30px] mb-[90px] py-4 px-[25px] text-base font-helvetica">
            Фонд МАША – створювався для жінок проти домашнього насильства
          </p>
        </div>
      </div>
      <div class="w-[80%] font-montserrat year-work-bg-left-logo">
        <p class="mt-[138px] text-4xl text-primary-9 text-center">За рік роботи</p>
        <p class="mt-7 text-center text-2xl font-helvetica">ми досягли:</p>
        <div class="grid grid-cols-3 gap-[30px] mt-[61px] mb-[69px]">
          <div class="flex justify-center items-center rounded bg-primary px-[56px] py-16 min-h-[246px]">
            <p class="text-primary-9">
              Налагодили взаємодію між громадським сектором та органами влади, що займаються запобіганням домашньому
              насильству;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary-9 px-[56px] py-16 min-h-[246px]">
            <p class="text-gray">
              Активно підтримували ратифікацію Стамбульської конвенції у ЗМІ, груглих столах та конференціях;
            </p>
          </div>
          <div class="flex justify-center items-center rounded row-span-2 border-[3px] border-primary-9 px-[56px] py-16">
            <p class="text-primary-9">
              Спільно з партнерами запустили платформу <br> “Мені здається”
              <a class="font-bold" href="https://itseems.com.ua/" target="_blank"><i>itseems.com.ua</i></a> яка охопила
              Україну, Польщу, США,
              Німеччину, Чехію, Канаду, Туреччину, Італію та Великобританію. Презентація відбувалася на Олмпійському
              стадіоні;
            </p>
          </div>
          <div class="flex justify-center items-center rounded row-span-2 border-[3px] border-primary-9 px-[56px] py-16">
            <p class="text-primary-9">
              Долучилися до розробки Указу Президента Про невідкладні заходи із запобігання та протидії домашньому
              насильству, насильству за ознакою статі, захисту прав осіб, які постраждали від такого насильства;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary px-[56px] py-16 min-h-[246px]">
            <p class="text-primary-9">
              Допомогли з відкриттям притулку в Києві;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary-9 px-[56px] py-16 min-h-[246px]">
            <p class="text-gray">
              Налагодили співпрацю з усіма притулками для жінок і дітей в Україні;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary px-[56px] py-16 min-h-[246px]">
            <p class="text-primary-9">
              Почали допомогу шелторам - речами та санітарно-гігієнічними засобами.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white w-full">
    <div class="2xl:container flex">
      <div class="mt-[142px]">
        <p class="bg-primary-9 p-32">XXX</p>
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

.about-bg-left-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;

    @apply absolute w-[48px] h-[119px] -z-10 opacity-50 left-[-26px] bottom-[-75px];
  }
}

.about-bg-right-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute w-[155px] h-[395px] right-[-100px] bottom-[-96px];
  }
}

.year-work-bg-left-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute w-[239px] h-[605px] bottom-[-70px] left-[-190px] opacity-30;
  }
}
</style>