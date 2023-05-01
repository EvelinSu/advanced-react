import { STypography } from './styles';
import { ThemeType } from '../../app/styles/themeUtils';

type PropsType = {
    size: Pick<ThemeType, 'fontSizes'>['fontSizes'];
    children: React.ReactNode
}
export const Typography = (props: PropsType) => {
    return (
        <STypography>
            { props.children }
        </STypography>
    );
};

