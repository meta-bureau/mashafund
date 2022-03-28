<template>
  <div class="bg-gray w-full">
    <div id="sec-about" class="2xl:container flex flex-col items-center">
      <div class="flex justify-end w-full px-5 md:px-11 xl:px-0 xl:w-[80%] mt-60 md:mt-36 relative">
        <div class="absolute -translate-x-1/2 md:translate-x-0 left-1/2 md:left-11 xl:left-0 -top-44 md:-top-14 z-10 shadow-light">
          <div class="about-bg-left-logo w-[257px] md:w-[320px] xl:w-[392px] max-h-[450px]">
            <img class="rounded" src="@/assets/img/it_seems.jpg" alt="">
          </div>
        </div>
        <div class="w-full md:w-9/12 px-5 md:pl-40 xl:pl-48 md:pr-20 pt-40 md:pt-20 pb-20 md:pb-24 lg:text-lg font-normal rounded bg-primary about-bg-right-logo">
          <Title text="ПРО ФОНД"/>
          <p class="leading-7 text-primary-9 mt-10">
            Фонд МАША був заснований з метою протидії домашньому та гендерно зумовленому
            насильству, прагнув створити нульову толерантність до будь-якого виду насильства.
          </p>
          <p class="bg-gray rounded mt-8 py-4 px-6 text-base font-helvetica relative">
            Фонд МАША – створювався для жінок проти домашнього насильства
          </p>
        </div>
      </div>
      <div class="px-5 md:px-11 xl:px-0 xl:w-[80%] year-work-bg-left-logo">
        <p class="mt-36 text-2xl lg:text-4xl text-primary-9 text-center">За рік роботи</p>
        <p class="mt-7 text-center lg:text-2xl font-helvetica">ми досягли:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 mb-20 md:my-16">
          <div class="flex justify-center items-center rounded bg-primary p-9 md:p-12 lg:px-14 lg:py-16 lg:min-h-[246px] z-10">
            <p class="text-primary-9">
              Налагодили взаємодію між громадським сектором та органами влади, що займаються запобіганням домашньому
              насильству;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary-9 p-9 md:p-12 lg:px-14 lg:py-16 lg:min-h-[246px] z-10">
            <p class="text-gray">
              Активно підтримували ратифікацію Стамбульської конвенції у ЗМІ, груглих столах та конференціях;
            </p>
          </div>
          <div
            class="flex justify-center items-center rounded md:col-span-2 lg:col-span-1 row-span-2 border-4 border-primary-9 p-9 md:p-12 lg:px-14 lg:py-16 z-10">
            <p class="text-primary-9">
              Спільно з партнерами запустили платформу <br> “Мені здається”
              <a class="font-bold" href="https://itseems.com.ua/" target="_blank"><i>itseems.com.ua</i></a> яка охопила
              Україну, Польщу, США,
              Німеччину, Чехію, Канаду, Туреччину, Італію та Великобританію. Презентація відбувалася на Олмпійському
              стадіоні;
            </p>
          </div>
          <div
            class="flex justify-center items-center rounded row-span-2 border-4 border-primary-9 p-9 md:p-12 lg:px-14 lg:py-16 z-10">
            <p class="text-primary-9">
              Долучилися до розробки Указу Президента Про невідкладні заходи із запобігання та протидії домашньому
              насильству, насильству за ознакою статі, захисту прав осіб, які постраждали від такого насильства;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary p-9 md:p-12 lg:px-14 lg:py-16 lg:min-h-[246px] z-10">
            <p class="text-primary-9">
              Допомогли з відкриттям притулку в Києві;
            </p>
          </div>
          <div class="flex justify-center items-center rounded bg-primary-9 p-9 md:p-12 lg:px-14 lg:py-16 lg:min-h-[246px] z-10">
            <p class="text-gray">
              Налагодили співпрацю з усіма притулками для жінок і дітей в Україні;
            </p>
          </div>
          <div
            class="flex justify-center items-center md:col-span-2 lg:col-span-1 rounded bg-primary p-9 md:p-12 lg:px-14 lg:py-16 lg:min-h-[246px] z-10">
            <p class="text-primary-9">
              Почали допомогу шелторам - речами та санітарно-гігієнічними засобами.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white w-full">
    <div class="2xl:container flex justify-center">
      <div class="flex justify-start px-5 md:px-11 xl:px-0 w-full xl:w-[80%] my-36 relative">
        <div class="absolute right-11 xl:right-0 -top-12 z-10 shadow-light">
          <div class="image-bg-right-logo  w-[320px] xl:w-[392px] about-slider-wrap">
            <Carousel :autoplay="3000" :wrap-around="true">
              <Slide key="1">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_1.jpg">
              </Slide>
              <Slide key="2">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_2.jpg">
              </Slide>
              <Slide key="3">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_3.jpg">
              </Slide>
              <Slide key="4">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_4.jpg">
              </Slide>
              <Slide key="5">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_5.jpg">
              </Slide>
              <Slide key="6">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_6.jpg">
              </Slide>
              <Slide key="7">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_7.jpg">
              </Slide>
              <Slide key="8">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_8.jpg">
              </Slide>
              <Slide key="9">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_9.jpg">
              </Slide>
              <Slide key="10">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_10.jpg">
              </Slide>
              <Slide key="11">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_11.jpg">
              </Slide>
              <Slide key="12">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_12.jpg">
              </Slide>
              <Slide key="13">
                <img class="rounded object-cover w-full h-full" src="@/assets/img/about-slider/slide_13.jpg">
              </Slide>

              <template #addons>
                <Navigation/>
                <Pagination/>
              </template>
            </Carousel>
          </div>
        </div>
        <div
          class="md:w-9/12 px-5 md:pl-16 md:pr-40 md:py-20 text-lg font-normal rounded bg-gray about-slider-bg-left-logo">
          <p class="font-helvetica xl:pr-20 leading-7 text-lg lg:text-2xl">
            Наразі, ми активно допомагаємо Київській, Чернігівській, Сумській та Полтавській областям.
            Наша цільова аудиторія розширилася і включає найбільш незахищених - жінки, діти, літні люди
            та люди з інвалідністю різного віку.
          </p>
          <p class="lg:text-lg text-primary-9 leading-7 mt-12 mb-8">
            <span class="font-bold">Наш пріоритет</span>
            закривати нагальні проблеми - з їжею, медикаментами, засобами гігієни, одягом тих хто
            залишається в цих областях і хто вимушено переїздить до них. Організовуємо евакуацію жінок з дітьми в
            безпечні місця.
          </p>
          <p class="lg:text-lg leading-7 text-primary-9">
            <span class="font-bold">З перших днів війни</span>
            був налагоджений зв'язок з активами місцевих громад (активні місцеві НУО та громадяни;
            центри Матері та дитини, Червоний хрест, лікарні, притулки, місця де розміщують переселенок з дітьми) яким
            ми допомагаємо.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css';

import Title from '@/components/ui/Title.vue'

export default {
  components: {
    Title,
    Carousel,
    Slide,
    Pagination,
    Navigation,
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

    @apply absolute w-12 h-28 -z-10 opacity-50 -left-6 -bottom-20;
  }
}

.about-bg-right-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute w-[155px] h-[395px] right-[-100px] bottom-[-196px] md:bottom-[-96px];
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

.about-slider-bg-left-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute w-[93px] h-[235px] left-[-34px] bottom-[-60px];
  }
}

.about-slider-wrap {
  @apply  h-[392px] xl:h-[450px];

  .carousel__slide {
    @apply h-[392px] xl:h-[450px];
  }

  .carousel__pagination-button {

    @apply bg-primary;

    &--active{
      @apply bg-primary-9;
    }
  }
}

</style>