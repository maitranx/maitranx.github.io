<script>
export default {
    props: ['blog'],
};
</script>

<template>
    <router-link
        :to="{ name: 'blog', params: { id: blog.id } }"
        class="flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 xl:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Blog item"
    >
        <img :src="blog.img" :alt="blog.title" class="rounded-t-xl border-none" />
        <div class="p-6">
            <div class="text-left">
                <p class="font-general-semibold text-xl text-ternary-light font-semibold mb-2">
                    {{ blog.title }}
                </p>
            </div>
            <div class="mt-3">
                <span class="font-general-regular text-sm text-neutral-50">{{ blog.desc }}</span>
            </div>
            <div class="mt-3 px-2 py-[10px] bg-[#082F49] rounded-lg border border-cyan-900 justify-center items-center gap-2 inline-flex flex-1">
                <img src="@/assets/images/blog/calendar.svg" alt="calendar" />
                <div class="text-center text-sky-300 text-sm font-normal font-['Poppins'] leading-none tracking-tight">{{ blog.time }}</div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped></style>
