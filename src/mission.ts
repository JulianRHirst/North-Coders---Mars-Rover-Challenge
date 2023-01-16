import { Point, Direction } from "./geometry";
import {BasicPlateau, Terrain } from "./geography";
import {readFileSync} from "fs";
import {Lander, Order} from "./lander";

export const MISSION_ERROR = {
    NO_SUCH_FILE: "Error: no such file!",
    LANDING_OUT_OF_BOUNDS: "Landing Site Out Of Bounds!",
    MOVED_OUT_OF_BOUNDS: "Lander Moved Out of Bounds"
};


export function doPlateauMission (filename: string):string[] {
    console.log("filename = ", filename);
    const input = readFileSync(filename, {encoding:'utf8'}).split('\r\n').map(row => row.split(" "));

    const plateau = new BasicPlateau (+input[0][0], +input[0][1]);

    const missionReport:string[] = [];
    for(let i=1; i<input.length; i+=2) {

        console.log(+input[i][0], +input[i][1]);
        if( !plateau.boundingBox.containsXY(+input[i][0], +input[i][1])) throw new Error(MISSION_ERROR.LANDING_OUT_OF_BOUNDS);

        const lander = new Lander(+input[i][0], +input[i][1], input[i][2] as Direction);
        missionReport.push(lander.missionReport(plateau, input[i+1][0]));

        if(!plateau.boundingBox.contains(lander.pose.position)) throw new Error (MISSION_ERROR.MOVED_OUT_OF_BOUNDS);

    }

    return missionReport; 
}

function findBestRoute( start: Point, end: Point, terrain: Terrain ){
    
}