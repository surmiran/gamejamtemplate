import Hero from './Hero';
import Beer from './Beer';
import Constants from './Constants';

export default class World {
	constructor(scene) {
		this.scene = scene;
		this.map = this.scene.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32});
		this.tileset = this.map.addTilesetImage('tiles');
		this.layer = this.map.createStaticLayer(Constants.tilesetLayerID, this.tileset, 0, 0);

		this.player = new Hero(scene);
		this.scene.add.existing(this.player);

		//	Camera
		this.scene.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
		this.scene.cameras.main.startFollow(this.player);

		this.placeBeer(scene);
	}

	placeBeer(scene) {
		console.log('place beer', this);
		let beerCount = 0;
		let upgradeTiles = [];
		this.map.forEachTile((tile) => {
			if (tile.index === Constants.upgradeTileID) {
				upgradeTiles.push(tile);
			}
		});
		console.log('upgradeTiles', upgradeTiles);
		for (beerCount; beerCount < 3; beerCount++) {
			let upgradeTileID = Math.floor(Math.random() * upgradeTiles.length);
			let tile = upgradeTiles[upgradeTileID];
			let beer = new Beer(scene, tile.pixelX, tile.pixelY);
			console.log('beer', beer);
			this.scene.add.existing(beer);
			// todo: beer collider
		}
	}

	update(time) {
		// console.log("world updating")
	}
}