import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { navLinks } from './constants';
import { Button } from '../Button';

const inter = Inter({ subsets: ['latin'] });

export const Header = () => {
    return (
        <div className="w-full flex justify-center bg-transparent absolute z-50">
            <header className="bg-white flex max-w-container w-full justify-between p-11 mt-24">
                <Link href="/" className="flex items-end ">
                    <Image src="./img/logo.svg" alt="Vercel Logo" width={80} height={60} priority />
                    <p
                        className={`${inter.className} text-blue text-35 font-bold leading-normal ml-1`}
                    >
                        Modsen ProperLand
                    </p>
                </Link>
                <nav className="max-w-navigation w-full flex items-center">
                    <ul className="w-full max-w-lg justify-between flex items-center">
                        {navLinks.map(({ name, href }) => (
                            <li key={name}>
                                <Link href={href}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                    <Button
                        buttonClassName="ml-[60px] px-[61px] py-[23px]"
                        text="Contact"
                        color="blue"
                    />
                </nav>
            </header>
        </div>
    );
};
