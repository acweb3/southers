import { useEthers } from '@usedapp/core';
import { RegularContent } from 'components/Connect/RegularContent';
import { BaseButton } from 'components/ui/BaseButton';

export const Connect = () => {
    const { activateBrowserWallet } = useEthers();

    return (
        <BaseButton
            onClick={() => {
                console.log('fff');
                console.log(activateBrowserWallet);
                activateBrowserWallet();
            }}
        >
            <RegularContent />
        </BaseButton>
    );
};
