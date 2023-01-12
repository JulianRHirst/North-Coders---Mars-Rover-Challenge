import {Box, Point} from "geometry";

type ObstacleType = "Debris" | "Cliff" | "Chasm";

export class Obstacle {

    x: number;
    y: number;
    type: ObstacleType;

    constructor( location: Point, type: ObstacleType ) {
        this.x = location.x;
        this.y = location.y;
        this.type = type;
    }
}

export class Terrain {
    obstacles: Set<Obstacle>;
    boundingBox: Box;

    constructor( boundingBox : Box, obstacles : Obstacle[] )
    {
        this.obstacles = new Set(obstacles);
        this.boundingBox = boundingBox.copy();
    }

    addObstacle( location:Point, type: ObstacleType): boolean {
        return false;
    }
}

export class BasicPlateau extends Terrain {
    constructor ( topright: Point )
    {
        super(new Box(new Point(0,0), topright), []);
    }
}