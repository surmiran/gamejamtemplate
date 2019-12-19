import Phaser from "phaser";
import GameScene from "./GameScene"
import Constants from "./Constants"

const config = {
  type: Phaser.AUTO,
  // parent: "phaser-example",
  width: Constants.tilesVisibleX * Constants.tileSize,
  height: Constants.tilesVisibleY * Constants.tileSize,
  physics: {
    default: 'arcade',
    arcade: {debug: true}
  },
  scene: [GameScene]
};

new Phaser.Game(config);
