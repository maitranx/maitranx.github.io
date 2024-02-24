<script>
// import ThemeSwitcher from '../ThemeSwitcher';
import HireMeModal from '../HireMeModal.vue';
import AppHeaderLinks from './AppHeaderLinks.vue';
// import Button from '../reusable/Button.vue';

export default {
    components: {
        // ThemeSwitcher,
        HireMeModal,
        AppHeaderLinks,
        // Button,
    },
    data() {
        return {
            isOpen: false,
            theme: '',
            modal: false,
            navHeight: 0,
            categories: [
                {
                    id: 1,
                    value: 'web',
                    name: 'Web Application',
                },
                {
                    id: 2,
                    value: 'mobile',
                    name: 'Mobile Application',
                },
                {
                    id: 3,
                    value: 'ui-ux',
                    name: 'UI/UX Design',
                },
                {
                    id: 4,
                    value: 'branding',
                    name: 'Branding & Anim',
                },
            ],
        };
    },
    computed: {
        routePath() {
            return this.$router.currentRoute.value.fullPath;
        },
    },
    watch: {
        routePath() {
            this.isOpen = false;
        },
    },
    mounted() {
        this.theme = localStorage.getItem('theme') || 'dark';
    },
    methods: {
        updateTheme(theme) {
            this.theme = theme;
        },
        showModal() {
            if (this.modal) {
                // Stop screen scrolling
                document.getElementsByTagName('html')[0].classList.remove('overflow-y-hidden');
                this.modal = false;
            } else {
                document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden');
                this.modal = true;
            }
        },
        openNav() {
            if (!this.isOpen) this.calculateNavHeight();

            this.isOpen = !this.isOpen;
        },
        calculateNavHeight() {
            this.navHeight = document.querySelector('#home')?.clientHeight || screen.height - 68;
        },
    },
};
</script>

<template>
    <nav id="nav" class="relative px-4 md:px-[84px] xl:px-[168px] py-4 md:py-6">
        <!-- Header start -->
        <div class="z-10 block md:flex md:justify-between md:items-center">
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center">
                <!-- Header logos -->
                <div>
                    <router-link to="/">
                        <img src="@/assets/images/logo.svg" class="w-9 md:w-16" alt="Light Logo" />
                    </router-link>
                </div>

                <!-- Small screen hamburger menu -->
                <div class="md:hidden">
                    <button @click="openNav" type="button" class="focus:outline-none" aria-label="Hamburger Menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                        >
                            <path
                                v-if="isOpen"
                                fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                clip-rule="evenodd"
                            ></path>
                            <path
                                v-if="!isOpen"
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </button>
                    <div
                        v-if="isOpen"
                        :style="{ height: navHeight + 'px' }"
                        class="absolute text-primary-light dark:text-ternary-light z-[1000] bg-black top-[68px] left-0 w-full flex-col justify-start items-start inline-flex"
                    >
                        <router-link
                            to="/works"
                            aria-label="Works"
                            class="p-6 justify-center items-center gap-2.5 inline-flex"
                            :class="{ 'dark:text-cyan-300 text-cyan-600': $route.path.includes('/works') }"
                        >
                            <div class="text-xl font-normal font-['Poppins'] leading-[30px]">Works</div>
                        </router-link>
                        <router-link
                            to="/blogs"
                            aria-label="Blogs"
                            class="p-6 justify-center items-center gap-2.5 inline-flex"
                            :class="{ 'dark:text-cyan-300 text-cyan-600': $route.path.includes('/blogs') }"
                        >
                            <div class="text-xl font-normal font-['Poppins'] leading-[30px]">Blogs</div>
                        </router-link>
                        <router-link
                            to="/about"
                            aria-label="About Me"
                            class="p-6 justify-center items-center gap-2.5 inline-flex"
                            :class="{ 'dark:text-cyan-300 text-cyan-600': $route.path.includes('/about') }"
                        >
                            <div class="text-xl font-normal font-['Poppins'] leading-[30px]">About me</div>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Header links -->

            <!-- Header right section buttons -->
            <div class="hidden md:flex justify-between items-center flex-col md:flex-row">
                <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />
            </div>
        </div>

        <!-- Hire me modal -->
        <HireMeModal :showModal="showModal" :modal="modal" :categories="categories" aria-modal="Hire Me Modal" />
    </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
    @apply text-cyan-700;
    @apply dark:text-cyan-400;
    @apply font-medium;
}
</style>
