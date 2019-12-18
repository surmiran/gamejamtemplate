import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import GameScene from "./GameScene"

const config = {
  type: Phaser.AUTO,
  // parent: "phaser-example",
  width: 640,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {debug: true}
  },
  scene: [GameScene]
};

new Phaser.Game(config);
