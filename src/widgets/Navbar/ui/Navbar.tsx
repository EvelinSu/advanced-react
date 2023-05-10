import { SNavbarWrapper, SNavList } from './styles';
import { useTheme } from 'app/providers/StyleProvider';
import { AppLink } from 'shared/ui/AppLink';

export const Navbar = () => {
    const { themeKey, setThemeKey } = useTheme();

    const toggleTheme = () => {
        setThemeKey(themeKey === 'default' ? 'light' : 'default');
    };

    return (
        <SNavbarWrapper>
            <SNavList>
                <AppLink to={ '/' }>Main page</AppLink>
                <AppLink to={ '/about' }>About page</AppLink>
            </SNavList>
            <button onClick={ toggleTheme }>Change theme</button>
        </SNavbarWrapper>
    );
};

