<script>
import feather from 'feather-icons';
// import FooterCopyright from './FooterCopyright.vue';
import { socialLinks } from '../../data/socialLinks';

export default {
    // components: { FooterCopyright },
    data() {
        return {
            socials: socialLinks,
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script>

<template>
    <div class="xl:px-[168px] pt-6 xl:pb-17 px-6 pb-6 mt-[80px] border-t border-primary-light border-dashed dark:border-neutral-500">
        <div class="flex flex-col xl:flex-row justify-between">
            <div>
                <router-link to="/" class="hidden md:block">
                    <img src="@/assets/images/logo.svg" class="w-12" alt="Light Logo" />
                </router-link>
                <!-- Footer social links -->
                <div class="flex flex-col xl:flex-row mt-6 xl:items-center">
                    <div class="hidden xl:block font-normal text-sm xl:text-sm text-neutral-400">My socials</div>
                    <ul class="xl:ml-8 flex flex-row gap-3 xl:gap-8 text-sm xl:text-sm text-gray-500">
                        <a
                            v-for="social in socials"
                            :key="social.id"
                            :href="social.url"
                            target="__blank"
                            class="text-white hover:text-brand dark:hover:text-brand cursor-pointer rounded-lg duration-500 italic underline"
                        >
                            {{ social.name }}
                        </a>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col text-left bg-[#0F172A] font-normal p-5 rounded-xl mt-6 xl:mt-0">
                <div class="flex items-center mb-4">
                    <img src="@/assets/icons/phone.svg" alt="Phone icon" />
                    <div class="ml-4 text-base xl:text-2xl text-white">(+84) 78 444 3157</div>
                </div>
                <div class="flex items-center">
                    <img src="@/assets/icons/mail.svg" alt="Mail icon" />
                    <div class="ml-4 text-base xl:text-2xl text-white font-normal">xuanmai1308@gmail.com</div>
                </div>
            </div>

            <!-- Footer copyright -->
            <!-- <FooterCopyright /> -->
        </div>
    </div>
</template>

<style scoped></style>
