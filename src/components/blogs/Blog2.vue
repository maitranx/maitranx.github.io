<script></script>
<template>
    <div class="max-w-[1440px] sm:flex items-center justify-center m-auto">
        <div class="px-[24px] md:px-[120px] xl:px-[345px]">
            <div class="text-white">
                <div class="text-white text-3xl font-medium leading-9 pb-6">Reasons to build smart components</div>
                <div class="text-slate-300 text-base font-normal leading-normal">
                    Building smart components in Figma for a design system is important for several reasons:
                </div>
                <div class="py-6 grid sm:grid-cols-5 grid-cols-1 gap-4">
                    <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Consistency</div>
                    </div>
                    <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Reusability</div>
                    </div>
                    <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Scalability</div>
                    </div>
                    <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Collaboration</div>
                    </div>
                    <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                        <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Maintenance</div>
                    </div>
                </div>
            </div>
            <!-- section 2 -->
            <div class="py-16">
                <div class="text-white text-3xl font-medium leading-9">Key concepts</div>
                <div class="text-slate-300 text-base font-normal leading-normal py-6">
                    When building smart components in Figma, there are three key concepts to consider: the .base component, component properties, and
                    slots.
                </div>
                <div class="text-white text-xl font-semibold leading-normal">.base component</div>
                <div class="text-slate-300 text-base font-normal leading-normal py-6">
                    The .base components serve as the foundation, providing a centralized source of truth that can be easily modified and updated.
                    <br /><br />
                    It defines the core structure, styling, and functionality that will be shared across multiple instances.
                </div>
                <div class="flex flex-col items-center py-4">
                    <div>
                        <img src="@/assets/images/blog/blog-2/img-1.png" alt="blog" />
                    </div>
                    <div class="text-slate-300 p-2 text-sm font-normal leading-none tracking-tight">
                        Using .base components to create Input, dropdown, search components
                    </div>
                </div>
                <div class="py-6 text-white text-xl font-semibold leading-normal">Component Properties</div>
                <ul class="list-disc text-slate-300 pl-4">
                    <li>Variant property</li>
                    <li>Boolean property</li>
                    <li>Instance swap</li>
                    <li>Text property</li>
                    <li>Exposed nested instance</li>
                    <li>Preferred values</li>
                </ul>
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <video controls class="rounded-md shadow-md">
                        <source src="@/assets/images/blog/blog-2/video-1.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
                </div>
                <div class="text-slate-300 text-sm font-normal leading-none tracking-tight mt-2">Expose nested component demo</div>
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <video controls class="rounded-md shadow-md">
                        <source src="@/assets/images/blog/blog-2/video-2.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
                </div>
                <div class="text-slate-300 text-sm font-normal leading-none tracking-tight mt-2">Preferred value demo</div>
            </div>
            <div class="text-white text-xl font-semibold leading-normal pt-6">Slots</div>
            <div class="text-slate-300 text-base font-normal leading-normal py-6">
                Slots are placeholders within a component that allow users to insert or replace specific content. They provide the ability to
                customize the component's content while preserving its overall structure and functionality.
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <video controls class="rounded-md shadow-md">
                        <source src="@/assets/images/blog/blog-2/video-3.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
                </div>
                <div class="text-slate-300 text-sm font-normal leading-none tracking-tight mt-2">
                    Apply .base components, components properties, slot to build a dynamic cell table
                </div>
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <video controls class="rounded-md shadow-md">
                        <source src="@/assets/images/blog/blog-2/video-4.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                    </video>
                </div>
                <div class="text-slate-300 text-sm font-normal leading-none tracking-tight mt-2">
                    Apply components properties, slot to build page template
                </div>
            </div>
            <div class="mt-16 text-white text-3xl font-medium leading-normal">Closing thoughts</div>
            <div class="mt-8 text-slate-300 text-base font-normal leading-normal">
                By leveraging the base component, component properties, and slots in Figma, you can create smart components that are reusable,
                customizable, and adaptable to different design needs. These concepts empower designers to build efficient and consistent design
                systems while providing users with the flexibility to tailor component instances to their specific requirements.
            </div>
        </div>
    </div>
</template>
