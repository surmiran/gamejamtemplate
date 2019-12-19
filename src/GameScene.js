import Phaser from 'phaser';
import World from './World';
import Manager from './Manager';
import InputController from './InputController';

export default class GameScene extends Phaser.Scene {

	constructor(config) {
		console.log('GameScene, config', config);
		super(config);

	}

	preload() {
		this.load.tilemapTiledJSON('map', 'src/assets/maze.json');
		this.load.image('tiles', 'src/assets/tiles.png');
		this.load.image('car', 'src/assets/car.png');

		this.load.spritesheet('hero', 'src/assets/hero.png', { frameWidth: 32, frameHeight: 32, endFrame: 15 });
	}

	init() {
		// this.physics.startSystem(Phaser.Physics.ARCADE);
	}

	create() {

		this.world = new World(this);
		this.manager = new Manager(this);

		new InputController(this.world.player, this);
	}

}
