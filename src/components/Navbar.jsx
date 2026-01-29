import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-10 py-5'>
            <a className='flex' href='/'>
                <img src="assets/achu.svg" alt="logo" />
                <span>arjunliji</span> 
            </a>
            <ul className='hidden sm:flex gap-5'>
                {
                    navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label === "Project" ? "Project" : "https://" + label + ".arjc.me"}>
                                {label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <a href="contact">Contact</a>
        </nav>
    )
}

export default Navbar