import assert from 'node:assert/strict';

export class Point {
    x: number; 
    y: number;

    constructor (x: number, y:number) {
        this.x = x;
        this.y = y;
    };

    copy() : Point {
        return new Point(this.x,this.y);
    }
}

export type Direction  = "N"|"E"|"S"|"W";

export class Pose {
    
    position: Point;
    heading: Direction;

    constructor( position: Point, heading: Direction ) {
        this.position = position.copy();
        this.heading = heading;
    }

    copy() {
        return new Pose(this.position.copy(), this.heading);
    }
}

export class Box {
    readonly min: Point;
    readonly max: Point;

    constructor( min: Point, max: Point) {
        assert(min.x<=max.x && min.y<=max.y);
        this.min = min.copy();
        this.max = max.copy();
    };

    copy() : Box {
        return new Box(this.min.copy(), this.max.copy());
    }

    contains(point: Point):boolean {
        return (
                (point.x >= this.min.x) &&
                (point.y >= this.min.y) &&
                (point.x <= this.max.x) &&
                (point.y <= this.max.y)
        );
 
    }
}