<template>
  <div class="bg-gray w-full">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-[80%] my-[142px]">
        <Title text="ПАРТНЕРИ"/>
        <div class="flex flex-row justify-center w-10/12 mt-[41px] mb-[70px] space-x-[44px]">
          <img src="../../assets/img/partner_logo_1.png" alt="">
          <img src="../../assets/img/GoGlobalLogo_2.png" alt="" class="grayscale opacity-50">
          <img src="../../assets/img/partner_logo_3.png" alt="" class="grayscale opacity-50">
          <img src="../../assets/img/UNFPALogo_4.png" alt="" class="grayscale opacity-50">
          <img src="../../assets/img/partner_logo_5.png" alt="" class="grayscale opacity-50">
        </div>
        <div class="partner-ears w-10/12">
          <div
            class="flex flex-col bg-primary rounded w-full relative p-[98px] z-10 partners-bg-left-logo partners-slider-wrap">
            <Carousel>
              <Slide key="1">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-4xl">
                    Благодійний фонд "Твоя опора"
                  </p>
                  <p class="text-primary-9 text-lg mt-[46px]">
                    <span class="font-bold">Місія фонду</span> – повертати дітям радість та свободу життя
                  </p>
                  <p class="text-primary-9 text-lg mt-[18px]">
                    Фонд <span class="font-bold">"Твоя опора"</span> єдина організація від України, яка стала стала
                    членом
                    Всесвітньої федерації серця.
                  </p>
                  <p class="text-primary-9 text-lg mt-[40px]">
                    Наразі фонд працює у таких напрямках:
                  </p>
                  <ul class="list-disc pl-5 text-primary-9 space-y-4 marker:text-primary-9 mt-[20px]">
                    <li>
                      Допомога дітям з вродженими вадами серця - це найбільший проект фонду, в рамках якого ми
                      допомагаємо
                      і
                      підтримуємо ключові медичні заклади в Україні;
                    </li>
                    <li>
                      Допомога і опіка над дитячими будинками;
                    </li>
                    <li>
                      Адресна допомога окремим дітям.
                    </li>
                  </ul>
                  <p class="bg-gray rounded mt-[30px] py-4 px-[25px] text-center text-base font-helvetica">
                    Фонд, заснований у 2014 році Валерією Татарчук з метою <br> допомагати важко хворим дітям і дітям
                    сиротам
                  </p>
                </div>
              </Slide>
              <Slide key="2">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-4xl">GoGlobal</p>
                  <p class="text-primary-9 text-lg mt-[46px]">
                    Громадська організація, що сприяє вивченню іноземних мов в Україні, ініціювала Рік англійської мови
                    в Україні та залучила сотні міжнародних волонтерів для навчання українських дітей англійською,
                    французькою та німецькою мовами у рамках літніх шкіл GoCamp по всій Україні.
                    У 2019 році GoGlobal став найбільшою освітньою волонтерською ініціативою в Україні з 160 000 дітей,
                    які беруть участь у проекті у 324 містах та селах України, та найбільшим волонтерським проектом у
                    Східній Європі з 1000 міжнародних волонтерів із 73 країн світу
                  </p>
                </div>
              </Slide>
              <Slide key="3">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-4xl">Інститут когнітивного моделювання</p>
                  <p class="text-primary-9 text-lg mt-[46px]">
                    <span class="font-bold">Інститут когнітивного моделювання</span> – науково-дослідницька компанія,
                    яка займається соціальними технологіями та надає послуги у сфері соціальних комунікацій.
                  </p>
                  <p class="text-primary-9 text-lg mt-[18px]">
                    Експерти Інституту надають консультації щодо стратегії формування іміджу, публічного позиціонування
                    та цифрових технологій.
                  </p>
                  <p class="text-primary-9 text-lg mt-[18px]">
                    Також Інститут здійснює соціологічні дослідження, займається дослідженнями в сфері соціальної
                    психології, розробляє освітньо-психотерапевтичні продукти з корпоративної психології, проводить
                    сеанси індивідуальної терапії та організувує проведення авторських лекцій
                  </p>
                </div>
              </Slide>
              <Slide key="4">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-4xl">UNFPA</p>
                  <p class="text-primary-9 text-lg mt-[46px]">
                    Фонд ООН у галузі народонаселення є провідною агенцією ООН, яка зосереджує свою роботу у сфері
                    гендерної рівності, репродуктивного здоров’я та розбудови потенціалу молоді. Спільно з партнерами
                    UNFPA працює у 150 країнах та територіях світу. Представництво в Україні працює з 1997 року
                  </p>
                  <p class="text-primary-9 text-lg mt-[18px]">
                    Місія фонду створити світ, де кожна вагітність є бажаною, кожні пологи безпечними, і кожна молода
                    людина може реалізувати свій потенціал
                  </p>
                </div>
              </Slide>
              <Slide key="5">
                <div class="flex flex-col text-left">
                  <p class="text-primary-9 text-4xl">Рівновага</p>
                  <p class="text-primary-9 text-lg mt-[46px]">
                    Центр психологічної допомоги для дітей та підлітків, в тому числі дітей з діагнозом аутизм,
                    нейропсихологічна корекція. Центр надає психологічну та нейропсихологічну допомогу пораненим і
                    постраждалим в результаті бойових дій
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