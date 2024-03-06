<script>
export default {
    props: ['showModal', 'isOpen'],
};
</script>

<template>
    <!-- Header links -->
    <div :class="isOpen ? 'block' : 'hidden'"
        class="text-primary-light dark:text-ternary-light z-50 m-0 md:ml-4 mt-5 md:mt-3 md:flex p-5 md:p-0 justify-center items-center shadow-lg md:shadow-none">
        <router-link to="/works" aria-label="Works"
            class="font-general-medium block text-left text-lg font-medium  hover:text-sky-300 dark:hover:text-sky-300 md:mx-4 mb-2 md:py-2"
            :class="{ 'dark:text-sky-300 text-sky-300': $route.path.includes('/works') }">

            <span>Works </span>
        </router-link>
        <router-link to="/blogs" aria-label="Blogs">
            <span
                class="font-general-medium block text-left text-lg font-medium  hover:text-sky-300 dark:hover:text-sky-300 md:mx-4 mb-2 md:py-2"
                :class="{ 'dark:text-sky-300 text-sky-300': $route.path.includes('/blogs') }">
                Blogs
            </span>
        </router-link>
        <router-link to="/about" aria-label="About Me">
            <span
                class="font-general-medium block text-left text-lg font-medium  hover:text-sky-300 dark:hover:text-sky-300 md:mx-4 mb-2 md:py-2"
                :class="{ 'dark:text-sky-300 text-sky-300': $route.path.includes('/about') }">
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
