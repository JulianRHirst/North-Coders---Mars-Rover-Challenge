import { Pose, Point, Direction } from "./geometry";
import {Terrain} from "./geography";

export type Order = "L"|"R"|"M"|"H"

const leftTurn = {
    "N": "W" as const,
    "E": "N" as const,
    "S": "E" as const,
    "W": "S" as const
} as const;

const rightTurn = {
    "N": "E" as const,
    "E": "S" as const,
    "S": "W" as const,
    "W": "N" as const
} as const;

const moveVector = {
    ["N"]: { x: 0, y: 1 } as const,
    ["E"]: { x: 1, y: 0 } as const,
    ["S"]: { x: 0, y: -1 } as const,
    ["W"]: { x: -1, y: 0 } as const
} as const;

export class Lander {

    vehicleLeft = ():string => {
        this.pose.heading = leftTurn[this.pose.heading]
        return "";
    };
    vehicleRight = ():string => {
        this.pose.heading = rightTurn[this.pose.heading];
        return "";
    };

    vehicleForward = ():string => {
        this.pose.position.x += moveVector[this.pose.heading].x;
        this.pose.position.y += moveVector[this.pose.heading].y;
        return "";

    };
    vehicleHold = () => { return ""};

    readonly orderLookup = {
        "L": this.vehicleLeft, 
        "R": this.vehicleRight, 
        "M": this.vehicleForward,
        "H": this.vehicleHold 
    };

    pose: Pose;
    
    constructor( initialX:number, initialY:number, facing: Direction ) {
        this.pose = new Pose(new Point(initialX, initialY), facing );
    }

    missionReport(map: Terrain, orders: string):string {
   
        if (!/^[LRMH]+$/.test(orders))
            return "0 Lander Mission Aborted - Invalid Orders!";

        const orderArray = orders.split('') as Order[];

        orderArray.forEach( (order) => {
            this.orderLookup[order]();
        });
        return `${this.pose.position.x} ${this.pose.position.y} ${this.pose.heading}`;
        
    }
}