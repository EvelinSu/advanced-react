import { useTheme } from 'app/providers/StyleProvider';
import { MoonIcon } from 'shared/assets/icons/MoonIcon';
import { SunIcon } from 'shared/assets/icons/SunIcon';
import { SThemeSwitcher, SThemeSwitcherMotion } from './styles';
import { IconButton } from 'shared/ui/IconButton';

export const ThemeSwitcher = () => {
    const { themeKey, setThemeKey } = useTheme();

    const toggleTheme = () => {
        setThemeKey(themeKey === 'default' ? 'light' : 'default');
    };

    return (
        <SThemeSwitcher onClick={ toggleTheme }>
            <SThemeSwitcherMotion>
                { themeKey === 'light'
                    ? <IconButton icon={ <MoonIcon /> } />
                    : <IconButton icon={ <SunIcon /> } />
                }
            </SThemeSwitcherMotion>
        </SThemeSwitcher>
    );
};

