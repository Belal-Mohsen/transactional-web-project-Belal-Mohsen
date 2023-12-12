import React from "react";

const OurStory = () => {
    return (

        <div className="relative w-[1240px] h-[468px] bg-[#c0876a80] rounded-[10px]">
            <img className="absolute w-[645px] h-[468px] top-0 left-px" alt="Story" src="./images/story.jpeg" />
            <div className="absolute w-[468px] h-[412px] top-[27px] left-[709px]">
                <div className="absolute w-[261px] h-[66px] -top-px left-[86px] [font-family:italianno,Helvetica,sans-serif] font-normal text-[#342f19] text-[48px] text-center tracking-[0] leading-[normal]">
                    Our Story
                </div>
                <button className="inline-flex items-center justify-center gap-[10px] px-0 py-[8px] absolute top-[370px] left-[156px] rounded-[5px] border border-solid border-[#c0876a] all-[unset] box-border">
                    <div className="relative w-[136px] h-[26px] mt-[-1.00px] [font-family:'Inria_Serif-Bold',Helvetica] font-bold text-[#c0876a] text-[16px] text-center tracking-[0] leading-[normal]">
                        CONTACT US
                    </div>
                </button>
                <p className="absolute w-[468px] h-[266px] top-[65px] left-0 [font-family:'Inter-Light',Helvetica] font-normal text-[#342f19] text-[16px] tracking-[0] leading-[normal]">
                    <span className="font-light">Founded by Chelsea, </span>
                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold">Unbox Holidays</span>
                    <span className="font-light">
                        {" "}
                        is inspired by a childhood filled with joyous family holiday celebrations. Each year, my large family would
                        gather to decorate our home, creating memories that have lasted a lifetime. These moments of togetherness
                        and festivity are at the heart of our business.
                        <br />
                        <br />
                        At{" "}
                    </span>
                    <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold">Unbox Holidays</span>
                    <span className="font-light">
                        , we aim to share this joy through our holiday decoration blind boxes. Each box is a collection of
                        happiness, a way to bring families together just as mine came together. We believe in making every
                        celebration special and memorable.
                        <br />
                        <br />
                        Join us in spreading the joy of holidays and creating new traditions, one decoration at a time.
                    </span>
                </p>
            </div>
        </div>
    );
};


export default OurStory;