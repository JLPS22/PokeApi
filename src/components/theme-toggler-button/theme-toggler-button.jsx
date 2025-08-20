import { useTheme } from "../../contexts/theme-context";

export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} >
            Change to {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};