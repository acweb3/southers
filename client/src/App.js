import { Connect } from 'components/Connect';
import { Mint } from 'components/Mint';
import { Wrapper } from 'components/Wrapper';
import { Contexts } from 'contexts';

export const App = () => {
    return (
        <Contexts>
            <Wrapper>
                <Connect />
                <Mint />
            </Wrapper>
        </Contexts>
    );
};
