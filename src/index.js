import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import GameScene from "./GameScene"

const config = {
  type: Phaser.AUTO,
  // parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [GameScene]
};

new Phaser.Game(config);
