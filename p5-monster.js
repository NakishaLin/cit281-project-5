/*
    CIT 281 Project 5 extra credit
    Name: Nakisha Lin
*/

// Game monsters setup information
// 定义数据
const monsterList = [{
        monsterName: "King Kong",
        minimumLife: 10,
        currentLife: 150,
    },
    {
        monsterName: "Godzilla",
        minimumLife: 10,
        currentLife: 200,
    },
];
// Game configuration information
const minimumLifeDrain = 10;
const maximumLifeDrain = 50;
const gameDelayInMilliseconds = 5000; // 5 second game delay

// Create Monster Game instance
const monsterGame = new MonsterGame(
    monsterList,
    gameDelayInMilliseconds,
    minimumLifeDrain,
    maximumLifeDrain
);

// List monsters
//monsterGame.listMonsters();

// Start game
// console.log(monsterGame);
monsterGame.playGame();

/*
module.exports = class MonsterGame {
  constructor({
    monsterList = [],
    gameDelayInMilliseconds = 5000,
    minimumLifeDrain = 1,
    maximumLifeDrain = 30,
  }) {
    console.log("Initializing monsters...");
    this.gameDelayInMilliseconds = gameDelayInMilliseconds;
    this.minimumLifeDrain = minimumLifeDrain;
    this.maximumLifeDrain = maximumLifeDrain;
    this.createMonsters(monsterList);
    console.log("Monsters initialized, ready to play!");
  }
*/


//monsterName defined in p5.js
//const MonsterGame = require("./p5-monster-game.js");
function MonsterGame(monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain) {
    let monsters = null;
    let lifeList = [0, 0];

    let listMonsters = function(lifeList) {
        monsterList[0].currentLife -= lifeList[0]
        monsterList[1].currentLife -= lifeList[1]
        monsterList[0].Status = 'Alife'
        monsterList[1].Status = 'Alife'
        if (monsterList[0].currentLife < 0) {
            monsterList[0].Status = 'Dead'
        }
        //does monster's life = 10 dead?
        if (monsterList[1].currentLife < 0) {
            monsterList[1].Status = "Dead"
        }
        console.log(`Monster：${monsterList[0].monsterName},Minimum Life：${monsterList[0].minimumLife},CurrentLife：${monsterList[0].currentLife}，Status:${monsterList[0].Status}`);
        console.log(`Monster：${monsterList[1].monsterName},Minimum Life：${monsterList[1].minimumLife},CurrentLife：${monsterList[1].currentLife}，Status:${monsterList[1].Status}`);
    }


    //random power drain
    let randomLifeDrain = function(monster) {
        lifeList = [Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10)
        ]
        console.log(`King Kong random power drain of ${lifeList[0]}`);
        console.log(`Godzilla random power drain of ${lifeList[1]}`);
        listMonsters(lifeList);

    }

    let createMonsters = function(monsterList) {
        randomLifeDrain(monsterList)
    };

    (function(monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain) {

        console.log("Initializing monsters...");
        console.log("Monsters initialized, ready to play!");

        // monsterList = [],
        minimumLifeDrain = 10,
            maximumLifeDrain = 30,
            gameDelayInMilliseconds = 5000,


            this.gameDelayInMilliseconds = gameDelayInMilliseconds;
        this.minimumLifeDrain = minimumLifeDrain;
        this.maximumLifeDrain = maximumLifeDrain;
        createMonsters(monsterList);

    })(monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain);
    // another way of using jQuery 



    /*
    updateLife = (lifeChange = 0) =>
      this.monsters.forEach((monster) => monster.updateLife(lifeChange));
    */
    //更新生命值
    let updateLife = function(lifeChange = 0) {
        monsterList.forEach((monster) => monster.updateLife(lifeChange));
    }


    this.playGame = async function(GameDelay) {
        console.log("Starting game...");
        let monstersAreAlive = true;
        do {
            // Sleep game
            console.log(
                `Sleeping for ${gameDelayInMilliseconds} milliseconds...`
            );
            await sleep(gameDelayInMilliseconds);

            //  <=10 but >=0
            for (let i of monsterList) {
                if (i.currentLife <= i.minimumLife) {
                    console.log('All monsters have died, game over!');
                } else {
                    MonsterGame(monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain)
                }
            }

        } while (monstersAreAlive);
    }
};

/*** Utility Functions ***/
// https://www.sitepoint.com/delay-sleep-pause-wait/
// 定时函数 定时执行
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}