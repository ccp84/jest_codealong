/**
 * @jest-environment jsdom
 */

const {game, newGame, showScore, addTurn} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect('score' in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect('currentGame' in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect('playerMoves' in game).toBe(true);
    });
    test("choices key exists", () => {
        expect('choices' in game).toBe(true);
    });
    test("choices array contains correct values", () => {
        expect(game.choices).toEqual(['button1', 'button2', 'button3', 'button4']);
    });
});

describe("newGame works correctly", () => {
    beforeAll(()=> {
        game.score = 10;
        game.currentGame = ['not blank'];
        game.playerMoves = ['not blank'];
        document.getElementById('score').innerText="50";
        newGame();
    });
    test("newGame sets score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("there should be 1 element in currentGame array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("newGame clears playerMoves array", () => {
        expect(game.playerMoves).toEqual([]);
    });
    test("score displayed is reset to 0", () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});