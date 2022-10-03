import { Btn } from 'components/Button/ButtonStyled';

export default function Button ({ onClick }) {
    return (
        <Btn type="submit" onClick={onClick}>Load more</Btn>
        
    );
}
