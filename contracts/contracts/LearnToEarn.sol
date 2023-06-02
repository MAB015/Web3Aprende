// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract LearningPlatform {
    struct Unit {
        string title;
        bool isCompleted;
        uint256 reward;
    }

    mapping(uint256 => Unit) public units;
    uint256 public unitCount;

    mapping(address => uint256) public rewards;

    event UnitCompleted(uint256 unitId, address learner);

    function addUnit(string memory _title, uint256 _reward) public {
        unitCount++;
        units[unitCount] = Unit(_title, false, _reward);
    }

    function completeUnit(uint256 _unitId) public {
        require(_unitId > 0 && _unitId <= unitCount, "Invalid unit ID");
        require(!units[_unitId].isCompleted, "Unit already completed");

        units[_unitId].isCompleted = true;
        rewards[msg.sender] += units[_unitId].reward;

        emit UnitCompleted(_unitId, msg.sender);
    }

    function claimReward() public {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards to claim");

        rewards[msg.sender] = 0;

        // Transferir la recompensa al usuario
        payable(msg.sender).transfer(reward);
    }
}