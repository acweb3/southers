import { useEthers, shortenAddress, useLookupAddress } from '@usedapp/core';

export const RegularContent = () => {
    const { account } = useEthers();
    const ens = useLookupAddress();

    return <>{account ? ens ?? shortenAddress(account) : 'Connect'}</>;
};
