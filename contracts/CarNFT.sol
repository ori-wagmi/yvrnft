// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CarNFT is ERC721{
    uint256 count;
    string uri;
    constructor() ERC721("CarNFT", "CAR") {}

    function mint() external {
        _safeMint(msg.sender, count);
        count++;
    }

    function mint10() external {
        for (uint i = 0; i < 10; ++i) {
            _safeMint(msg.sender, count);
            count++;
        }
    }

    // be careful to only use mint(_id) for tokens that have been previously burned
    function mint(address _recipient, uint256 _id) external {
        _safeMint(_recipient, _id);
    }

    function burn(uint256 _id) external {
        _burn(_id);
    }

    function setBaseUri(string memory _uri) external {
        uri = _uri;
    }

    function _baseURI() internal view override returns (string memory) {
        return uri;
    }

}
