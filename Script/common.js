
class Point{
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Mouse extends Point {
    constructor() {
        super();
        this.down = false;
    }
}