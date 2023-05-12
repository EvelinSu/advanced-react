import { SIconButton } from './styles';

type PropsType = {
    icon: React.ReactNode

}
export const IconButton = ({ icon }: PropsType) => {
    return (
        <SIconButton>
            { icon }
        </SIconButton>
    );
};

