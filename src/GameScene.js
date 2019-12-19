import Phaser from 'phaser';
import World from './World';
import Manager from './Manager';
import InputController from './InputController';
import Constants from './Constants';

export default class GameScene extends Phaser.Scene {

	constructor(config) {
		console.log('GameScene, config', config);
		super(config);

	}

	preload() {
		this.load.tilemapTiledJSON('map', 'src/assets/maze.json');
		this.load.image('tiles', 'src/assets/tileset.png');
		this.load.image('car', 'src/assets/car.png');

		for (let filename of Constants.audioFilesToLoad) {
			this.load.audio(filename, `src/assets/audio/${filename}.mp3`);
		}

		this.load.spritesheet('hero', 'src/assets/hero.png', {frameWidth: 32, frameHeight: 32, endFrame: 15});
	}

	init() {
		// this.physics.startSystem(Phaser.Physics.ARCADE);
	}

	create() {
		this.world = new World(this);
		this.manager = new Manager(this);

		let widthInPixel = Constants.tilesVisibleX * Constants.tileSize;
		let heightInPixel = Constants.tilesVisibleY * Constants.tileSize;
		this.cameras.main.setSize(widthInPixel, heightInPixel);

		new InputController(this.world.player, this);

		/*let backgroundMusic = this.sound.add('bier', {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		});
		backgroundMusic.play()*/
	}

}
