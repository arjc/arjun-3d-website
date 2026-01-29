import { navLinks, socialLinks } from '../constants'

const Navbar = () => {

    const makeObjectList = (arr, useOnlyText) => (
        arr.map(({ p, a, i: I }) => (
            <li key={p}>
                <a href={a} target="_blank" rel="noreferrer" className='flex items-center gap-2'>
                    {useOnlyText >= 2 ? <><I fontSize="inherit" />{p}</> : useOnlyText ? p : <I fontSize="inherit" />}
                </a>
            </li>
        ))
    )

    return (
        <nav className='flex items-center sm:justify-between px-10 py-5'>
            <a className='flex items-center gap-1' href='/'>
                <img src="/favicon.ico" alt="logo" className='h-6' />
                <span>Arjun Liji</span>
            </a>
            <ul className='hidden sm:flex gap-5'>{makeObjectList(navLinks, 1)}</ul>
            <ul className='hidden sm:flex gap-2'>{makeObjectList(socialLinks, 0)}</ul>

        </nav>
    )
}

export default Navbar