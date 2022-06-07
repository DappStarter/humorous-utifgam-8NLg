require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind purse harvest creek success sustain'; 
let testAccounts = [
"0x34afa87c82f2ac958a3d5cdf0c4df46a98bf2e5d9fddf52c8ca0d6b0bb4ba3b3",
"0x790d821ecc89160d2d5d7478626a89c02cf2ed81dac5ea4f3628e1ef42a5b60f",
"0x74a5f2fac690366017feb7e94d21c97990656e199f70592950cb9b7a3476c390",
"0x95fef4ab7a1391ccad699b197b8d0c3c81996d7dea76f54e3855f335a1f0baab",
"0xbbf742294d61068ef4f0bbba0850c78677332a8419c5feff89f26ccbf5faacc6",
"0x2ad7f44995538739de0f6221a09e0ff35ea42715490d9c6dec10e2a3da2f83e3",
"0xb6da1346fa1276469dae9bd0e216239567e28e3c806e93085232d5c0fdfff41b",
"0x28af1bbb0a276fa433dd9321278b7d02a99c2ae22678437d5bbe3231cf4ec5ab",
"0xf7d732195e9df32ccf8581f0ce2a735b1909cb5e6494bea96fa1adec6c09af8a",
"0x75c14023a5979f1738e2518b10d4860841982c8b5540fde2ad70fb41ab81a755"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

