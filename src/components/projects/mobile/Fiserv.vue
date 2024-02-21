<script>
import { Sketch } from '@/components/icons';

export default {
    name: 'Fiserv',
    components: {
        Sketch,
    },
};
</script>
<template>
    <div class="relative bg-black">
        <div class="pt-40 pb-20 px-6 flex-col justify-end items-start gap-12 inline-flex">
            <div class="self-stretch">
                <span class="text-white text-3xl font-semibold font-['Poppins'] leading-10">Global fintech products</span
                ><span class="text-orange-500 text-3xl font-semibold font-['Poppins'] leading-10"> for banking </span>
            </div>
            <div class="self-stretch text-white text-lg font-normal font-['Poppins']">
                Fiserv, a top-ranked US fintech company, aims to digitize and upgrade their window application for customer satisfaction and future
                scalability.
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex items-center gap-4 pr-6">
                    <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Stake</div>
                    <Sketch />
                </div>
                <div class="flex items-center gap-4">
                    <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Client</div>
                    <img src="@/assets/icons/fiserv.svg" alt="Fiserv" />
                </div>
            </div>
        </div>
        <div class="px-6 py-20 bg-gray-50 flex-col justify-start items-start gap-6 inline-flex">
            <div class="self-stretch flex-col justify-start items-start gap-2 flex">
                <div class="self-stretch">
                    <span class="text-orange-500 text-2xl font-medium font-['Poppins'] leading-loose">Card</span
                    ><span class="text-black text-2xl font-medium font-['Poppins'] leading-loose"> services</span>
                </div>
                <div class="self-stretch text-neutral-900 text-lg font-normal font-['Poppins']">
                    Improve cardholder acquisition, retention and loyalty with debit and credit solutions. Below are some products of fiserv solutions
                    I worked with
                </div>
            </div>

            <div class="self-stretch flex-col justify-start items-start gap-8 flex">
                <div class="self-stretch flex-col justify-start items-start gap-6 flex">
                    <img src="@/assets/images/fiserv/security.svg" alt="security" />

                    <div class="self-stretch flex-col justify-start items-start gap-3 flex">
                        <div class="self-stretch text-gray-800 text-xl font-semibold font-['Poppins'] leading-normal">Dispute workstation</div>
                        <div class="self-stretch text-neutral-900 text-lg font-normal font-['Poppins']">
                            An online dispute processing tool where facilitates the investigation and tracking of disputed transactions.
                        </div>
                    </div>
                </div>
                <div class="self-stretch flex-col justify-start items-start gap-6 flex">
                    <img src="@/assets/images/fiserv/pay.svg" alt="security" />

                    <div class="self-stretch flex-col justify-start items-start gap-3 flex">
                        <div class="self-stretch text-gray-800 text-xl font-semibold font-['Poppins'] leading-normal">Paypoint</div>
                        <div class="self-stretch text-neutral-900 text-lg font-normal font-['Poppins']">
                            An online payment gateway management for bank back office
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-6 py-20 bg-gray-200 justify-end items-start gap-6 inline-flex">
            <div class="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <div class="self-stretch">
                    <span class="text-orange-500 text-2xl font-medium font-['Poppins'] leading-loose">My </span
                    ><span class="text-black text-2xl font-medium font-['Poppins'] leading-loose">responsibilities</span>
                </div>
                <div class="self-stretch flex-col justify-start items-start gap-8 flex">
                    <div class="self-stretch flex-col justify-start items-start gap-2 flex">
                        <div class="text-black text-lg font-semibold font-['Poppins']">User Interface Design</div>
                        <div class="self-stretch text-neutral-900 text-lg font-normal font-['Poppins']">
                            Created visually appealing and accessible designs that align with the brand identity
                        </div>
                    </div>
                    <div class="self-stretch flex-col justify-start items-start gap-2 flex">
                        <div class="text-black text-lg font-semibold font-['Poppins']">Collaborating with Stakeholders</div>
                        <div class="self-stretch text-neutral-900 text-lg font-normal font-['Poppins']">
                            Worked closely with US product owner and other cross-functional team members to understand project requirements, provide
                            design recommendations.
                        </div>
                    </div>
                    <div class="self-stretch justify-start items-start gap-8 inline-flex">
                        <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                            <div class="text-black text-lg font-semibold font-['Poppins']">Design System Development</div>
                            <div class="self-stretch text-neutral-900 text-lg font-normal font-['Poppins']">
                                Contributed to the development and maintenance of a design system, ensuring consistency across different products and
                                improving overall efficiency.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-6 pt-20 bg-black flex-col justify-start items-start gap-6 inline-flex w-full">
            <div class="text-emerald-50 text-2xl font-semibold font-['Poppins'] leading-loose">Outcomes</div>
            <div class="self-stretch flex-col justify-start items-start gap-6 flex">
                <img src="@/assets/images/fiserv/oc1.png" class="w-full" />
                <img src="@/assets/images/fiserv/oc2.png" class="w-full" />
                <img src="@/assets/images/fiserv/oc3.png" class="w-full" />
                <img src="@/assets/images/fiserv/oc4.png" />
                <img src="@/assets/images/fiserv/oc5.png" />
            </div>
        </div>
    </div>
</template>
