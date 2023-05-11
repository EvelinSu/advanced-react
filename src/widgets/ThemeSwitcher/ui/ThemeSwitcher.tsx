import { useTheme } from 'app/providers/StyleProvider';

export const ThemeSwitcher = () => {
    const { themeKey, setThemeKey } = useTheme();

    const toggleTheme = () => {
        setThemeKey(themeKey === 'default' ? 'light' : 'default');
    };
    
    return (
        <button onClick={ toggleTheme }>Change theme</button>
    );
};

