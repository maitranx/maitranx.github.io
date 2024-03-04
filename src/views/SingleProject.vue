<script>
import { usePiniaStore } from '@/stores/piniaStore';

import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projectdetails from '../data/projectdetails';
import Button from '../components/reusable/Button.vue';

export default {
    name: 'SingleProject',
    components: {
        ProjectHeader,
        ProjectRelatedProjects,
        Button,
    },
    data: () => ({
        component: null,
    }),
    computed: {
        projectDetail() {
            return projectdetails.find((p) => p.id == this.$route.params.id) || {};
        },
        isSmallScreen() {
            const piniaStore = usePiniaStore();
            return piniaStore.isSmallScreen;
        },
    },
    methods: {
        getComponent() {
            const component = this.isSmallScreen ? 'componentMobile' : 'component';
            return this.projectDetail?.[component]?.then((module) => (this.component = module.default));
        },
    },
    mounted() {
        console.log(this.getComponent());
        this.getComponent();
    },
};
</script>

<template>
    <div class="">
        <!-- Project header -->
        <ProjectHeader :project="projectDetail" />

        <!-- Project Detail -->
        <component :is="component"></component>
        <!-- Project related projects -->

        <div class="flex justify-center items-center py-20 xl:flex">
            <router-link
                to="/works"
                class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg focus:ring-1 focus:ring-indigo-900 text-white text-lg xl:text-xl duration-300 hover:text-sky-300"
                aria-label="More Projects"
            >
                <Button title="Browse more works" class="italic underline" />
                <img src="@/assets/icons/arrow-right.svg" class="w-8 ml-4" alt="Arrow Right icon" />
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
