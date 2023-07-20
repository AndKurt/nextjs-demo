export interface IButton {
    type?: 'submit' | 'button';
    text?: string;
    buttonClassName?: string;
    handleClick?: () => void;
    children?: React.ReactNode;
    isRounded?: boolean;
    color: TColors;
    /** Padding X direction*/
    px?: number;
    /** Padding Y direction */
    py?: number;
}

export type TColors = 'white' | 'blue' | 'yellow';
