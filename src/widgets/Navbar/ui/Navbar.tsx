import { SNavbarWrapper, SNavList } from './styles';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const Navbar = () => {

    return (
        <SNavbarWrapper>
            <SNavList>
                <AppLink to={ '/' }>Main page</AppLink>
                <AppLink to={ '/about' }>About page</AppLink>
            </SNavList>
            <ThemeSwitcher />
        </SNavbarWrapper>
    );
};

