<template>
  <div class="bg-primary w-full overflow-hidden">
    <div class="2xl:container flex justify-center">
      <div class="flex flex-col items-center w-full px-11 xl:px-0 xl:w-[80%] my-36 projects-bg-logo">
        <Title :text="$t('projects.title')" fontSize="small"/>
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">{{$t('projects.project_1.title')}}</p>
            <p class="text-primary-9 mt-12">
              {{$t('projects.project_1.text')}}
            </p>
            <div class="flex justify-end mt-8">
              <button class="flex items-center text-primary-9" type="button">
              {{$t('actions.readMore')}}
                <img class="ml-2.5" src="@/assets/img/icons/arrow-right.svg" alt="arrow-right">
              </button>
            </div>
          </div>
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">{{$t('projects.project_2.title')}}</p>
            <p class="text-primary-9 mt-12">
              {{$t('projects.project_2.text')}}
            </p>
            <div class="flex justify-end mt-8">
              <button class="flex items-center text-primary-9" type="button">
              {{$t('actions.readMore')}}
                <img class="ml-2.5" src="@/assets/img/icons/arrow-right.svg" alt="arrow-right">
              </button>
            </div>
          </div>
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">{{$t('projects.project_3.title')}}</p>
            <p class="text-primary-9 mt-12">
              {{$t('projects.project_3.text')}}
            </p>
          </div>
          <div class="bg-gray rounded p-16">
            <p class="text-primary-9 text-2xl lg:text-4xl">{{$t('projects.project_4.title')}}</p>
            <div class="font-helvetica space-y-1.5 mt-10">
              <p>{{$t('projects.project_4.textList.1')}}</p>
              <p>{{$t('projects.project_4.textList.2')}}</p>
              <p>{{$t('projects.project_4.textList.3')}}</p>
              <p>{{$t('projects.project_4.textList.4')}}</p>
            </div>
            <div class="flex justify-end mt-8">
              <button class="flex items-center text-primary-9" type="button">
              {{$t('actions.readMore')}}
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