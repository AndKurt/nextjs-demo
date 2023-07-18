import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main>
            <header className="bg-white flex w-header justify-between p-11">
                <Link href="/" className="flex items-end ">
                    <Image src="./img/logo.svg" alt="Vercel Logo" width={80} height={60} priority />
                    <p
                        className={`${inter.className} text-blue text-35 font-bold leading-normal ml-1`}
                    >
                        Modsen ProperLand
                    </p>
                </Link>
                <nav className="max-w-3xl w-full flex items-center">
                    <ul className="w-full max-w-lg justify-between flex items-center">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Properties</Link>
                        </li>
                        <li>
                            <Link href="/">Pages</Link>
                        </li>
                        <li>
                            <Link href="/">Blog</Link>
                        </li>
                    </ul>
                    <Link href="/" className="flex px-16 py-6 bg-blue text-white rounded-md ml-60">
                        Contact
                    </Link>
                </nav>
            </header>
            <main>
                <section className="bg-slate-400">banner</section>
            </main>
        </main>
    );
}
