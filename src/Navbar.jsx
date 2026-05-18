import { useState, useEffect } from 'react'
import Button from './Button'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeHash, setActiveHash] = useState(window.location.hash || '#inicio')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || '#inicio')
        }
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: 'Início', hash: '#inicio' },
        { name: 'Sobre', hash: '#sobre' },
        { name: 'Pacotes', hash: '#pacotes' },
        { name: 'Contato', hash: '#contato' },
    ]

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    <div className="shrink-0 w-[200px]">
                        <span className='font-bold text-2xl'>HZ®</span>
                    </div>

                    <div className="hidden md:flex items-center justify-center flex-1">
                        <ul className="flex items-center gap-6">
                            {navLinks.map((link) => {
                                const isActive = activeHash === link.hash
                                return (
                                    <li key={link.hash} className="relative">
                                        <a
                                            href={link.hash}
                                            className={`relative py-2 px-3 text-md transition-colors duration-200 block rounded-full ${isActive
                                                    ? 'bg-amber-200'
                                                    : 'text-zinc-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {link.name}

                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center justify-end w-[200px]">
                        <Button href="#pacotes">Ver pacotes</Button>
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus:outline-none transition-colors"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 mt-2 py-4' : 'max-h-0 opacity-0 mt-0 py-0'
                    } bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 px-4`}
                id="mobile-menu"
            >
                <div className="space-y-1.5 flex flex-col items-center">
                    {navLinks.map((link) => {
                        const isActive = activeHash === link.hash
                        return (
                            <a
                                key={link.hash}
                                href={link.hash}
                                onClick={() => setIsOpen(false)}
                                className={`w-full text-center relative py-2 px-3 text-md transition-colors duration-200 block rounded-full ${isActive
                                        ? 'bg-amber-200'
                                        : 'text-zinc-600 hover:bg-gray-200'
                                    }`}
                            >
                                {link.name}
                            </a>
                        )
                    })}
                    <div className="pt-4 w-full flex justify-center">
                        <Button href="#pacotes" className="w-full">Ver pacotes</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar