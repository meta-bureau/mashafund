<template>
  <div class="bg-primary w-full overflow-hidden">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-11 xl:px-0 xl:w-[80%] my-36 projects-bg-logo">
        <Title text="ПРОЄКТИ" fontSize="small"/>
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">Психологічна допомога дітям</p>
            <p class="text-primary-9 mt-12">
              Фонд “МАША” разом з центром нейропсихології “Рівновага” надають дітям, які отримали психоемоційну травму,
              безкоштовні...
            </p>
            <div class="flex justify-end mt-8">
              <button class="flex items-center text-primary-9" type="button">
                Читати більше
                <img class="ml-2.5" src="@/assets/img/icons/arrow-right.svg" alt="arrow-right">
              </button>
            </div>
          </div>
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">Гуманітарна допомога</p>
            <p class="text-primary-9 mt-12">
              Фонд МАША надає гуманітарну допомогу центрам Матері та дитини, Червоному хресту, лікарням, шелтерам та
              місцям, де розміщують переселенок з дітьми...
            </p>
            <div class="flex justify-end mt-8">
              <button class="flex items-center text-primary-9" type="button">
                Читати більше
                <img class="ml-2.5" src="@/assets/img/icons/arrow-right.svg" alt="arrow-right">
              </button>
            </div>
          </div>
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">Евакуація мирного населення</p>
            <p class="text-primary-9 mt-12">
              Фонд МАША проводить евакуацію мирного населення з тимчасово окупованих територій Київської, Чернігівської,
              Сумської та Полтавської областей
            </p>
          </div>
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">Програма<br>відновлення</p>
            <div class="font-helvetica space-y-1.5 mt-10">
              <p>Війна закінчиться.</p>
              <p>Вогонь припинеться, а Україна стане вільною</p>
              <p>Ми не перестанемо допомагати.</p>
              <p>Ми створимо програму, яка допоможе жінкам та дітям відновити нормальне життя.</p>
            </div>
            <div class="flex justify-end mt-8">
              <button class="flex items-center text-primary-9" type="button">
                Читати більше
                <img class="ml-2.5" src="@/assets/img/icons/arrow-right.svg" alt="arrow-right">
              </button>
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
.projects-bg-logo {
  @apply relative;

  &:before, &:after {
    content: '';
    background-image: url("../../assets/img/logo_3.png");
    background-repeat: no-repeat;
    background-size: cover;
    @apply absolute z-0 opacity-50;
  }

  &:before {
    @apply w-[867px] h-[2197px] left-[-453px] top-[413px];
  }

  &:after {
    @apply w-[857px] h-[2173px] right-[-610px] top-[-1000px];
  }
}
</style>