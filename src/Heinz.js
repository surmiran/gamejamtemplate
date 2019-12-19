import Phaser from 'phaser';
import Constants from './Constants';
import Bullet from "./Bullet";

export default class Heinz extends Phaser.GameObjects.Sprite {
	constructor(scene, bulletGroup) {
		super(scene, Constants.heinzX * Constants.tileSize + Constants.tileSize / 2, Constants.heinzY * Constants.tileSize + Constants.tileSize / 2, 'heinz');
		this.timePast = 0;
		this.scene = scene;
		this.bulletGroup = bulletGroup;

		scene.anims.create({
			key: 'heinz',
			frames: scene.anims.generateFrameNumbers('heinz', {start: 0, end: 7, first: 0}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.play('heinz');
	}

	shoot(){
		//create bullet and add it to bulletGroup to make it collide with Hero
		let bullet = new Bullet(this.scene, this.x, this.y);
		this.bulletGroup.add(bullet);
	}

	updateCustom(time, delta) {
		//accumulate passed time
		this.timePast += delta;
		if (this.timePast > Constants.bulletInterval) {
			//call shoot after interval
			this.shoot();
			this.timePast -= Constants.bulletInterval;
		}
	}

}