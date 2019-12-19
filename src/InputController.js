import Constants from './Constants';

export default class InputController {
	constructor(player, scene) {
		// console.log('game: ' + game);

		//  Left
		scene.input.keyboard.on('keydown_A', (event) => {

			let tile = scene.world.layer.getTileAtWorldXY(player.x - Constants.tileSize, player.y, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				player.move(Phaser.LEFT);
			}
		});

		//  Right
		scene.input.keyboard.on('keydown_D', (event) => {

			let tile = scene.world.layer.getTileAtWorldXY(player.x + Constants.tileSize, player.y, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				player.move(Phaser.RIGHT);
			}
		});

		//  Up
		scene.input.keyboard.on('keydown_W', (event) => {

			let tile = scene.world.layer.getTileAtWorldXY(player.x, player.y - Constants.tileSize, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				player.move(Phaser.UP);
			}
		});

		//  Down
		scene.input.keyboard.on('keydown_S', (event) => {

			let tile = scene.world.layer.getTileAtWorldXY(player.x, player.y + Constants.tileSize, true);

			if (tile.index === Constants.blockedTileID) {
				//  Blocked, we can't move
			}
			else {
				player.move(Phaser.DOWN);
			}
		});
	}
}