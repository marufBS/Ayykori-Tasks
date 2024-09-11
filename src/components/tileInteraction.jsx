import React, { useState } from 'react';
import { replaceRepetitiveLettersWithUnderscore } from '../utils/tileInteraction.utils';

const TileInteraction = () => {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [outputString, setOutputString] = useState('')

    const handleClickTile = (letter) => {
        let updatedString = outputString + letter;
        let changedString = replaceRepetitiveLettersWithUnderscore(updatedString);
        setOutputString(changedString);
    }

    return (
        <div className='flex justify-center items-center h-screen w-full px-5'>
            <div className='flex flex-col md:w-[50%] gap-5'>
                <div className='flex flex-wrap justify-center items-center gap-1'>
                    {
                        alphabets.split('').map((item, index) => (
                            <div onClick={() => handleClickTile(item)} key={index} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{item}</div>
                        ))

                    }
                </div>
                <div id='outputString' className='flex justify-center items-center bg-slate-400 w-full p-2 rounded-sm'>
                    {outputString || 'Output String'}
                </div>
            </div>
        </div>
    )
}

export default TileInteraction;
