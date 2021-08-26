var Button = function(image, x, y, action) {
	this.image = image;
	this.x = x;
	this.y = y;

	this.action = action;
}

	Button.prototype.update = function() {
		
		if (buttonPressed) {
			this.action();
		}
	}

	Button.prototype.draw = function(context) {
		
		context.drawImage(this.image, this.x, this.y);
	}