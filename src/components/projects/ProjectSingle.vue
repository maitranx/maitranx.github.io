<script>
export default {
    props: ['project'],
};
</script>

<template>
    <router-link
        :to="{ name: 'project', params: { id: project.id } }"
        class="flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 xl:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Single Project"
    >
        <img :src="project.img" :alt="project.title" class="rounded-xl border-none" />
        <div class="grid grid-rows-[1fr_min-content_min-content] flex-1">
            <div class="text-left px-4 py-6">
                <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
                    {{ project.title }}
                </p>
                <span class="font-general-regular text-sm text-ternary-dark dark:text-slate-300">{{ project.category }}</span>
            </div>
            <div class="px-4 py-6 border-t border-b border-neutral-700 justify-start items-center" 
                v-if="project.isSkateHidden !== true">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div class="text-sm text-ternary-dark dark:text-ternary-light">Stake</div>
                        <img src="@/assets/icons/Figma_logo.svg" class="w-10 ml-4" alt="Light Logo" /> 
                        <span class="text-neutral-200 text-xs font-semibold ml-2">Figma</span>
                        <img :src="project.skate" class="w-18 ml-4" alt="Light Logo" />
                        <span v-if="project.skate && project.skate.includes('bpi')" 
                            class="text-neutral-200 text-xs font-semibold ml-2">Power BI</span> 
                        <span v-if="project.skate && project.skate.includes('sketch')" 
                            class="text-neutral-200 text-xs font-semibold ml-2">Sketch</span>
                    </div>
                </div>
            </div>
            <div class="justify-end items-center px-4 py-6" :class="{'border-t border-neutral-700': project.isSkateHidden === true }">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <div v-if="!project.client.includes('fpt_des')" class="text-sm text-ternary-dark dark:text-ternary-light">Client</div>
                        <img :src="project.client" class="w-24 ml-4 h-[34px]" alt="Light Logo" />
                    </div>
                    <div>
                        <img src="@/assets/icons/arrow-right.svg" class="w-8" alt="Light Logo" />
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped></style>
