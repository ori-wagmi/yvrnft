// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./lib/ONFT721Core.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ICarNFT is IERC721 {
    function burn(uint256 _id) external;
    function mint(address _recipient, uint256 _id) external;
}

contract CarBridge is Ownable, ONFT721Core, IERC721Receiver {
    ICarNFT public CarNFT;

    constructor(address _lzEndpoint, address _carnft) ONFT721Core(_lzEndpoint) {
        CarNFT = ICarNFT(_carnft);
    }

    function _debitFrom(address _from, uint16, bytes memory, uint16[] memory _tokenIds) internal virtual override {
        require(CarNFT.isApprovedForAll(_from, address(this)), "AxoBridge: not approved");

        for (uint16 i = 0; i < _tokenIds.length; i++) {
            require(CarNFT.ownerOf(_tokenIds[i]) == _from, "AxoBridge: send caller not owner");
            CarNFT.safeTransferFrom(_from, address(this), _tokenIds[i]);
            CarNFT.burn(_tokenIds[i]);
        }
    }

    function _creditTo(uint16, address _toAddress, uint16[] memory _tokenIds) internal virtual override {
        for (uint16 i = 0; i < _tokenIds.length; i++) {
            CarNFT.mint(_toAddress, i);
        }
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external view override returns (bytes4) {
        require((msg.sender == address(CarNFT)) || (msg.sender == owner()), "AxoBridge: receive not allowed");
        return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
    }
}