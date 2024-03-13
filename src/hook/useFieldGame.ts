import { useEffect, useMemo, useState } from "react";
import { PLAYERS } from "./useTurnGame";


const MOBILE = 640;

let TABLE_SIZE = window.innerWidth > MOBILE ? 632 : 335;
let PATITION = TABLE_SIZE / 7;
export let MARGIN = ((window.innerWidth - TABLE_SIZE) / 2);
let upperLimit = TABLE_SIZE - 20;
let lowerLimit = 0;

export interface FieldItem {
    i: number,
    j: number,
    value: PLAYERS | null | undefined,
}

const useFieldGame = (x: number) => {

    useEffect(() => {
        const update = () => {
            TABLE_SIZE = window.innerWidth > MOBILE ? 632 : 335;
            MARGIN = ((window.innerWidth - TABLE_SIZE) / 2);
            PATITION = TABLE_SIZE / 6;
            upperLimit = TABLE_SIZE - 20;
            lowerLimit = 0;
        }
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
        }
    }, [])

    const m = 7;
    const n = 6;
    const [field, setField] = useState<Array<Array<number>>>(Array(m).fill(0).map(() => Array(n).fill(null)));

    const calcColumn = () => {
        const mousePositionCorrected: number = x - MARGIN - 15;

        if (mousePositionCorrected > (1 * PATITION) - PATITION && mousePositionCorrected < (2 * PATITION) - PATITION) {
          return 0;
        }
        if (mousePositionCorrected > (2 * PATITION) - PATITION && mousePositionCorrected < (3 * PATITION) - PATITION) {
          return 1;
        }
        if (mousePositionCorrected > (3 * PATITION) - PATITION && mousePositionCorrected < (4 * PATITION) - PATITION) {
          return 2;
        }
        if (mousePositionCorrected > (4 * PATITION) - PATITION && mousePositionCorrected < (5 * PATITION) - PATITION) {
          return 3;
        }
        if (mousePositionCorrected > (5 * PATITION) - PATITION && mousePositionCorrected < (6 * PATITION) - PATITION) {
          return 4;
        }
        if (mousePositionCorrected > (6 * PATITION) - PATITION && mousePositionCorrected < (7 * PATITION) - PATITION) {
          return 5;
        }
        return 6;
      }
    
      const addItemToTheField = (player: PLAYERS) => {
        const mousePositionCorrected: number = x - MARGIN - 15;
        if (mousePositionCorrected > lowerLimit && mousePositionCorrected < upperLimit) {
          const column = calcColumn();
          for (let i = 0 ; i < n ; i++) {
            if (field[column][i] == null) {
              const copyArray = [...field];
              copyArray[column][i] = player;              
              setField(copyArray);
              return;
            }
          }
          alert('You cannot add a item there.')
        }
        return {} as FieldItem;
      }

      const userPosition = useMemo(() => {
        const mousePositionCorrected: number = x - MARGIN - 15;
        let position;
        if (mousePositionCorrected < upperLimit && mousePositionCorrected > lowerLimit) {
            position = mousePositionCorrected;
        }
        if (mousePositionCorrected > upperLimit) {
            position = upperLimit;
        }
        if (mousePositionCorrected < lowerLimit) {
            position = lowerLimit;
        }
        return position;
      }, [x]);

      return { field, addItemToTheField, userPosition};
};

export default useFieldGame;