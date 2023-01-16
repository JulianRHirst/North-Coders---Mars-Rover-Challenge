import { doPlateauMission, MISSION_ERROR } from "../src/mission";
import { GEOLOGY_ERROR } from "../src/geography";

console.log("STARTED!");

describe( "processOrders" , () => {
    test("mission.ts", () => {
        expect(doPlateauMission("./data/default.input.txt")).toEqual(["1 3 N","5 1 E"]);
        expect(doPlateauMission("./data/ooblanding1.input.txt")).toThrow(MISSION_ERROR.LANDING_OUT_OF_BOUNDS);
        expect(doPlateauMission("./data/ooblanding2.input.txt")).toThrow(MISSION_ERROR.LANDING_OUT_OF_BOUNDS);
        expect(doPlateauMission("./data/oobmove1.input.txt")).toThrow(MISSION_ERROR.MOVED_OUT_OF_BOUNDS);
        expect(doPlateauMission("./data/oobmove2.input.txt")).toThrow(MISSION_ERROR.MOVED_OUT_OF_BOUNDS);
    });
});