import { Point, Direction } from "./geometry";
import {BasicPlateau, Terrain } from "./mars";
import {readFileSync} from "fs";
import {Lander, Order} from "./lander";

export const ERROR_MISSION_NO_SUCH_FILE = "Error: no such file!";

export function doPlateauMission (filename: string):string[] {
    console.log("filename = ", filename);
    const input = readFileSync(filename, {encoding:'utf8'}).split('\r\n').map(row => row.split(" "));
    const plateau = new BasicPlateau (+input[0][0], +input[0][1]);
    const missionReport:string[] = [];

    for(let i=1; i<input.length; i+=2) {
        missionReport.push(new Lander(+input[i][0], +input[i][1], input[i][2] as Direction).missionReport(plateau, input[i+1][0]));
    }

    return missionReport; 
}

function findBestRoute( start: Point, end: Point, terrain: Terrain ){
    
}