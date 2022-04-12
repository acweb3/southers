import { useEthers } from '@usedapp/core';
import { useChainConfig } from 'common/hooks/useChainConfig';
import { utils, Contract } from 'ethers';

export const useMint = ({ tokenId }) => {
    const { contract } = useChainConfig();
    const { library } = useEthers();

    const mint = async () => {
        const signer = library.getSigner();
        const mintContract = new Contract(
            contract.address,
            contract.interface,
            signer
        );
        await mintContract.mint(tokenId, {
            value: utils.parseEther('0.02'),
        });
    };

    return {
        mint,
    };
};
