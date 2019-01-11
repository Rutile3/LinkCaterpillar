
class PlyerShot extends Point {
    constructor(x, y, angle, size, color) {
        super(x, y);
        this.size = size
        this.color = color
        this.angle = angle;
        this.speed = 5;
    }

    calc() {
        this.move();
    }

    drow(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
    }

}