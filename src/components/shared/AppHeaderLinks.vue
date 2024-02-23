<script>
export default {
    props: ['showModal', 'isOpen'],
};
</script>

<template>
    <!-- Header links -->
    <div :class="isOpen ? 'block' : 'hidden'"
        class="z-50 m-0 md:ml-4 mt-5 md:mt-3 md:flex p-5 md:p-0 justify-center items-center shadow-lg md:shadow-none">
        <router-link to="/works" aria-label="Projects" v-slot="{ isActive }">
            <span
                class="font-general-medium block text-left text-lg font-medium  hover:text-cyan-600 dark:hover:text-cyan-300 md:mx-4 mb-2 md:py-2"
                :class="{ 'text-primary-light dark:text-ternary-light': !isActive, 'dark:text-cyan-300 text-cyan-600': isActive }">
                Works
            </span>
        </router-link>
        <router-link to="/blogs" v-slot="{ isActive }" aria-label="Blogs">
            <span
                class="font-general-medium block text-left text-lg font-medium  hover:text-cyan-600 dark:hover:text-cyan-300 md:mx-4 mb-2 md:py-2"
                :class="{ 'text-primary-light dark:text-ternary-light': !isActive, 'dark:text-cyan-300 text-cyan-600': isActive }">
                Blogs
            </span>
        </router-link>
        <router-link to="/about" aria-label="About Me" v-slot="{ isActive }">
            <span
                class="font-general-medium block text-left text-lg font-medium  hover:text-cyan-600 dark:hover:text-cyan-300 md:mx-4 mb-2 md:py-2"
                :class="{ 'text-primary-light dark:text-ternary-light': !isActive, 'dark:text-cyan-300 text-cyan-600': isActive }">
                About Me
            </span>
        </router-link>
        <!-- <div
			class="border-t-2 pt-3 xl:pt-0 xl:border-t-0 border-primary-light dark:border-secondary-dark"
		>
			<button 
				class="font-general-medium xl:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
				@click="showModal()"
				aria-label="Hire Me Button"
			>
				Hire Me
			</button>
		</div> -->
    </div>
</template>

<style lang="scss" scoped></style>
