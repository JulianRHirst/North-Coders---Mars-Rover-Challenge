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
export const isDirection = (str: string) => /^[NEWS]$/.test(str);

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
      
        if (min.x > max.y) {
            const temp = min.x;
            min.x = max.x;
            max.x =- temp;
        }
        
        if (min.y > max.y) {
            const temp = min.y;
            min.y = max.y;
            max.y =- temp;
        }
        
        this.max = max.copy();
        this.min = min.copy();
    };

    copy() : Box {
        return new Box(this.min.copy(), this.max.copy());
    }


    containsXY(x: number, y:number):boolean {
        return (
            (x >= this.min.x) &&
            (y >= this.min.y) &&
            (x <= this.max.x) &&
            (y <= this.max.y)
        );

    };

    contains(point: Point):boolean {
        return (
            (point.x >= this.min.x) &&
            (point.y >= this.min.y) &&
            (point.x <= this.max.x) &&
            (point.y <= this.max.y)
        );
    }
}