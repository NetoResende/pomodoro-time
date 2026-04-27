import type { TaskModel } from "../models/taskModel";

export function getNextCyclesType (currentCycle: number): TaskModel['type'] {
    if( currentCycle % 8 === 0 ) return 'workLongBreakTime';
    if ( currentCycle % 2 === 0 ) return 'workBreakTime' ;
    return 'workTime';
}