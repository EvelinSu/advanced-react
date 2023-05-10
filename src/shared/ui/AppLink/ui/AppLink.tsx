import { Link, LinkProps } from 'react-router-dom';
import { SAppLink } from 'shared/ui/AppLink/ui/styles';

type PropsType = LinkProps & {
    children: React.ReactNode
}

export const AppLink = ({ children, ...props }: PropsType) => {
    return (
        <SAppLink>
            <Link to={ props.to }>
                { children }
            </Link>
        </SAppLink>
    );
};

