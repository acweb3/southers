const { config } = require("../config");

async function main() {
    const DecentralizedSpirit = await hre.ethers.getContractFactory(
        "DecentralizedSpirit"
    );
    const deploymentData = DecentralizedSpirit.interface.encodeDeploy([
        config.ipfsURL,
    ]);
    const estimatedGas = await ethers.provider.estimateGas({
        data: deploymentData,
    });

    const decentralizedSpirit = await DecentralizedSpirit.deploy(
        config.ipfsURL
    );

    await decentralizedSpirit.deployed();

    console.log("test deployed to:", decentralizedSpirit.address);
    console.log("estimated gas:", estimatedGas);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
