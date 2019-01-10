
class PlyerChar extends Point {
    constructor(size, color) {
        super();
        this.size = size
        this.color = color
        this.angel = 0;
    }

    calc() {
        this.move();
        this.shot();
    }

    move() {
        this.x = mouse.x;
        this.y = mouse.y;
    }

    shot() {

    }
}