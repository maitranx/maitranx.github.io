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
                this.imageSrc = require('@/assets/images/DS365ai/DS365ai_Mobile-min.jpg');
            } else if (screenWidth <= 768) {
                this.imageSrc = require('@/assets/images/DS365ai/DS365ai_Tablet-min.jpg');
            } else {
                this.imageSrc = require('@/assets/images/DS365ai/DS365ai_Desktop-min.jpg');
            }
        },
    },
};
</script>
