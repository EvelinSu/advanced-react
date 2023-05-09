import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, StyleContext } from 'app/providers/StyleProvider/lib/StyleContext';
import { Themes } from 'app/providers/StyleProvider/lib/themeUtils';

type UseThemeResult = {
    setThemeKey: (themeKey: Themes) => void,
    themeKey: Themes
}
export const useTheme = (): UseThemeResult => {
    const { themeKey, setThemeKey } = useContext(StyleContext);

    const changeTheme = (theme: Themes) => {
        setThemeKey(theme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    };

    return { themeKey, setThemeKey: changeTheme };
};