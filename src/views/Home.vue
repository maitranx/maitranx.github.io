<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';
import projects from '../data/projects';
import { usePiniaStore } from '@/stores/piniaStore';

export default {
    name: 'Home',
    components: {
        AppBanner,
        ProjectsGrid,
        Button,
    },
    data: () => {
        return {
            projects,
        };
    },
    computed: {
        // Get the filtered projects
        filteredProjects() {
            return this.projects.filter((p) => p.isFeature === true);
        },
        isSmallScreen() {
            // Access the store instance
            const piniaStore = usePiniaStore();
            return piniaStore.isSmallScreen;
        },
    },
};
</script>

<template>
    <div id="home" class="w-full max-w-[1104px] px-[16px] md:px-0 md:mx-auto">
        <!-- Banner -->
        <AppBanner />

        <!-- Projects -->
        <ProjectsGrid v-if="!isSmallScreen" title="my work" category="Scalable ecosystem products" :projectList="filteredProjects" />

        <!-- Load more projects button -->
        <div v-if="!isSmallScreen" class="flex justify-center items-center mb-20 xl:flex">
            <router-link
                to="/works"
                class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg focus:ring-1 focus:ring-indigo-900 text-white text-lg xl:text-xl duration-300 hover:text-cyan-300"
                aria-label="More Projects"
            >
                <Button title="Browse more works" class="italic underline" />
                <img src="@/assets/icons/arrow-right.svg" class="w-8 ml-4" alt="Arrow Right icon" />
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
