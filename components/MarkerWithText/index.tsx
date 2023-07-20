import React from 'react';
import { IMarkerWithText } from './types';

export const MarkerWithText = ({ text }: IMarkerWithText) => {
    return (
        <div className="flex items-end font">
            <div className="flex justify-center items-center w-[26px] h-[26px] bg-[#CFCFCF] rounded-full mr-2">
                <div className="w-2 h-2 bg-blue rounded-full" />
            </div>
            <p className="text-common text-grey">{text}</p>
        </div>
    );
};
