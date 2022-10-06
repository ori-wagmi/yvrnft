# Omnichain NFT

This project is an implementation of an ONFT. It has been deployed to Goleri and ArbGoleri.

`!!!This currently doesn't work because LZ issue. Following up with LZ to investigate!!!`

## Contract Addresses
Goleri:
- CarNFT : 0x535e56a6179478d21Ab4b2891968f28Ab114A158
- CarBridge : 0xe942ce52fe1d81f0Ad9F12099436dF50cC68Ab42

ArbGoleri:
- CarNFT : 0xBd4a34C0a11A9F117FE05C4f400C6bA558795636
- CarBridge : 0x4168B5E682F1875fa393Fa9B5F574d81D7B64c7d

## Instructions on how to use the bridge
https://docs.google.com/document/d/1Puwv0EDX-3mz6gf-OauBcDoL5vqK5Sd9DYT9VazdRIU/edit?usp=sharing

## How to deploy locally
1. Create a .env file and add your AlchemyId and Private Key. This is read by hardhat.json
2. Run `npm install`
3. Run `npx hardhat compile`
4. Deploy the contracts with `npx hardhat deploy .\scripts\deployscript.js`

Ensure deploy script has the code you want
