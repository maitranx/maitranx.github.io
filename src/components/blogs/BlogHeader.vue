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
            <div class="relative px-4 md:px-[84px] xl:px-[168px] w-full">
                <img class="rounded-2xl w-full" :src="blog.banner" />
            </div>
            <div class="text-center text-3xl xl:text-4xl text-primary-dark dark:text-primary-light mt-14 xl:mt-20 mb-20">
                <div class="font-general-regular text-center text-secondary-dark dark:text-slate-300 text-xl xl:text-xl font-n mb-2">my blog</div>
                <div class="px-[24px] md:px-[120px] xl:px-[345px] xl:leading-normal self-stretch text-center text-white text-2xl xl:text-5xl font-medium" v-html="blog.title"></div>
                <div class="mt-3 px-2 py-[10px] bg-[#082F49] rounded-lg border border-cyan-900 justify-center items-center gap-2 inline-flex flex-1">
                    <img src="@/assets/images/blog/calendar.svg" alt="calendar" />
                    <div class="text-center text-sky-300 text-sm font-normal font-['Poppins'] leading-none tracking-tight">{{ blog.time }}</div>
                </div>
            </div>
    </div>
</template>
