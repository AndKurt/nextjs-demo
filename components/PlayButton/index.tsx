import Image from 'next/image';

export const PlayButton = () => {
    return (
        <div className="cursor-pointer play-btn w-[153px] h-[153px] bg-white/[.15] border-spacing-1 border-[1px] border-white">
            <div className="play-btn w-[120px] h-[120px] bg-white/[.4] border-spacing-1 border-[1px]">
                <div className="play-btn w-[90px] h-[90px] bg-white">
                    <Image src="./img/play.svg" alt="play" width={20} height={20} />
                </div>
            </div>
        </div>
    );
};
