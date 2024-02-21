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
    <!-- Hero banner -->
    <div class="bg-[url('@/assets/images/fiserv/s1-bg.png')] bg-cover">
        <div class="flex flex-col items-start justify-end">
            <div class="p-20 xl:p-[168px] pt-[200px] xl:pt-[289px] text-white">
                <div class="text-white text-6xl font-semibold leading-[70px]">
                    Global fintech products
                    <span class="text-[#ff6600]">for banking</span>
                </div>
                <div class="py-12 text-lg">
                    Fiserv, a top-ranked US fintech company, aims to digitize and upgrade their window application for customer satisfaction and
                    future scalability.
                </div>
                <div>
                    <div class="flex gap-6">
                        <div class="flex items-center gap-4 pr-6 border-r border-neutral-500">
                            <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Stake</div>
                            <Sketch />
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Client</div>
                            <img src="@/assets/icons/fiserv.svg" alt="Fiserv" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero banner -->
    <!-- Card Services -->
    <div class="p-20 xl:p-[168px] relative bg-gray-50">
        <img src="@/assets/images/fiserv/s2-bg.png" alt="" class="absolute right-0 top-0 h-full z-0" />
        <div class="relative z-10 flex flex-col items-start justify-center h-full top-0">
            <div class="text-orange-500 text-5xl font-medium font-['Poppins'] leading-10">
                Card
                <span class="text-black text-5xl font-medium leading-10">services</span>
            </div>
            <div class="text-neutral-900 text-lg font-normal py-2">
                Improve cardholder acquisition, retention and loyalty with debit and credit solutions. Below are some products of fiserv solutions I
                worked with
            </div>
            <div class="flex flex-col xl:flex-row pt-6 w-full justify-start items-start gap-8">
                <div class="flex items-start xl:w-1/2">
                    <img src="@/assets/images/fiserv/security.svg" alt="security" />
                    <div class="ml-6">
                        <div class="text-gray-800 text-3xl font-semibold leading-10">Dispute workstation</div>
                        <div class="text-neutral-900 text-lg font-normal">
                            An online dispute processing tool where facilitates the investigation and tracking of disputed transactions.
                        </div>
                    </div>
                </div>
                <div class="flex items-start xl:w-1/2">
                    <img src="@/assets/images/fiserv/pay.svg" alt="security" />
                    <div class="ml-6">
                        <div class="text-gray-800 text-3xl font-semibold leading-10">Paypoint</div>
                        <div class="text-neutral-900 text-lg font-normal">An online payment gateway management for bank back office.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Card Services -->
    <!-- Responsibilites -->
    <div class="relative p-20 xl:p-[168px] bg-gray-200 flex items-center">
        <img src="@/assets/images/fiserv/s3-shape.png" class="hidden xl:block xl:absolute top-0 left-0 h-full" />
        <div class="flex flex-col justify-center xl:ml-[500px] h-full top-0">
            <div class="text-orange-500 text-5xl font-medium font-['Poppins'] leading-10">
                My
                <span class="text-black text-5xl font-medium leading-10">responsibilities</span>
            </div>
            <div>
                <div class="pt-8 text-black text-lg font-semibold">User Interface Design</div>
                <div class="pt-2 text-neutral-900 text-lg font-normal">
                    Created visually appealing and accessible designs that align with the brand identity.
                </div>
            </div>
            <div>
                <div class="pt-8 text-black text-lg font-semibold">Collaborating with Stakeholders</div>
                <div class="pt-2 text-neutral-900 text-lg font-normal">
                    Worked closely with US product owner and other cross-functional team members to understand project requirements, provide design
                    recommendations.
                </div>
            </div>
            <div>
                <div class="pt-8 text-black text-lg font-semibold">Design System Development</div>
                <div class="pt-2 text-neutral-900 text-lg font-normal">
                    Contributed to the development and maintenance of a design system, ensuring consistency across different products and improving
                    overall efficiency.
                </div>
            </div>
        </div>
    </div>
    <!-- End Responsibilites -->
    <!-- Outcomes -->
    <div class="p-20 xl:p-[168px] bg-black">
        <div class="text-emerald-50 text-6xl font-semibold">Outcomes</div>
        <div class="flex flex-col mt-[60px] gap-[60px]">
            <div class="grid grid-cols-3 gap-6">
                <img src="@/assets/images/fiserv/oc1.png" class="h-full" />
                <img src="@/assets/images/fiserv/oc2.png" class="h-full" />
                <img src="@/assets/images/fiserv/oc3.png" class="h-full" />
            </div>
            <div class="grid grid-cols-2 gap-8">
                <img src="@/assets/images/fiserv/oc4.png" class="h-full" />
                <img src="@/assets/images/fiserv/oc5.png" class="h-full" />
            </div>
        </div>
    </div>
    <!-- End Outcomes -->
</template>
