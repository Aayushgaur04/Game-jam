var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		
		this.game.load.video('bgvideo','assets/bgvideo.mp4');//loading video 
		
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('box', 'assets/box.png');
		
		this.game.load.spritesheet('player', 'assets/player.png', 24, 22, 13, -1);
		

	},

	create: function(){
		this.game.state.start("GameStart");
	}
}