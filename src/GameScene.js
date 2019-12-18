import Phaser from 'phaser';
import World from './World';
import Manager from './Manager';

export default class GameScene extends Phaser.Scene {

	constructor(config) {
		console.log('GameScene, config', config);
		super(config);

	}

	preload() {
		this.load.tilemapTiledJSON('map', 'src/assets/maze.json');
		this.load.image('tiles', 'src/assets/tiles.png');
		this.load.image('car', 'src/assets/car.png');
	}

	init() {
		// this.physics.startSystem(Phaser.Physics.ARCADE);
	}

	create() {

		this.world = new World(this);
		this.manager = new Manager(this);
	}

}
