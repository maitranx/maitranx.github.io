<template>
    <div class="2xl:px-[240px]">
        <img :src="imageSrc" />
    </div>
</template>
<script>
export default {
    data: () => ({
        imageSrc: '',
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
            } else if (screenWidth <= 768) {
                this.imageSrc = require('@/assets/images/luna/Luna-tablet.png');
            } else if (screenWidth <= 1440) {
                this.imageSrc = require('@/assets/images/luna/Luna-laptop.png');
            } else {
                this.imageSrc = require('@/assets/images/luna/Luna-desktop.png');
            }
        },
    },
};
</script>
