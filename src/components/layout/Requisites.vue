<template>
  <div class="bg-white w-full">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-11 xl:px-0 xl:w-[80%] my-36 requisites-bg-logo">
        <Title text="РЕКВІЗИТИ ФОНДУ" fontSize="small"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 z-10">
          <div class="bg-primary rounded p-12">
            <p class="text-2xl lg:text-4xl text-primary-9">€ Евро</p>
            <div class="space-y-4 mt-12">
              <div class="space-y-1.5">
                <p class="text-primary-9">Сompany Name</p>
                <p class="font-helvetica font-light leading-7">MASHA FUND</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">IBAN Code</p>
                <p class="font-helvetica font-light leading-7">UA273052990000026003006814836</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Name of the bank</p>
                <p class="font-helvetica font-light leading-7">JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Bank SWIFT Code</p>
                <p class="font-helvetica font-light leading-7">PBANUA2X</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Company address</p>
                <p class="font-helvetica font-light leading-7">UA 01033 м Київ вул Саксаганського б.27б кв.43</p>
              </div>
            </div>
          </div>
          <div class="bg-primary rounded p-12">
            <p class="text-2xl lg:text-4xl text-primary-9">$ Долар</p>
            <div class="space-y-4 mt-12">
              <div class="space-y-1.5">
                <p class="text-primary-9">Сompany Name</p>
                <p class="font-helvetica font-light leading-7">MASHA FUND</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">IBAN Code</p>
                <p class="font-helvetica font-light leading-7">UA313052990000026002036802057</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Name of the bank</p>
                <p class="font-helvetica font-light leading-7">JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Bank SWIFT Code</p>
                <p class="font-helvetica font-light leading-7">PBANUA2X</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Company address</p>
                <p class="font-helvetica font-light leading-7">UA 01033 м Київ вул Саксаганського б.27б кв.43</p>
              </div>
            </div>
          </div>
          <div class="bg-primary rounded p-12">
            <p class="text-2xl lg:text-4xl text-primary-9">₴ Гривня</p>
            <div class="space-y-4 mt-12">
              <div class="space-y-1.5">
                <p class="text-primary-9">Найменування організації</p>
                <p class="font-helvetica font-light leading-7">ГО ФОНД МАША</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Код отримувача</p>
                <p class="font-helvetica font-light leading-7">44150335</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Назва банку</p>
                <p class="font-helvetica font-light leading-7">АТ КБ "ПРИВАТБАНК"</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Рахунок отримувача у форматі IBAN</p>
                <p class="font-helvetica font-light leading-7">UA193052990000026002036802273</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Валюта</p>
                <p class="font-helvetica font-light leading-7">UAH</p>
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
.requisites-bg-logo {
  @apply relative;

  &:before, &:after {
    content: '';
    background-image: url("../../assets/img/logo_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute z-0 opacity-50;
  }

  &:before {
    @apply w-[211px] h-[534px] left-[-112px] top-[60px];
  }

  &:after {
    @apply w-[147px] h-[374px] right-[-100px] bottom-[-80px];
  }
}
</style>