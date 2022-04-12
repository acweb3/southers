import { useEthers } from '@usedapp/core';
import * as S from 'components/Mint/Mint.styled';
import { useMint } from 'components/Mint/hooks/useMint';

export const Mint = ({ className }) => {
    const ethers = useEthers();
    const { mint } = useMint({ tokenId: 0 });

    if (!ethers.account) {
        return null;
    }

    return (
        <S.Mint className={className} onClick={mint}>
            Mint
        </S.Mint>
    );
};
