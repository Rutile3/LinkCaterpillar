
class PlyerChar extends Point {
    constructor(size, color) {
        super();
        this.size = size
        this.color = color
        this.angle = Math.PI * 3.0 / 2.0;
    }

    calc() {
        this.move();
        this.shot();
    }

    drow() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    move() {
        let move_x = mouse.x - this.x;
        let move_y = mouse.y - this.y;
        if (move_x !== 0 || move_y !== 0){
            this.angle = Math.atan2(move_y, move_x);
        }
        this.x = mouse.x;
        this.y = mouse.y;
    }

    shot() {
        if (mouse.down) {
            player_shots.push(new PlyerShot(this.x, this.y, this.angle, 5, 'rgba(144, 255, 255, 0.75)'))
        }
    }
}