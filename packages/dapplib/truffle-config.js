require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift renew pizza evil hope glimpse flip genuine'; 
let testAccounts = [
"0x50ed97e9438774b66d636640ca777584aecafdb952e944df50849cd1ae6eaa85",
"0x4f81fda13e02e4fa9f5c88bb35b58764aed65d3ec34d6bf71343bf9636bf2b4d",
"0x2147840cd733cf9b9e0905d376228c194e4399cf0870ed27f474afb00958985d",
"0x412cd33341d19906bfd9b6f6298c28388774863277d04365fce2f61e91691362",
"0xaf6a4f632295f0e6e6c92c3e6f55246e5cfdc3fc8aaf921f22780f670efed1b8",
"0x4c2aee593118b733b048c295aa7ae6ff3008dd218b4d6e3e6bb7138fd880e141",
"0x91e6e219f7c1cd0dceeebb1d0bc183a5a04aefcfd4f55ebeb754d2b4d0ec756d",
"0x610e248f3a55179e9aae1d64865e2f069317e8fe1b69e4a221d9e0ee7957d588",
"0x5651d4dc7b5494e3cdd2ebbccc70edcbaa382c853d4d11df5a65ca9fe452e88a",
"0x8a1df8299b24b97e765d364560e150255aa28b1312f2359cec84314c494c788d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

