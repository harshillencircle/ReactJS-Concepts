import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toggleTheme} className="px-4 py-2 rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white transition-colors"> 
                {theme === 'light' ? 'Dark' : 'Light'} mode
            </button>
        </div>
    )
}

export default ThemeToggle;