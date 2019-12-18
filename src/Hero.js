import Phaser from 'phaser';

export default class Hero extends Phaser.GameObjects.Image {
	constructor(scene) {
		super(scene, 32 + 16, 32 + 16, 'car');
		console.log('create hero');

		//  Left
		scene.input.keyboard.on('keydown_A', (event) => {

			var tile = scene.layer.getTileAtWorldXY(this.x - 32, this.y, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				this.x -= 32;
				this.angle = 180;
			}

		});

		//  Right
		scene.input.keyboard.on('keydown_D', (event) => {

			var tile = scene.layer.getTileAtWorldXY(this.x + 32, this.y, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				this.x += 32;
				this.angle = 0;
			}

		});

		//  Up
		scene.input.keyboard.on('keydown_W', (event) => {

			var tile = scene.layer.getTileAtWorldXY(this.x, this.y - 32, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				this.y -= 32;
				this.angle = -90;
			}

		});

		//  Down
		scene.input.keyboard.on('keydown_S', (event) => {

			var tile = scene.layer.getTileAtWorldXY(this.x, this.y + 32, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				this.y += 32;
				this.angle = 90;
			}

		});
	}

	create() {

	}
}