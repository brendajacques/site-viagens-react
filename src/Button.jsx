function Button({ href, children, className }) {
    return (
        <button
            href={href}
            className={`relative group overflow-hidden px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-sm transition-all duration-300 ${className}`}
        >
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export default Button