<script>
import { FigmaIcon, HMI } from '@/components/icons';

export default {
    name: 'Fiserv',
    components: {
        FigmaIcon,
        HMI,
    },
};
</script>
<template>
    <div>
        <!-- Hero banner -->
        <div class="p-20 xl:p-[168px] pt-[40] xl:pt-[335px] bg-[url('@/assets/images/beckman/section-1.png')] bg-cover bg-no-repeat">
            <div class="flex flex-col justify-end gap-[50px] xl:max-w-[60%]">
                <div class="text-[#E6F4F2] text-[56px] font-semiboldleading-[70px]">
                    <div>Medical device</div>
                    <div>User Experience Design</div>
                </div>
                <div>
                    <span class="text-white text-lg font-normal"> My approach for bidding on a design project is centered around utilizing the </span>
                    <span class="text-[#6EC1C4] text-lg font-normal">User-Centered Design</span>
                    <span class="text-white text-lg font-normal">
                        (UCD) methodology to create designs that are focused on the needs and preferences of the users.
                    </span>
                </div>
                <div class="text-white flex items-center">
                    <div class="text-xs font-semibold font-['Inter'] uppercase leading-[15px]">Stake</div>
                    <div class="ml-2">
                        <HMI />
                    </div>
                    <div class="ml-4">
                        <FigmaIcon class="text-white" />
                    </div>
                    <div class="h-[27px] border border-[#6D6D6D] mx-6"></div>
                    <div class="items-center gap-2 flex flex-nowrap">
                        <div class="text-xs font-semibold font-['Inter'] uppercase leading-[15px]">Client</div>
                        <div class="text-xs font-semibold font-['Poppins'] leading-[15px]">a global leader in biomedical technology, US based</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Hero banner -->
        <!-- Card Services -->
        <div class="p-20 xl:p-[168px] bg-gray-50">
            <div class="flex flex-col items-start h-full pb-0">
                <div class="text-gray-800 text-5xl font-semibold leading-10">Main User</div>
                <div class="text-neutral-900 text-lg font-normal py-6">
                    The "Day in the Life" method is a user research technique that involves observing users in their natural environments to
                    understand their behaviors, needs, and challenges.
                    <div class="py-4">
                        By immersing myself in their daily routines, I can gather insights that help design interfaces customized to their specific
                        requirements.
                    </div>
                </div>
                <div class="flex flex-col pt-6 w-full justify-start items-start gap-8">
                    <div class="relative xl:pl-[158px]">
                        <div class="absolute">
                            <img src="@/assets/images/beckman/circle.png" alt="pill" />
                        </div>
                        <div class="relative flex items-start p-[56px] z-0">
                            <img src="@/assets/images/beckman/pill.svg" alt="pill" />
                            <div class="ml-6 w-[450px]">
                                <div class="text-gray-800 text-3xl font-semibold leading-10">Lab Technician/Operator</div>
                                <div class="text-neutral-900 text-lg font-normal py-6">
                                    Run Control at the start of their shift, to determine instrument is ready for processing Patient.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative xl:pl-[347px] h-[316px]">
                        <div class="absolute">
                            <img src="@/assets/images/beckman/circle-large.png" alt="pill" />
                        </div>
                        <div class="relative flex items-start p-[56px]">
                            <img src="@/assets/images/beckman/adn.svg" alt="adn" class="w-[80px]" />
                            <div class="ml-6 relative">
                                <div class="text-gray-800 text-3xl font-semibold leading-10">Lab supervisor</div>
                                <div class="text-neutral-900 text-lg font-normal py-6">
                                    Review Control File weekly to check wether the Control Runs have been reviewed by the Lab Technician/Operator or
                                    not, as well as to access the trending of graphs to evaluate the machine’s health in the past week. Then, mark
                                    review file.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Main User -->
        <!-- Responsibilites -->
        <div class="p-20 xl:p-[168px] xl:pt-[335px] bg-[url('@/assets/images/beckman/section-3.png')] bg-cover -mt-2">
            <div class="flex flex-col h-full">
                <div class="text-gray-800 text-5xl font-semibold leading-10">The proposal</div>
                <div class="text-neutral-900 text-lg font-normal py-8">
                    <ul class="list-disc ml-4">
                        <li>UX Research & Design</li>
                        <li>UI Design</li>
                        <li>Design guideline</li>
                    </ul>
                </div>
                <div class="text-neutral-900 text-lg font-normal">
                    I followed a structured process that involves extensive user research, market research. This helps me gain deep insights into the
                    users' behaviors, motivations, and pain points, which in turn informs the design decisions I make. Below is a bit of my research
                </div>
                <div class="grid grid-cols-2 gap-8 pt-8">
                    <div>
                        <div class="text-black text-lg font-semibold pb-5">Large input/text style/touch target size</div>
                        <img src="@/assets/images/beckman/s3-content-1.svg" alt="content" />
                    </div>
                    <div class="ml-auto">
                        <div class="text-black text-lg font-semibold pb-5">Icon driven</div>
                        <img src="@/assets/images/beckman/s3-content-2.svg" alt="content" />
                    </div>
                    <div>
                        <div class="pt-8 text-black text-lg font-semibold pb-5">Card based selectors</div>
                        <img src="@/assets/images/beckman/s3-content-3.svg" alt="content" />
                    </div>
                </div>
            </div>
        </div>
        <!-- End Responsibilites -->
        <!-- Mockup -->
        <div class="bg-zinc-200 p-20 xl:p-[168px] pb-0">
            <div class="text-gray-800 text-5xl font-semibold leading-10">Mockups</div>
            <div class="grid grid-cols-2 gap-10 pt-10">
                <div class="text-gray-800 text-2xl font-semibold font-['Poppins'] leading-loose">
                    Option 1
                    <img src="@/assets/images/beckman/mockup-1.png" class="pt-6" />
                </div>
                <div class="ml-auto text-gray-800 text-2xl font-semibold font-['Poppins'] leading-loose">
                    Option 2
                    <img src="@/assets/images/beckman/mockup-2.png" class="pt-6" />
                </div>
            </div>
        </div>
        <!-- End Mockup -->
        <!-- Outcomes -->
        <div class="bg-neutral-900 p-20 xl:p-[168px]">
            <div class="text-emerald-50 text-6xl font-semibold">Outcomes</div>
            <div class="grid grid-rows-3 gap-10 pt-[60px]">
                <img src="@/assets/images/beckman/oc-1.png" class="w-full" />
                <img src="@/assets/images/beckman/oc-2.png" class="w-full" />
                <img src="@/assets/images/beckman/oc-3.png" class="w-full" />
            </div>
        </div>
        <!-- End Outcomes -->
    </div>
</template>
