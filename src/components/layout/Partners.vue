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
          <div class="flex flex-col bg-primary rounded w-full relative p-[98px] z-10 partners-bg-left-logo">
            <p class="text-primary-9 text-4xl">
              Благодійний фонд "Твоя опора"
            </p>
            <p class="text-primary-9 text-lg mt-[50px]">
              <span class="font-bold">Місія фонду</span> – повертати дітям радість та свободу життя
            </p>
            <p class="text-primary-9 text-lg mt-[30px]">
              Фонд <span class="font-bold">"Твоя опора"</span> єдина організація від України, яка стала стала членом
              Всесвітньої федерації серця.
            </p>
            <p class="text-primary-9 text-lg mt-[50px]">
              Наразі фонд працює у таких напрямках:
            </p>
            <ul class="list-disc pl-5 text-primary-9 space-y-5 marker:text-primary-9 mt-[30px]">
              <li>
                Допомога дітям з вродженими вадами серця - це найбільший проект фонду, в рамках якого ми допомагаємо і
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
              Фонд, заснований у 2014 році Валерією Татарчук з метою <br> допомагати важко хворим дітям і дітям сиротам
            </p>
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

.partner-ears{
  @apply relative;

  &:before, &:after{
    content: '';

    @apply absolute w-[20%] h-[85%] top-1/2 bg-primary-1 rounded z-0;
  }

  &:before{
    @apply left-0 -translate-x-1/2 -translate-y-1/2;
  }

  &:after{
    @apply right-0 translate-x-1/2 -translate-y-1/2;
  }
}
</style>