<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<template>
    <div>
        <!-- Project heading and meta info -->
        <div class="text-center text-sm xl:text-4xl text-primary-dark dark:text-primary-light my-6 xl:my-20">
            <div class="font-general-regular text-center text-secondary-dark dark:text-neutral-50 text-base xl:text-xl font-n mb-2 xl:mb-8">
                {{ project.name }}
            </div>
            <div class="self-stretch text-center text-white text-xl xl:text-5xl font-medium leading-[25px] xl:leading-[72px]" v-html="project.title"></div>
        </div>
    </div>
</template>
