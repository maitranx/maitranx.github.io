<template>
    <div class="2xl:px-[240px] flex flex-col items-center justify-center m-auto">
        <img :src="imageSrc" class="w-full"/>
        <div class="flex xl:flex-row flex-col bg-color-[#f5f5f5]">
            <img :src="imageEndSrc" class="w-full h-auto w-auto" v-if="imageEndSrc"/>
            <div class="lg:py-[80px] lg:px-[68px] md:py-[100px] md:px-[114px] p-[16px] bg-white justify-center items-center gap-2.5 inline-flex">
                <img src="@/assets/images/luna/Luna_mvp.gif" class="w-full h-auto w-auto"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        imageSrc: '',
        imageEndSrc: '',
    }),
    mounted() {
        this.updateImageSource();
        window.addEventListener('resize', this.updateImageSource);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateImageSource);
    },
    methods: {
        updateImageSource() {
            const screenWidth = window.innerWidth;
            // Define your breakpoints and image sources
            if (screenWidth <= 375) {
                this.imageSrc = require('@/assets/images/luna/Luna-mobile.png');
                this.imageEndSrc = '';
            } else if (screenWidth <= 768) {
                this.imageSrc = require('@/assets/images/luna/Luna-tablet.png');
                this.imageEndSrc = '';
            } else if (screenWidth <= 1440) {
                this.imageSrc = require('@/assets/images/luna/Luna-laptop.png');
                this.imageEndSrc = require('@/assets/images/luna/Luna-desktop-end.png')
            } else {
                this.imageSrc = require('@/assets/images/luna/Luna-desktop.png');
                this.imageEndSrc = require('@/assets/images/luna/Luna-desktop-end.png');
            }
        },
    },
};
</script>
