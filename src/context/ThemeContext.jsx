import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored ? stored : 'light';
    });

    const toggleTheme = () => {
        const newtheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newtheme);
        localStorage.setItem('theme', newtheme);
    }

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
