// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Gamification {
    /// Monto por jugar
    uint256 public fee;

    /// Pool de premio acumulativo
    uint256 public prizePool;

    /// Address del ganador del premio
    address public winnerAddress;

    /// Timestamp del inicio del juego
    uint32 public startTime;

    /// Duración del juego
    uint16 public duration;

    /// Puntuación más alta del juego
    uint16 public highestScore;

    /// Identificador del juego
    uint16 public gameId = 1;

    /// Flag que indica si se puede jugar
    bool public isOpen;

    /// Identifica la puntuación más alta de determinada address
    mapping(address => uint16) public highScores;

    /// Constructor que recibe la duración del juego y el fee a aplicar
    constructor(uint16 _duration, uint256 _fee) {
        duration = _duration;
        fee = _fee;
    }

    /// Check si se puede jugar
    modifier mustBeOpen() {
        require(startTime != 0 && isOpen, "El juego debe comenzar primero");
        require(block.timestamp < startTime + duration, "El juego debe comenzar primero");
        _;
    }

    /// Check si el juego debe de haber terminado
    modifier mustBeClosed() {
        require(block.timestamp > startTime + duration, "El juego debe terminar");
        _;
    }

    /// Check de periodo de gracia para que el ganador retire el premio, igual al doble de la duración declarada
    modifier gracePeriod() {
        require(
            msg.sender == winnerAddress ||
                block.timestamp > startTime + 2 * duration,
            "El periodo de gracia para el ganador todavia sigue"
        );
        _;
    }

    //Inicio del juego
    function play() public payable {
        if (startTime == 0 && !isOpen) {
            isOpen = true;
            startTime = uint32(block.timestamp);
            gameId++;
        }

        require(
            isOpen && block.timestamp < startTime + duration,
            "El juego debe comenzar primero"
        );

        require(msg.value == fee, "Solo el fee debe ser pagado");
        // Se suma el fee al pool de premio acumulativo
        prizePool += msg.value;
    }

    /// El jugador registra su highscore
    /// It checks if it needs to update game score, personal score, both or none.
    function submitScore(uint16 score) public mustBeOpen {
        // Check del highscore del jugador
        if (score > highScores[msg.sender]) {
            highScores[msg.sender] = score;
        }

        // Check del highscore del juego
        if (score > highestScore) {
            winnerAddress = msg.sender;
            highestScore = score;
        }
    }

    /// El jugador con el más alto score puede reclamar el premio
    function claim() public mustBeClosed gracePeriod {
        // Reinicio del premio antes de la transferencia
        uint256 bal = prizePool;
        prizePool = 0;

        // Envío
        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent, "Falla de envio");

        // Fin del juego
        startTime = 0;
        isOpen = false;
        highestScore = 0;
        winnerAddress = address(0);

    }
}
