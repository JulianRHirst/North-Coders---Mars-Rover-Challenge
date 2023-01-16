import{Box, Point} from "geometry";
import assert from 'node:assert/strict';
import {clear} from "./console";

class DisplayBox {
    area: Box;
    buffer : string[][];

    constructor(area: Box, filler: string = " ") {
        assert(area && filler.length === 1);
        this.area = area.copy();
        const length:number = area.max.x - area.min.x + 1;
        const height:number = area.max.y - area.min.y + 1;
        this.buffer = Array.from({length: length}, () => Array.from({length: height}, ()=> filler))
    }

    render(clearScreen:boolean) {
        if(clearScreen)
            console.clear();

        this.buffer.forEach((row) => console.log(row.join('')));
    }

    setLocation(point:Point, fill: string) {
        this.buffer[point.y-this.area.min.y][point.x-this.area.min.x] = fill;
    }
}