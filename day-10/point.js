const Point = function(x, y, xVel, yVel) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
}

Point.prototype.move = function() {
    this.x += this.xVel;
    this.y += this.yVel;
}

module.exports = Point;