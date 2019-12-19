import Constants from './Constants';

const checkTileAndMove = (tile, direction, player) => {
	if (Constants.blockedTileIDs.includes(tile.index)) {
		//  Blocked, we can't move
	} else if (Constants.victoryTileIDs.includes(tile.index)) {
		alert('victory!');
	} else if (tile.index === Constants.trapTileID) {
		alert('trap triggered?');
		player.move(direction);
	} else if (tile.index === Constants.upgradeTileID) {
		alert('upgrade triggered?');
		player.move(direction);
	} else {
		player.move(direction);
	}
};

export default class InputController {
	constructor(player, scene) {
		// console.log('game: ' + game);

		//  Left
		scene.input.keyboard.on('keydown_A', (event) => {
			let tile = scene.world.layer.getTileAtWorldXY(player.x - Constants.tileSize, player.y, true);

			checkTileAndMove(tile, Phaser.LEFT, player);

		});

		//  Right
		scene.input.keyboard.on('keydown_D', (event) => {
			let tile = scene.world.layer.getTileAtWorldXY(player.x + Constants.tileSize, player.y, true);

			checkTileAndMove(tile, Phaser.RIGHT, player);
		});

		//  Up
		scene.input.keyboard.on('keydown_W', (event) => {
			let tile = scene.world.layer.getTileAtWorldXY(player.x, player.y - Constants.tileSize, true);

			checkTileAndMove(tile, Phaser.UP, player);
		});

		//  Down
		scene.input.keyboard.on('keydown_S', (event) => {
			let tile = scene.world.layer.getTileAtWorldXY(player.x, player.y + Constants.tileSize, true);

			checkTileAndMove(tile, Phaser.DOWN, player);
		});
	}
}