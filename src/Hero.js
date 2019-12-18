import Phaser from 'phaser';
import Constants from './Constants';

export default class Hero extends Phaser.GameObjects.Image {
	constructor(world) {
		super(world.scene, Constants.tileSize * 1.5, Constants.tileSize * 1.5, 'car');
		console.log('create hero');

		//  Left
		world.scene.input.keyboard.on('keydown_A', (event) => {

			var tile = world.layer.getTileAtWorldXY(this.x - Constants.tileSize, this.y, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				this.x -= Constants.tileSize;
				this.angle = 180;
			}

		});

		//  Right
		world.scene.input.keyboard.on('keydown_D', (event) => {

			var tile = world.layer.getTileAtWorldXY(this.x + Constants.tileSize, this.y, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				this.x += Constants.tileSize;
				this.angle = 0;
			}

		});

		//  Up
		world.scene.input.keyboard.on('keydown_W', (event) => {

			var tile = world.layer.getTileAtWorldXY(this.x, this.y - Constants.tileSize, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				this.y -= Constants.tileSize;
				this.angle = -90;
			}

		});

		//  Down
		world.scene.input.keyboard.on('keydown_S', (event) => {

			var tile = world.layer.getTileAtWorldXY(this.x, this.y + Constants.tileSize, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				this.y += Constants.tileSize;
				this.angle = 90;
			}

		});
	}
}