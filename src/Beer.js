import Phaser from 'phaser';
import Constants from './Constants';

export default class Beer extends Phaser.GameObjects.Sprite {
	constructor(scene, pixelX, pixelY) {
		super(scene, pixelX + 16, pixelY + 16, 'beer');

		console.log('create beer animations');

		scene.anims.create({
			key: 'beer',
			frames: scene.anims.generateFrameNumbers('beer', {start: 0, end: 7, first: 0}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.play('beer');
	}
}