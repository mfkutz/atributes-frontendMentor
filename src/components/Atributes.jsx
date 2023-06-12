import React from 'react'
import iconMemory from '../assets/images/icon-memory.svg'
import iconReaction from '../assets/images/icon-reaction.svg'
import iconVerbal from '../assets/images/icon-verbal.svg'
import iconVisual from '../assets/images/icon-visual.svg'

const Atributes = () => {
    return (
        <>
            <div className="flex justify-between text-Light-red lg:text-[18px] text-[16px] lg:py-[15px] py-[16px] font-bold bg-red-50 p-3 rounded-md mb-4 ">
                <div>
                    <div className='flex gap-2'>
                        <img src={iconReaction} alt="reaction" />
                        Reaction
                    </div>
                </div>
                <div className="text-Dark-gray-blue">
                    80 / 100
                </div>
            </div>
            <div className="flex justify-between text-Orangey-yellow lg:text-[18px] text-[16px] lg:py-[15px] py-[16px] font-bold bg-yellow-50 p-3 rounded-md mb-4">
                <div>
                    <div className='flex gap-2'>
                        <img src={iconMemory} alt="reaction" />
                        Memory
                    </div>
                </div>
                <div className="text-Dark-gray-blue">
                    92 / 100
                </div>
            </div>
            <div className="flex justify-between text-Green-teal lg:text-[18px] text-[16px] lg:py-[15px] py-[16px] font-bold bg-green-50 p-3 rounded-md mb-4">
                <div>
                    <div className='flex gap-2'>
                        <img src={iconVerbal} alt="reaction" />
                        Verbal
                    </div>
                </div>
                <div className="text-Dark-gray-blue">
                    61 / 100
                </div>
            </div>
            <div className="flex justify-between text-Cobalt-blue lg:text-[18px] text-[16px] lg:py-[15px] py-[16px] font-bold bg-blue-50 p-3 rounded-md mb-4">
                <div>
                    <div className='flex gap-2'>
                        <img src={iconVisual} alt="reaction" />
                        Visual
                    </div>
                </div>
                <div className="text-Dark-gray-blue">
                    72 / 100
                </div>
            </div>

        </>
    )
}

export default Atributes