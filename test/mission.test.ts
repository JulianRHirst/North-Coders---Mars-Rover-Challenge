import { doPlateauMission } from "../src/mission";

describe( "processOrders" , () => {
    expect( doPlateauMission("./data/input.txt")).toEqual(["1 3 N","5 1 E"]);
});