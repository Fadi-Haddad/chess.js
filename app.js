const gameBoard = document.querySelector("#gameboard");
const playerDiplay = document.querySelector("#player");
const infoDiplay = document.querySelector("#info-display");
const width = 8;

const startPieces = [
    rook, knight, bishop , queen , king, bishop, knight, rook,
    pawn, pawn,pawn, pawn,pawn, pawn,pawn, pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn, pawn,pawn, pawn,pawn, pawn,pawn, pawn,
    rook, knight, bishop , queen , king, bishop, knight, rook,
]