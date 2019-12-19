import Phaser from 'phaser';
import Constants from './Constants';

export default class Hero extends Phaser.GameObjects.Sprite {
	constructor(scene) {
		super(scene, Constants.spawnX * Constants.tileSize + Constants.tileSize / 2, Constants.spawnY * Constants.tileSize + Constants.tileSize / 2, 'hero');

		console.log('create hero animations');
		this.movementAllowed = true;

		scene.anims.create({
			key: 'down',
			frames: scene.anims.generateFrameNumbers('hero', {start: 0, end: 4, first: 0}),
			frameRate: 20,
			repeat: 3
		});
		scene.anims.create({
			key: 'right',
			frames: scene.anims.generateFrameNumbers('hero', {start: 5, end: 7, first: 5}),
			frameRate: 20,
			repeat: 3
		});
		scene.anims.create({
			key: 'left',
			frames: scene.anims.generateFrameNumbers('hero', {start: 8, end: 10, first: 8}),
			frameRate: 20,
			repeat: 3
		});
		scene.anims.create({
			key: 'up',
			frames: scene.anims.generateFrameNumbers('hero', {start: 11, end: 15, first: 11}),
			frameRate: 20,
			repeat: 3
		});
	}

	move(direction) {
		if (this.movementAllowed) {
			switch (direction) {
				case Phaser.LEFT:
					this.x -= Constants.tileSize;
					this.anims.play('left');
					break;
				case Phaser.RIGHT:
					this.x += Constants.tileSize;
					this.anims.play('right');
					break;
				case Phaser.UP:
					this.y -= Constants.tileSize;
					this.anims.play('up');
					break;
				case Phaser.DOWN:
					this.y += Constants.tileSize;
					this.anims.play('down');
					break;
			}
			this.movementAllowed = false;
			setTimeout(() => {
				this.movementAllowed = true;
			}, Constants.debounceMovementInMs);
		}
	}
}