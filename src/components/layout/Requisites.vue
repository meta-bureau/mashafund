<template>
  <div class="bg-white w-full">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-5 md:px-11 xl:px-0 xl:w-[80%] my-36 requisites-bg-logo">
        <Title :text="$t('requisites.title')" fontSize="small"/>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-16 z-10">
          <div class="bg-primary rounded p-12">
            <p class="text-2xl lg:text-4xl text-primary-9">{{ $t('requisites.euro.title') }}</p>
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
                <p class="font-helvetica font-light leading-7">JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001,
                  UKRAINE</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Bank SWIFT Code</p>
                <p class="font-helvetica font-light leading-7">PBANUA2X</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Company address</p>
                <p class="font-helvetica font-light leading-7">Ukraine, 01033, Kyiv, Saksaganskogo str, 27B, office 43</p>
              </div>
            </div>
          </div>
          <div class="bg-primary rounded p-12">
            <p class="text-2xl lg:text-4xl text-primary-9">{{ $t('requisites.dollar.title') }}</p>
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
                <p class="font-helvetica font-light leading-7">JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001,
                  UKRAINE</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Bank SWIFT Code</p>
                <p class="font-helvetica font-light leading-7">PBANUA2X</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">Company address</p>
                <p class="font-helvetica font-light leading-7">Ukraine, 01033, Kyiv, Saksaganskogo str, 27B, office 43</p>
              </div>
            </div>
          </div>
          <div class="bg-primary rounded p-12">
            <p class="text-2xl lg:text-4xl text-primary-9">{{ $t('requisites.hryvnia.title') }}</p>
            <div class="space-y-4 mt-12">
              <div class="space-y-1.5">
                <p class="text-primary-9">{{ $t('requisites.hryvnia.companyName') }}</p>
                <p class="font-helvetica font-light leading-7">ГО ФОНД МАША</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">{{ $t('requisites.hryvnia.removalCode') }}</p>
                <p class="font-helvetica font-light leading-7">44150335</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">{{ $t('requisites.hryvnia.bankName') }}</p>
                <p class="font-helvetica font-light leading-7">АТ КБ "ПРИВАТБАНК"</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">{{ $t('requisites.hryvnia.ibanAccount') }}</p>
                <p class="font-helvetica font-light leading-7">UA193052990000026002036802273</p>
              </div>
              <div class="space-y-1.5">
                <p class="text-primary-9">{{ $t('requisites.hryvnia.currency') }}</p>
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