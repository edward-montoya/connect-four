import { useEffect, useMemo, useState } from "react";
import { FieldItem, PLAYERS } from "../@types/game";


const MOBILE = 640;

let TABLE_SIZE = window.innerWidth > MOBILE ? 632 : 335;
let PATITION = TABLE_SIZE / 7;
export let MARGIN = ((window.innerWidth - TABLE_SIZE) / 2);
let upperLimit = TABLE_SIZE - 20;
let lowerLimit = 0;


const useFieldGame = (x: number) => {

    useEffect(() => {
        const update = () => {
          TABLE_SIZE = window.innerWidth > MOBILE ? 632 : 335;
          PATITION = TABLE_SIZE / 7;
          MARGIN = ((window.innerWidth - TABLE_SIZE) / 2);
          upperLimit = TABLE_SIZE - 20;
          lowerLimit = 0;
        }
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
        }
    }, []);

    const generateArray = (n: number, m: number) => {
      const arr = [];
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          arr.push({
            i, j, value: null
          } as FieldItem)
        }
      }
      return arr;
    };

    const m = 7;
    const n = 6;
    const [field, setField] = useState<FieldItem[]>(generateArray(n, m));

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
          const copyArray = [...field];
          const filterData = copyArray.filter((e) => e.i === column && e.value === null).sort((a, b) => a.j - b.j);
          if (filterData.length && filterData[0].value === null) {
              filterData[0].value = player;              
              setField(copyArray);
              return;
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