import Phaser from 'phaser';
import Constants from './Constants';

export default class Hero extends Phaser.GameObjects.Image {
	constructor(scene) {
		super(scene, Constants.spawnX * Constants.tileSize + Constants.tileSize / 2, Constants.spawnY * Constants.tileSize + Constants.tileSize / 2, 'car');
	}

	move(direction) {
		let angle = this.angle;
		switch (direction) {
			case Phaser.LEFT:
				this.x -= Constants.tileSize;
				angle = 180;
				break;
			case Phaser.RIGHT:
				this.x += Constants.tileSize;
				angle = 0;
				break;
			case Phaser.UP:
				this.y -= Constants.tileSize;
				angle = -90;
				break;
			case Phaser.DOWN:
				this.y += Constants.tileSize;
				angle = 90;
				break;
		}
		this.angle = angle;
	}
}