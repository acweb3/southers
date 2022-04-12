const requiredEnvVar = (name, envVar) => {
    if (!envVar) {
        throw new Error(`Environment variable ${name} missing`);
    }

    return envVar;
};

export const config = {
    release: new Date('4/20/2022'),
    rinkebyContractAddress: requiredEnvVar(
        'contractAddress',
        process.env.REACT_APP_RINKEBY_CONTRACT_ADDRESS
    ),
};
