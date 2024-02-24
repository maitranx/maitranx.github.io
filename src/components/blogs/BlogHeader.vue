<script>
export default {
    props: {
        blog: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
<template>
    <div class="xl:mt-20">
        <img class="relative rounded-2xl px-4 md:px-[84px] xl:px-[168px] w-full" :src="blog.banner" />
        <div class="text-center text-3xl xl:text-4xl text-primary-dark dark:text-primary-light mt-14 xl:mt-20 mb-20">
            <div class="font-general-regular text-center text-secondary-dark dark:text-neutral-50 text-md xl:text-xl font-n italic mb-8">my blog</div>
            <div class="px-[24px] md:px-[345px] self-stretch text-center text-white text-5xl font-semibold leading-[72px]" v-html="blog.title"></div>
            <div class="mt-3 px-2 py-[10px] bg-[#082F49] rounded-lg border border-cyan-900 justify-center items-center gap-2 inline-flex flex-1">
                <img src="@/assets/images/blog/calendar.svg" alt="calendar" />
                <div class="text-center text-sky-300 text-sm font-normal font-['Poppins'] leading-none tracking-tight">{{ blog.time }}</div>
            </div>
        </div>
    </div>
</template>
