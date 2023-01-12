import {Box, Point} from "geometry";

type ObstacleType = "Debris" | "Cliff" | "Chasm";

class Obstacle {
    location: Point;
    type: ObstacleType;

    constructor( location: Point, type: ObstacleType ) {
        this.location = location;
        this.type = type;
    }
}



class Terrain {
    obstacles: Set<Obstacle>;
    boundingBox: Box;

    constructor( boundingBox : Box, obstacles : Obstacle[] )
    {
        this.obstacles = new Set(obstacles);
        this.boundingBox = {... boundingBox};
    }
}

class BasicPlateau extends Terrain {
    constructor ( topright: Point )
    {
        super(new Box(new Point(0,0), topright), []);
    }
}