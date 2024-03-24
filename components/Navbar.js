import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = () => {
    const router = useRouter();

    return (
        <div className='max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between'>

        {/* Section - Logo */}
        <div>

        </div>

        {/* Section - Links */}
        <ul className='inline-flex items-center gap-8 uppercase text-sm font-semibold'>

            <li>
            <Link href='/'>
                <p className={router.pathname == '/' ? 'active' : ''}>
                    Home
                </p>
            </Link>
            </li> 

            <li>
            <Link href="calendar">
                <p className={router.pathname == '/calendar' ? 'active' : ''}>
                    Calendar
                </p> 
            </Link>
            </li>

            <li>
            <Link href="education">
                Education 
            </Link>
            </li>

            <li>
            <Link href="young_adults">
                Young Adults
            </Link>
            </li>

            <li>
            <Link href="seva">
                Seva
            </Link>
            </li>
            <Link href="devotion">
                Devotion
            </Link>

        </ul>

        </div>
    );
}

export default Navbar;