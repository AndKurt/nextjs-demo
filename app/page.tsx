import Image from 'next/image';
import { Button } from '@/components/Button';
import { MarkerWithText, PlayButton, PreviewText } from '@/components';

const markers = ['Only pay when you publish', 'Unlimited featured use', '24/7 supports'];

export default function Home() {
    return (
        <main>
            {/* Section 1 */}
            <section className="banner h-[1034px] flex justify-center">
                <div className="max-w-container w-full flex items-end">
                    <div className="max-w-[609px] w-full flex flex-col gap-9 pb-32">
                        <div className="gradient-label inline-block w-fit px-4 py-2 align-middle ">
                            <Image
                                className="inline"
                                src="./img/house.svg"
                                alt="house-pic"
                                width={27}
                                height={24}
                            />
                            <p className="inline-block pl-4 text-20 text-brown uppercase tracking-widest align-bottom">
                                Real Estate Agency
                            </p>
                        </div>
                        <h1 className="text-65 text-blue">
                            Find the perfect place to Live with your family
                        </h1>
                        <p className="text-common text-brown">
                            Distinctively re-engineer revolutionary meta-services and premium
                            architectures. Intrinsically incubate.
                        </p>

                        <Button
                            buttonClassName="px-[30px] py-[24px]"
                            text="Explore Property"
                            color="white"
                        >
                            <Image
                                className="inline pl-2"
                                src="./img/btn-yellow-arrow.svg"
                                alt="house-pic"
                                width={27}
                                height={24}
                            />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="flex justify-center">
                <div className=" flex gap-9 max-w-container w-full pt-[100px] pb-[175px]">
                    <div className="flex flex-col gap-6 px-[72px] py-[65px] w-full max-w-[942px] bg-[#F2F2F2]">
                        <PreviewText text="PROPERLAND INTRO" sectionNumber="01" />
                        <h2 className="text-45 text-blue font-bold inline-block max-w-[609px]">
                            Buying & Selling Property In An Easy Way
                        </h2>
                        <p className="text-common text-brown">
                            Distinctively re-engineer revolutionary meta-services and premium At
                            vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                            praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias excepturi.
                        </p>
                        <div className="flex gap-7">
                            {markers.map(text => (
                                <MarkerWithText key={text} text={text} />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full max-w-[420px] bg-video bg-center bg-contain">
                        <PlayButton />
                    </div>
                </div>
            </section>
        </main>
    );
}
