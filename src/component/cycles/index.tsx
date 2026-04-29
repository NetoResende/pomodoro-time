import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { getNextCycles } from "../../utils/getNextcycles";
import { getNextCyclesType } from "../../utils/getNextCyclesType";

import styles from "./Cycles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
   const cycleDescriptionMap = {
    workTime: "foco",
    workBreakTime: "descanso curto",
    workLongBreakTime: "descanco longo"
   }

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycles(index);
          const nextCycleType = getNextCyclesType(nextCycle);
          return (
            <span
             key={`${nextCycleType}_${nextCycle}`}
             className={`${styles.cycleDot} ${styles[nextCycleType]}`}
             area-label={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
             title={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
