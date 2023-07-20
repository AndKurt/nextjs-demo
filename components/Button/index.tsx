'use client';
import { useMemo } from 'react';
import { IButton } from './types';
import { getButtonBackground } from './utils';

export const Button = ({
    text,
    type,
    buttonClassName,
    handleClick,
    isRounded = false,
    children,
    color,
}: IButton) => {
    const roundedClassName = isRounded ? 'rounded-full' : 'rounded-md';
    const buttonColor = useMemo(() => getButtonBackground(color), [color]);

    return (
        <button
            className={`w-fit ${buttonColor} ${buttonClassName || ''} ${roundedClassName}`}
            type={type || 'submit'}
            onClick={handleClick}
        >
            {text}
            {children}
        </button>
    );
};
