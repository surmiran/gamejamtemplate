import Phaser from 'phaser';
import Constants from './Constants';

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'bullet');

		scene.physics.add.existing(this);
		scene.add.existing(this);

		//create random rand angle between 0 and 90 degrees
		const angle = Math.random() * (Math.PI / 2);
		//get vector for angle with length 1
		const p = new Phaser.Geom.Point(Math.cos(angle), Math.sin(angle));
		//set physics body velocity
		this.setVelocity(p.x * Constants.bulletSpeed, p.y * Constants.bulletSpeed);

		//get physics world bounds to check if bullet is out bounds to be destroyed
		this.bounds = scene.physics.world.bounds;

		scene.anims.create({
			key: 'bullet',
			frames: scene.anims.generateFrameNumbers('bullet', {start: 0, end: 5, first: 0}),
			frameRate: 10,
			repeat: -1
		});
		this.anims.play('bullet');
	}

	update(time, delta) {
		//check if bullet is out of world bounds
		if(this.x > 640 || this.y > 1280){
		// if(!this.bounds.contains(this.x, this.y)){
			this.destroy(true);
		}
	}

}