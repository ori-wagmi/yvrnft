// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // const CarNFT = await hre.ethers.getContractFactory("CarNFT");
  // const carnft = await CarNFT.deploy();

  // await carnft.deployed();

  // console.log("CarNFT deployed to:", carnft.address);

  // const CarBridge = await hre.ethers.getContractFactory("CarBridge");
  // const carbridge = await CarBridge.deploy("0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab", "0xbd4a34c0a11a9f117fe05c4f400c6ba558795636");
  // await carbridge.deployed();
  // console.log("CarBridge deployed to:", carbridge.address);

  let trustedRemote = hre.ethers.utils.solidityPack(['address','address'],["0x4168B5E682F1875fa393Fa9B5F574d81D7B64c7d", "0xe942ce52fe1d81f0Ad9F12099436dF50cC68Ab42"])
  console.log(trustedRemote)

  trustedRemote = hre.ethers.utils.solidityPack(['address','address'],["0xe942ce52fe1d81f0Ad9F12099436dF50cC68Ab42", "0x4168B5E682F1875fa393Fa9B5F574d81D7B64c7d"])
  console.log(trustedRemote)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
