import Navbar from './Navbar'
import imgHero from './assets/hero-img.png'
import imgPorto from './assets/porto-card.jpg'
import imgMachuPichu from './assets/machupichu-card.jpg'
import imgRio from './assets/rio-card.jpg'
import Card from './Card'

function Home() {
    return (
        <div className="flex flex-col gap-0 min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans">
            <Navbar />
            <main className="flex-1">
                <section className="mx-6 mb-6 rounded-3xl relative mt-21 overflow-hidden p-6 md:p-12 h-[calc(100vh-96px)] flex items-center justify-start">
                    <div className="p-4 md:p-8 h-full flex flex-col justify-center gap-6 relative z-10">
                        <div className="flex flex-col gap-2 text-white">
                            <p className="text-white text-lg md:text-xl font-light uppercase tracking-wider">Horizonte</p>
                            <h1 className="text-4xl md:text-7xl lg:text-[96px] font-semibold max-w-[1200px] text-balance leading-[1.1] text-white">Descubra seu próximo destino</h1>
                        </div>
                        <p className="max-w-[800px] text-base md:text-2xl leading-[1.4] font-normal text-zinc-200 text-balance">Experiências únicas e roteiros personalizados para você explorar o mundo sem preocupações.</p>
                        
                        <div>
                            <a href="#pacotes" className="inline-block px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-500 text-zinc-900 font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/20 text-center"> Ver pacotes</a>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 z-[-1]"></div>
                    <img src={imgHero} alt="hero-image" className="absolute top-0 left-0 w-full h-full object-cover "/>
                </section>

                <section id="pacotes" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
                    <h2 className="text-center text-3xl md:text-[2.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-20 mb-14">Pacotes em promoção</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto p-4">

                        <Card 
                            image={imgPorto} 
                            title="Porto de Galinhas, Brasil" 
                            description="12X de 189,99 ou R$1.899,99 à vista" 
                            altText="Porto de Galinhas"
                        />
                        <Card 
                            image={imgMachuPichu} 
                            title="Machu Pichu, Peru" 
                            description="12X de 269,99 ou R$2.699,99 à vista" 
                            altText="Machu Pichu"
                        />
                        <Card 
                            image={imgRio} 
                            title="Rio de Janeiro, Brasil" 
                            description="12X de 129,99 ou R$1.299,99 à vista" 
                            altText="Rio de Janeiro"
                        />

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home