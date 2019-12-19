import Hero from './Hero';

export default class World {
	constructor(scene) {
		this.scene = scene;
		this.map = this.scene.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32});
		this.tileset = this.map.addTilesetImage('tiles');
		this.layer = this.map.createStaticLayer(0, this.tileset, 0, 0);

		this.player = new Hero(scene);
		this.scene.add.existing(this.player);
	}

	update(time) {
		// console.log("world updating")
	}
}