import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
    const base =
        'duration: 400 text-xs rounded-full bg-blue-400 uppercase tracking-wide text-stone-800 transition-colors hover:bg-blue-300 hover:text-gray-800 focus:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 disabled:cursor-not-allowed'

    const styles = {
        primary: base + 'text-xs px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-4 font-bold cursor-pointer',
        plain: 'px-2 py-1 text-xs bg-black text-gray-200 cursor-pointer rounded-full px-4 py-3 sm:px-4 sm:py-2 md:px-6 md:py-4 font-bold uppercase hover:bg-gray-400 focus:bg-black-300 focus:outline-none focus:ring focus:ring-black-300 focus:ring-offset-2 disabled:cursor-not-allowed',
        small: base + 'py-2 px-4 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs',
        round: base + 'py-1 px-2.5 sm:px-2.5 sm:py-2 md:px-3.5 md:py-2 text-sm',
    }

    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        )

    if (onClick)
        return (
            <button
                disabled={disabled}
                onClick={onClick}
                className={styles[type]}
            >
                {children}
            </button>
        )

    return (
        <button disabled={disabled} to={to} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
