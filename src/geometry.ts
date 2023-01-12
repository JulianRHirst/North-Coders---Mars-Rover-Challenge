import assert from 'node:assert/strict';

export class Point {
    x: number; 
    y: number;

    constructor (x: number, y:number) {
        this.x = x;
        this.y = y;
    }
}

export class Box {
    readonly min: Point;
    readonly max: Point;

    constructor( min: Point, max: Point) {
        assert(min.x<=max.x && min.y<=max.y);
        this.min = { ...min };
        this.max = { ...max};
    };

    isWithin(point: Point):boolean {
        return (
                (point.x >= this.min.x) &&
                (point.y >= this.min.y) &&
                (point.x <= this.max.x) &&
                (point.y <= this.max.y)
        );
 
    }
}