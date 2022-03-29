<template>
  <div class="bg-gray w-full">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-5 md:px-11 xl:px-0 xl:w-[80%] my-36">
        <Title :text="$t('partners.title')"/>
        <div class="flex flex-row justify-center w-10/12 mt-10 mb-16 space-x-11">
          <img src="@/assets/img/partner_logo_1.png" alt="" class="h-[30px] lg:h-[43px] xl:h-[54px]">
          <img src="@/assets/img/GoGlobalLogo_2.png" alt=""
               class="h-[30px] lg:h-[43px] xl:h-[54px] grayscale opacity-50">
          <img src="@/assets/img/partner_logo_3.png" alt=""
               class="h-[30px] lg:h-[43px] xl:h-[54px] grayscale opacity-50">
          <img src="@/assets/img/UNFPALogo_4.png" alt="" class="h-[30px] lg:h-[43px] xl:h-[54px] grayscale opacity-50">
          <img src="@/assets/img/partner_logo_5.png" alt=""
               class="h-[30px] lg:h-[43px] xl:h-[54px] grayscale opacity-50">
        </div>
        <div class="partner-ears w-10/12">
          <div
            class="flex flex-col bg-primary rounded w-full relative p-[98px] z-10 partners-bg-left-logo partners-slider-wrap">
            <Carousel :autoplay="3000" :wrap-around="true">
              <Slide key="1">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-2xl lg:text-4xl">
                    {{ $t('partners.partner_1.title') }}
                  </p>
                  <p class="text-primary-9 lg:text-lg mt-11">
                    <span class="font-bold">
                    {{ $t('partners.partner_1.text_1.textBold') }}
                    </span>
                    {{ $t('partners.partner_1.text_1.text') }}
                  </p>
                  <p class="text-primary-9 lg:text-lg mt-5">
                    <span class="font-bold">
                    {{ $t('partners.partner_1.text_2.textBold') }}
                    </span>
                    {{ $t('partners.partner_1.text_2.text') }}
                  </p>
                  <p class="text-primary-9 lg:text-lg mt-10">
                    {{ $t('partners.partner_1.text_3') }}
                  </p>
                  <ul class="list-disc pl-5 text-primary-9 space-y-4 marker:text-primary-9 mt-5">
                    <li>{{ $t('partners.partner_1.textList.1') }}</li>
                    <li>{{ $t('partners.partner_1.textList.2') }}</li>
                    <li>{{ $t('partners.partner_1.textList.3') }}</li>
                  </ul>
                  <p class="bg-gray rounded mt-8 py-4 px-6 text-center text-base font-helvetica">
                    {{ $t('partners.partner_1.textBadge') }}
                  </p>
                </div>
              </Slide>
              <Slide key="2">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-2xl lg:text-4xl">{{ $t('partners.partner_2.title') }}</p>
                  <p class="text-primary-9 lg:text-lg mt-11">{{ $t('partners.partner_2.text_1') }}</p>
                  <p class="text-primary-9 lg:text-lg mt-5">{{ $t('partners.partner_2.text_2') }}</p>
                </div>
              </Slide>
              <Slide key="3">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-2xl lg:text-4xl">{{ $t('partners.partner_3.title') }}</p>
                  <p class="text-primary-9 lg:text-lg mt-11">
                    {{ $t('partners.partner_3.text_1') }}
                  </p>
                  <p class="text-primary-9 lg:text-lg mt-5">
                    {{ $t('partners.partner_3.text_2') }}
                  </p>
                  <p class="text-primary-9 lg:text-lg mt-5">
                    {{ $t('partners.partner_3.text_3') }}
                  </p>
                </div>
              </Slide>
              <Slide key="4">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-2xl lg:text-4xl">{{ $t('partners.partner_4.title') }}</p>
                  <p class="text-primary-9 lg:text-lg mt-11">
                    {{ $t('partners.partner_4.text_1') }}
                  </p>
                  <p class="text-primary-9 lg:text-lg mt-5">
                    {{ $t('partners.partner_4.text_2') }}
                  </p>
                </div>
              </Slide>
              <Slide key="5">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-2xl lg:text-4xl">{{ $t('partners.partner_5.title') }}</p>
                  <p class="text-primary-9 lg:text-lg mt-11">
                    {{ $t('partners.partner_5.text_1') }}
                  </p>
                </div>
              </Slide>
              <template #addons>
                <Navigation/>
                <Pagination/>
              </template>
            </Carousel>
          </div>
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
.partners-bg-left-logo {
  @apply relative;

  &:before {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute w-[93px] h-[235px] left-[-34px] bottom-[-60px];
  }
}

.partner-ears {
  @apply relative;

  &:before, &:after {
    content: '';

    @apply absolute w-[20%] h-[85%] top-1/2 bg-primary-1 rounded z-0;
  }

  &:before {
    @apply left-0 -translate-x-1/2 -translate-y-1/2;
  }

  &:after {
    @apply right-0 translate-x-1/2 -translate-y-1/2;
  }
}

.partners-slider-wrap {

  .carousel__prev,
  .carousel__next {
    @apply border-2 bg-gray border-solid border-primary-9 box-content duration-300;

    .carousel__icon {
      @apply text-primary-9 duration-300;
    }

    &:hover {
      @apply bg-primary-9 duration-300;

      .carousel__icon {
        @apply text-white duration-300;
      }
    }
  }

  .carousel__prev {
    transform: translate(-200%, -50%);
  }

  .carousel__next {
    transform: translate(200%, -50%);
  }
}
</style>