import { navLinks } from '../constants'


const toLinkList = arr => (
    arr.map(({ p, a }) => (
        <li key={p}><a href={a}>{p}</a></li>
    ))
);


const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-10 py-5'>
            <a className='flex items-center gap-1' href='/'>
                <img src="../../public/favicon.ico" alt="logo" className='h-6' />
                <span>Arjun Liji</span>
            </a>
            <ul className='hidden sm:flex gap-5'>{toLinkList(navLinks)}</ul>
            <a href="contact">Contact</a>
        </nav>
    )
}

export default Navbar