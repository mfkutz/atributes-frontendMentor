import React from 'react'

const Card = () => {
    return (
        <div className="bg-gradient-to-b from-Light-slate-blue-background to-Light-royal-blue-background max-w-[370px] lg:rounded-3xl rounded-b-3xl flex flex-col justify-center items-center">
            <div className="text-gray-300 font-bold lg:m-8 m-4 lg:text-[22px] mt-6">
                Your Result
            </div>
            {/* //////////////////////////////////////circle */}
            <div className="bg-gradient-to-b from-Violet-blue-circle to-Persian-blue-circle flex flex-col items-center lg:p-[100px] p-[70px] rounded-full relative">
                <div className="text-Pale-blue lg:text-[70px] text-[55px] font-extrabold absolute lg:top-9 top-5" >
                    76
                </div>
                <div className="absolute lg:top-28 top-[100px] text-[16px] lg:text-[18px] text-gray-400 fontBold">
                    of 100
                </div>
            </div>
            <div className="text-gray-200 font-bold lg:text-[32px] text-[25px] pt-4">
                Great
            </div>
            <div className="px-12 flex text-center text-gray-300 lg:pt-2 pt-[4px] lg:text-[17px] text-[16px] lg:pb-12 pb-9">
                You scored higher than 65% of the people who have taken these tests.
            </div>
        </div>
    )
}

export default Card