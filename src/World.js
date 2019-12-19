import Hero from './Hero';
import Heinz from './Heinz';
import Beer from './Beer';
import Constants from './Constants';
import Bullet from './Bullet';

export default class World {
	constructor(scene) {
		this.scene = scene;
		this.map = this.scene.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32});
		this.tileset = this.map.addTilesetImage('tiles');
		this.layer = this.map.createStaticLayer(Constants.tilesetLayerID, this.tileset, 0, 0);

		//create group for bullets
		const bullets = scene.add.group({
			runChildUpdate: true
		});
		//create group for beers
		this.beerGroup = scene.add.group({
			runChildUpdate: true
		});

		this.player = new Hero(scene);
		this.scene.add.existing(this.player);
		this.scene.physics.add.existing(this.player);

		//create Heinz (Boss)
		this.heinz = new Heinz(scene, bullets);
		this.scene.add.existing(this.heinz);

		//create collision listener for bullets hitting player
		scene.physics.add.overlap(this.player, bullets, (object1, object2) => {
			//find bullet object
			let bullet = bullets.contains(object1) ? object1 : object2;
			//hit player with bullet
			this.player.hit(bullet);
			//destroy bullet after player was hit
			bullet.destroy(true);
		});
		//create collision listener for beers
		scene.physics.add.overlap(this.player, this.beerGroup, (object1, object2) => {
			//find bullet object
			let beer = this.beerGroup.contains(object1) ? object1 : object2;
			//hit player with bullet
			this.player.powerUp(beer);
			//destroy bullet after player was hit
			beer.destroy(true);
		});

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
			this.beerGroup.add(beer);
			// todo: beer collider
		}
	}

	update(time, delta) {
		this.heinz.updateCustom(time, delta);
	}
}