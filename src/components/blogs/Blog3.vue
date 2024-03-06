<script></script>
<template>
    <div class="max-w-[1440px] flex items-center justify-center m-auto">
        <div class="px-[24px] md:px-[120px] xl:px-[345px]">
            <div class="text-white grid md:grid-cols-2 gap-4">
                <div class="text-slate-300 text-base font-normal leading-normal">
                    As your product and design files grow in complexity, it's common to encounter challenges such as memory limitations or the need
                    for collaboration with other design teams. Splitting a large design file into smaller ones can help address these issues and
                    improve the overall efficiency of your design process.
                </div>
                <div>
                    <img src="@/assets/images/blog/blog-3/img-1.png" alt="blog" />
                </div>
            </div>
            <!-- section 2 -->
            <div class="py-16">
                <div class="text-white text-3xl font-medium leading-9">The process</div>
                <div class="pt-6">
                    <img src="@/assets/images/blog/blog-3/img-2.png" alt="blog" />
                </div>
                <div class="mt-16 text-white text-3xl font-medium leading-normal">Define the new file structure</div>
                <div class="text-white text-xl font-semibold leading-[25px] pt-4">Anatomy of One file for everything</div>
                <div class="py-6">
                    <span class="text-white text-base font-normal font-['Poppins'] leading-normal">
                        • UI Mockup screens<br />
                        • Feature components</span
                    >
                    <span class="text-neutral-400 text-base font-normal font-['Poppins'] leading-normal"> </span>
                    <span class="text-slate-400 text-base font-normal font-['Poppins'] leading-normal">
                        that repeat in features such as Navigation, Homepage,... that can be moved to a new file called Shared library<br
                    /></span>
                    <span class="text-white text-base font-normal font-['Poppins'] leading-normal"> • Global components </span>
                    <span class="text-slate-400 text-base font-normal font-['Poppins'] leading-normal"
                        >(Foundation, Buttons, Inputs, Icon,...) that can be developed to Design system<br
                    /></span>
                    <span class="text-white text-base font-normal font-['Poppins'] leading-normal"> • Local components </span>
                    <span class="text-slate-400 text-base font-normal font-['Poppins'] leading-normal">Components used for a specific feature</span>
                </div>
                <div class="flex flex-col items-center pt-4">
                    <div>
                        <img src="@/assets/images/blog/blog-3/Img-3.png" alt="blog" />
                    </div>
                </div>
            </div>
            <div class="text-white text-xl font-semibold leading-normal">Structure of multiple design files</div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <div>
                        <img src="@/assets/images/blog/blog-3/img-4.png" alt="blog" class="pt-4" />
                    </div>
                </div>
            </div>
            <div class="text-white text-3xl font-medium leading-normal mt-16">Communicate with stakeholders</div>
            <div class="text-slate-300 text-base font-normal leading-normal py-6">
                Below is example of the rollout plan that I communicated with Product development team
            </div>
            <div>
                <img src="@/assets/images/blog/blog-3/img-5.png" alt="blog" />
            </div>
            <div class="text-white text-3xl font-medium leading-normal mt-16">Implementation</div>
            <div class="text-white text-xl font-semibold leading-[25px] pt-8">
                Step 1: Duplicate existing design file to 3 files for these purposes
            </div>
            <div class="text-slate-300 text-base font-normal leading-normal pt-4">
                Duplicate the existing design file to multiple files for experiment are encouraged. Experiment in existing design file are not
                recommended because development team is using it. Any change you do might interrupt their daily work.
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="@/assets/images/blog/blog-3/img-6.png" alt="blog" class="pt-6" />
            </div>
            <div class="text-white text-xl font-semibold leading-[25px] pt-8">Step 2: Set up Design System</div>
            <div class="text-slate-300 text-base font-normal leading-normal pt-4">
                In Design system file, publish only Global components (such as Foundation, Buttons, Inputs,...)
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="@/assets/images/blog/blog-3/img-7.png" alt="blog" class="pt-6" />
            </div>
            <div class="text-slate-300 text-base font-normal leading-normal pt-4">
                You can publish selected components or search for component name and publish that component
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="@/assets/images/blog/blog-3/img-8.png" alt="blog" class="pt-6" />
                <div class="text-white p-2 text-sm font-normal leading-none tracking-tight">Publish selected components</div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="@/assets/images/blog/blog-3/img-9.png" alt="blog" class="pt-6" />
                <div class="text-white p-2 text-sm font-normal leading-none tracking-tight">Publish all styles and components</div>
            </div>
            <div class="text-white text-xl font-semibold leading-[25px] pt-10">Step 3: Set up Shared library</div>
            <div class="text-slate-300 text-base font-normal leading-normal py-6">
                In Shared library file, following these steps:<br />
                • Turn on Design system that published in step 2 • Published feature components that are repeated in design such as Navigation,
                homepage,...
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="@/assets/images/blog/blog-3/img-4.1.png" alt="blog" />
            </div>
            <div class="text-white text-xl font-semibold leading-[25px] pt-10">Step 4: Set up Design files</div>
            <div class="text-slate-300 text-base font-normal leading-normal py-6">
                • Create multiple empty files for mockups storage. <br />
                • In this file, turn on Design System and Shared Library.
            </div>
            <div class="flex flex-col items-center justify-center">
                <img src="@/assets/images/blog/blog-3/img-10.png" alt="blog" />
            </div>
            <div class="text-white text-xl font-semibold leading-[25px] pt-10">Step 5: Moving UI Mockup screens to new Design files</div>
            <div class="text-slate-300 text-base font-normal leading-normal pt-4">
                Back to Shared library and copy local components and UI mockup screens at the same time to new design files<br /><br />
                Note: If you skip step 4 and jump to step 5, your components will be detached.
            </div>
            <div class="flex flex-col items-center justify-center pt-6">
                <img src="@/assets/images/blog/blog-3/img-11.png" alt="blog" />
            </div>
            <div class="mt-16 py-6 text-white text-3xl font-medium leading-normal">Closing thoughts</div>
            <div class="text-slate-300 text-base font-normal leading-normal">
                By approaching the splitting process carefully, communicating effectively with stakeholders, creating backup files, and planning
                ahead, you can ensure a smooth transition from a large Figma file to smaller, more manageable ones.
            </div>
        </div>
    </div>
</template>
