<template>
    <div class="2xl:px-[240px] flex flex-col items-center justify-center m-auto">
        <img :src="imageSrc" class="w-full"/>
        <div class="flex xl:flex-row flex-col bg-color-[#f5f5f5]">
            <img :src="imageEndSrc" class="w-full h-auto w-auto" v-if="imageEndSrc"/>
            <div class="lg:py-[80px] lg:px-[68px] md:py-[100px] md:px-[114px] p-[16px] bg-white justify-center items-center gap-2.5 inline-flex">
                <div class="lg:py-[143px] lg:px-[60px] md:py-[122px] md:px-[48px] py-[58px] px-[32px] bg-zinc-100 justify-center items-center gap-2.5 flex">
                    <div class="grow shrink basis-0 text-center text-black text-xl font-normal font-['Inter'] break-all">
                       <a href="https://drive.google.com/file/d/1W4xIzSbJnwTh0G0PWj2SFUcDih8CGJ6F/view?usp=share_link" target="_blank"> https://drive.google.com/file/d/1W4xIzSbJnwTh0G0PWj2SFUcDih8CGJ6F/view?usp=share_link
                    </a>
                    </div>
                </div>
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
