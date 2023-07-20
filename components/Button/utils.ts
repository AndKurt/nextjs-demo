import { TColors } from './types';

export const getButtonBackground = (color: TColors) => {
    switch (color) {
        case 'blue':
            return 'bg-blue text-white';
        case 'yellow':
            return 'bg-yellow text-blue';
        default:
            return 'bg-white text-blue';
    }
};
