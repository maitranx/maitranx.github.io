
<script>
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import BlogHeader from '../components/blogs/BlogHeader.vue';
import BlogRelated from '../components/blogs/BlogRelated.vue';
import blogdetails from '../data/blogdetails';
import Button from '../components/reusable/Button.vue';


export default {
    name: 'SingleBlog',
    components: {
    BlogHeader,
    BlogRelated,
    Button
},
    data: () => ({
        component: null,
    }), 
    computed: {
        blogDetail() {
             return blogdetails.find((p) => p.id == this.$route.params.id) || {};
        },
    },
    methods: {
        getComponent() {
            return this.blogDetail?.component?.then((module) => (this.component = module.default));
        },
    },
    mounted() {
        this.getComponent();
    },
};
</script>

<template>
    <div>
        <BlogHeader :blog="blogDetail"/>
        <!-- Blog Detail -->
        <component :is="component"></component>
        <!-- Blog related projects -->
        <!-- <BlogRelated :relatedBlog="blogDetail.relatedBlog"/> -->

        <div class="flex justify-center items-center pt-12 py-20 xl:flex">
            <router-link
                to="/blogs"
                class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg focus:ring-1 focus:ring-indigo-900 text-white text-lg xl:text-xl duration-300 hover:text-sky-300"
                aria-label="More Projects"
            >
                <Button title="Browse more blogs" class="italic underline" />
                <img src="@/assets/icons/arrow-right.svg" class="w-8 ml-4" alt="Arrow Right icon" />
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
