import { 
    doPlateauMission,
    MISSION_ERROR_NO_SUCH_FILE
} from "../src/mission";

describe( "processOrders" , () => {
    expect( doPlateauMission("") ).toThrow(MISSION_ERROR_NO_SUCH_FILE);
    expect( doPlateauMission("input.txt")).toEqual(["1 3 N","5 1 E"]);
    expect( doPlateauMission("crash.inut.text"));
});