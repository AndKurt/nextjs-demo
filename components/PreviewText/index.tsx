import React from 'react';
import { IPreviewText } from './types';

export const PreviewText = ({ text, sectionNumber }: IPreviewText) => {
    return (
        <p className="text-blue capitalize tracking-widest">
            | <span className="text-yellow">{sectionNumber} </span>
            {text} |
        </p>
    );
};
