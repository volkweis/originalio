import optionList from './OptionList';
import Option from './Option';
import { Container } from './OptionsStyle';

export default function Options() {
    return (
        <Container>
            {optionList.map(option =><Option option={option}/>)}
        </Container>
    )
}
