<script>
import feather from 'feather-icons';

export default {
    props: ['showModal', 'modal', 'certificate'],
    data() {
        return {};
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
    <transition name="fade">
        <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
            <!-- Modal body background as backdrop -->
            <div
                v-show="modal"
                @click="showModal()"
                class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
            ></div>
            <!-- Modal content -->
            <main class="flex flex-col items-center justify-center h-full w-full">
                <transition name="fade-up-down">
                    <div v-show="modal" class="modal-wrapper flex items-center z-30">
                        <div
                            class="modal max-w-4xl mx-5 bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
                        >
                            <div
                                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
                            >
                                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                                    {{ certificate?.title || 'Certificate' }}
                                </h5>
                                <button
                                    class="px-4 font-bold text-primary-dark dark:text-primary-light"
                                    @click="showModal()"
                                >
                                    <i data-feather="x"></i>
                                </button>
                            </div>
                            <div class="modal-body p-5 w-full h-full">
                                <div class="text-center">
                                    <!-- PDF Viewer -->
                                    <div v-if="certificate?.pdfUrl" class="pdf-container">
                                        <iframe
                                            :src="certificate.pdfUrl"
                                            class="w-full h-96 md:h-[600px] border border-gray-300 rounded"
                                            frameborder="0"
                                        >
                                            Your browser does not support PDFs. 
                                            <a :href="certificate.pdfUrl" target="_blank" class="text-cyan-300 underline">
                                                Download the PDF
                                            </a>
                                        </iframe>
                                    </div>
                                    
                                    <!-- Fallback if no PDF -->
                                    <div v-else class="text-center py-8">
                                        <div class="text-primary-dark dark:text-primary-light mb-4">
                                            <p class="text-lg font-semibold">{{ certificate?.title }}</p>
                                            <p class="text-gray-600 dark:text-gray-400">{{ certificate?.issuer }}</p>
                                            <p class="text-gray-500 dark:text-gray-500">{{ certificate?.issueDate }}</p>
                                        </div>
                                        <p class="text-gray-600 dark:text-gray-400">
                                            Certificate PDF is not available for preview.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </main>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.modal {
    max-width: 90vw;
    max-height: 90vh;
}

.pdf-container {
    width: 100%;
    min-height: 400px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-up-down-enter-active,
.fade-up-down-leave-active {
    transition: all 0.3s;
}

.fade-up-down-enter,
.fade-up-down-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>