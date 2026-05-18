import React from 'react';

function Card({ image, title, description, altText }) {
    return (
        <div className="grid bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="overflow-hidden h-[200px]">
                <img src={image} alt={altText || title} className="h-[200px] w-full object-cover transition-transform duration-500 hover:scale-105"/>
            </div>
            <div className="p-5 grid gap-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                <button className="mt-4 w-full text-center px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-amber-400 hover:text-zinc-900 hover:border-amber-400 dark:hover:bg-amber-400 dark:hover:text-zinc-900 dark:hover:border-amber-400 font-medium transition-all duration-300 rounded-full text-sm">Ver pacote</button>
            </div>
        </div>
    );
}

export default Card;
