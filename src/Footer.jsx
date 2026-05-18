import { Mail, ArrowRight } from 'lucide-react';

function Footer() {
    return (
        <footer className="mt-32 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 px-10 py-16 rounded-tl-[125px] border-t border-zinc-200 dark:border-zinc-800 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="w-full lg:w-1/4 p-6 max-w-xs">
                    <span className="text-6xl font-bold tracking-tighter leading-none inline-block mb-8 text-zinc-900 dark:text-zinc-50">HZ®</span>
                    <p>Sua próxima grande aventura começa aqui.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-16 w-full lg:w-auto">
                    <div className="p-6">
                        <h3 className="w-fit mb-10 relative font-semibold text-base">Contato</h3>
                        <p className="mb-2">Edifício Mengines</p>
                        <p className="mb-2">Rua Tiradentes, 42 - Centro</p>
                        <p className="mb-2">brendajacques.design@gmail.com</p>
                        <p>+55 (54) 93238-2893</p>
                    </div>
                    <div className="p-6">
                        <h3 className="w-fit mb-10 relative font-semibold text-base">Links</h3>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-3 text-left"><a href="#" className="no-underline text-zinc-900 dark:text-zinc-50 hover:text-amber-500 transition-colors">Início</a></li>
                            <li className="mb-3 text-left"><a href="#" className="no-underline text-zinc-900 dark:text-zinc-50 hover:text-amber-500 transition-colors">Sobre</a></li>
                            <li className="mb-3 text-left"><a href="#" className="no-underline text-zinc-900 dark:text-zinc-50 hover:text-amber-500 transition-colors">Pacotes</a></li>
                            <li className="mb-3 text-left"><a href="#" className="no-underline text-zinc-900 dark:text-zinc-50 hover:text-amber-500 transition-colors">Contato</a></li>
                        </ul>
                    </div>
                    <div className="p-6 md:w-80">
                        <h3 className="w-fit mb-10 relative font-semibold text-base">Receba nossas promoções</h3>
                        <form className="pb-4 flex items-center justify-between border-b border-zinc-900 dark:border-zinc-50 mb-12">
                            <Mail className="w-5 h-5 mr-3" />
                            <input type="email" placeholder="Digite seu email" required className="w-full bg-transparent text-zinc-900 dark:text-zinc-50 border-0 outline-none focus:outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-400" />
                            <button type="submit" className="bg-transparent border-0 outline-none cursor-pointer hover:text-amber-500 transition-colors"><ArrowRight className="w-5 h-5" /></button>
                        </form>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-amber-400 hover:text-zinc-900 transition-all">
                                <i className="fa-brands fa-facebook-f"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-amber-400 hover:text-zinc-900 transition-all">
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-amber-400 hover:text-zinc-900 transition-all">
                                <i className="fa-brands fa-x-twitter"></i>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-amber-400 hover:text-zinc-900 transition-all">
                                <i className="fa-brands fa-whatsapp"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
