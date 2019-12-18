import Phaser from 'phaser';
import Hero from './Hero.js';
import logoImg from './assets/logo.png';

export default class GameScene extends Phaser.Scene {

	constructor(config) {
		super(config);
		console.log('GameScene, config: ' + config);

		this.map = null;
		this.layer = null;
		this.car = null;

		this.safetile = 1;
		this.gridsize = 32;

		this.speed = 150;
		this.threshold = 3;
		this.turnSpeed = 150;

		this.marker = new Phaser.Geom.Point();
		this.turnPoint = new Phaser.Geom.Point();

		this.directions = [null, null, null, null, null];
		this.opposites = [Phaser.NONE, Phaser.RIGHT, Phaser.LEFT, Phaser.DOWN, Phaser.UP];

		this.current = Phaser.UP;
		this.turning = Phaser.NONE;

	}

	preload() {
		//this.load.image('logo', logoImg);

		this.load.tilemapTiledJSON('map', 'src/assets/maze.json');
		// this.load.tilemapTiledJSON('map', 'assets/maze.json', null, Phaser.Tilemaps.t.TILED_JSON);
		this.load.image('tiles', 'src/assets/tiles.png');
		this.load.image('car', 'src/assets/car.png');
	}

	init() {
		// this.physics.startSystem(Phaser.Physics.ARCADE);
	}

	create() {
		this.map = this.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32});
		this.tileset = this.map.addTilesetImage('tiles');
		this.layer = this.map.createStaticLayer(0, this.tileset, 0, 0);

		this.player = new Hero(this);
		this.add.existing(this.player);
		/*
		var player = this.add.image(32 + 16, 32 + 16, 'car');

		//  Left
		this.input.keyboard.on('keydown_A', function (event) {

			var tile = layer.getTileAtWorldXY(player.x - 32, player.y, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				player.x -= 32;
				player.angle = 180;
			}

		});

		//  Right
		this.input.keyboard.on('keydown_D', function (event) {

			var tile = layer.getTileAtWorldXY(player.x + 32, player.y, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				player.x += 32;
				player.angle = 0;
			}

		});

		//  Up
		this.input.keyboard.on('keydown_W', function (event) {

			var tile = layer.getTileAtWorldXY(player.x, player.y - 32, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				player.y -= 32;
				player.angle = -90;
			}

		});

		//  Down
		this.input.keyboard.on('keydown_S', function (event) {

			var tile = layer.getTileAtWorldXY(player.x, player.y + 32, true);

			if (tile.index === 20) {
				//  Blocked, we can't move
			}
			else {
				player.y += 32;
				player.angle = 90;
			}

		});*/

		/*this.map = this.make.tilemap({key: 'map'});
		let tileset = this.map.addTilesetImage('tiles');
		this.layer = this.map.createStaticLayer(0, tileset, 0, 0);

		this.map.setCollision(20, true, this.layer);
		// this.car = this.add.sprite(48, 48, 'car');
		this.car = this.physics.add.image(48, 48, 'car');
		this.physics.add.collider(this.car, this.layer);
		// this.car.anchor.x = 0.5;
		this.car.originX = 0.5;
		// this.car.anchor.y = 0.5;
		this.car.originY = 0.5;
		// this.physics.arcade.enable(this.car);
		this.cursors = this.input.keyboard.createCursorKeys();
		this.move(Phaser.DOWN);
	*/
	}

	/*move(direction) {
		let speed = this.speed;

		if (direction === Phaser.LEFT || direction === Phaser.UP) {
			speed = -speed;
		}

		if (direction === Phaser.LEFT || direction === Phaser.RIGHT) {
			this.car.body.velocity.x = speed;
		}
		else {
			this.car.body.velocity.y = speed;
		}

		// this.tween.add(this.car).to( { angle: this.getAngle(direction) }, this.turnSpeed, "Linear", true);

		this.tweens.add({
			targets: this.car,
			angle: this.getAngle(direction),
			duration: this.turnSpeed,
			ease: 'Linear'
		});

		this.current = direction;
	}

	getAngle(to) {
		//  About-face?
		if (this.current === this.opposites[to]) {
			return '180';
		}

		if ((this.current === Phaser.UP && to === Phaser.LEFT) ||
			(this.current === Phaser.DOWN && to === Phaser.RIGHT) ||
			(this.current === Phaser.LEFT && to === Phaser.DOWN) ||
			(this.current === Phaser.RIGHT && to === Phaser.UP)) {
			return '-90';
		}

		return '90';
	}

	checkKeys() {
		if (this.cursors.left.isDown && this.current !== Phaser.LEFT) {
			this.checkDirection(Phaser.LEFT);
		}
		else if (this.cursors.right.isDown && this.current !== Phaser.RIGHT) {
			this.checkDirection(Phaser.RIGHT);
		}
		else if (this.cursors.up.isDown && this.current !== Phaser.UP) {
			this.checkDirection(Phaser.UP);
		}
		else if (this.cursors.down.isDown && this.current !== Phaser.DOWN) {
			this.checkDirection(Phaser.DOWN);
		}
		else {
			//  This forces them to hold the key down to turn the corner
			this.turning = Phaser.NONE;
		}
	}

	checkDirection(turnTo) {
		if (this.turning === turnTo || this.directions[turnTo] === null || this.directions[turnTo].index !== this.safetile) {
			//  Invalid direction if they're already set to turn that way
			//  Or there is no tile there, or the tile isn't index a floor tile
			return;
		}

		//  Check if they want to turn around and can
		if (this.current === this.opposites[turnTo]) {
			this.move(turnTo);
		}
		else {
			this.turning = turnTo;

			this.turnPoint.x = (this.marker.x * this.gridsize) + (this.gridsize / 2);
			this.turnPoint.y = (this.marker.y * this.gridsize) + (this.gridsize / 2);
		}
	}*/

	/*turn() {
		let cx = Math.floor(this.car.x);
		let cy = Math.floor(this.car.y);
		//  This needs a threshold, because at high speeds you can't turn because the coordinates skip past
		if (!Phaser.Math.Fuzzy.Equal(cx, this.turnPoint.x, this.threshold) || !Phaser.Math.Fuzzy.Equal(cy, this.turnPoint.y, this.threshold)) {
			return false;
		}
		this.car.x = this.turnPoint.x;
		this.car.y = this.turnPoint.y;
		this.car.body.reset(this.turnPoint.x, this.turnPoint.y);
		this.move(this.turning);
		this.turning = Phaser.NONE;
		return true;
	}*/

	/*update(time) {
		// console.log('update ' + time);
		// this.physics.arcade.collide(this.car, this.layer);

		// this.marker.x = this.math.snapToFloor(Math.floor(this.car.x), this.gridsize) / this.gridsize;
		this.marker.x = this.layer.worldToTileX(this.car.x, true);
		this.marker.y = this.layer.worldToTileY(this.car.y, true);
		// this.marker.y = this.math.snapToFloor(Math.floor(this.car.y), this.gridsize) / this.gridsize;

		//  Update our grid sensors
		this.directions[Phaser.LEFT] = this.layer.getTileAt(this.marker.x - 1, this.marker.y);//left
		this.directions[Phaser.RIGHT] = this.layer.getTileAt(this.marker.x + 1, this.marker.y);//right
		this.directions[Phaser.UP] = this.layer.getTileAt(this.marker.x, this.marker.y - 1);//above
		this.directions[Phaser.DOWN] = this.layer.getTileAt(this.marker.x, this.marker.y + 1);//below

		this.checkKeys();

		if (this.turning !== Phaser.NONE) {
			this.turn();
		}

	}*/

}
