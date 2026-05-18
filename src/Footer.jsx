function Footer() {
    return (
        <footer className="mt-[120px] bg-[var(--secondary-container)] text-[var(--on-secondary-container)] px-[40px] py-[60px] rounded-tl-[125px] border-t border-[#e5e7eb] text-[14px] leading-[20px] [&_p]:text-[var(--on-secondary-container)] [&_h3]:text-[var(--on-secondary-container)] [&_i]:text-[var(--on-secondary-container)]">
            <div className="max-w-[1200px] mx-auto flex justify-between items-start gap-[40px]">
                <div className="basis-1/4 p-[24px] max-w-[300px]">
                    <span className="text-[56px] font-bold tracking-[-2px] leading-none inline-block mb-[30px] text-[var(--on-secondary-container)]">HZ®</span>
                    <p>Sua próxima grande aventura começa aqui.</p>
                </div>
                <div className="flex gap-[60px]">
                    <div className="basis-[15%] p-[24px]">
                        <h3 className="w-fit mb-[40px] relative">Contato</h3>
                        <p>Edifício Mengines</p>
                        <p>Rua Tiradentes, 42 - Centro</p>
                        <p>brendajacques.design@gmail.com</p>
                        <p> +55 (54) 93238-2893</p>
                    </div>
                    <div className="basis-[15%] p-[24px]">
                        <h3 className="w-fit mb-[40px] relative">Links</h3>
                        <ul className="list-none p-0 m-0">
                            <li className="mb-[12px] text-left text-[var(--on-secondary-container)]"><a href="" className="no-underline text-[var(--on-secondary-container)]">Início</a></li>
                            <li className="mb-[12px] text-left text-[var(--on-secondary-container)]"><a href="" className="no-underline text-[var(--on-secondary-container)]">Sobre</a></li>
                            <li className="mb-[12px] text-left text-[var(--on-secondary-container)]"><a href="" className="no-underline text-[var(--on-secondary-container)]">Pacotes</a></li>
                            <li className="mb-[12px] text-left text-[var(--on-secondary-container)]"><a href="" className="no-underline text-[var(--on-secondary-container)]">Contato</a></li>
                        </ul>
                    </div>
                    <div className="basis-1/4 p-[24px]">
                        <h3 className="w-fit mb-[40px] relative">Receba nossas promoções</h3>
                        <form className="pb-[16px] flex items-center justify-between border-b border-[var(--on-secondary-container)] mb-[50px]">
                            <i className="fa-regular fa-envelope text-[18px] mr-[10px]"></i>
                            <input type="email" placeholder="Digite seu email" required className="w-full bg-transparent text-[var(--on-secondary-container)] border-0 outline-none focus:outline-none placeholder:text-[var(--on-secondary-container)] placeholder:opacity-80" />
                            <button type="submit" className="bg-transparent border-0 outline-none cursor-pointer"><i className="fa-solid fa-arrow-right text-[16px] text-[var(--on-secondary-container)]"></i></button>
                        </form>
                        <div className="flex gap-[16px]">
                            <button className="btn btn-on-secondary-container !w-[32px] !h-[32px] !p-0 flex items-center justify-center">
                                <i className="fa-brands fa-facebook-f"></i>
                            </button>
                            <button className="btn btn-on-secondary-container !w-[32px] !h-[32px] !p-0 flex items-center justify-center">
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button className="btn btn-on-secondary-container !w-[32px] !h-[32px] !p-0 flex items-center justify-center">
                                <i className="fa-brands fa-x-twitter"></i>
                            </button>
                            <button className="btn btn-on-secondary-container !w-[32px] !h-[32px] !p-0 flex items-center justify-center">
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
