import { useState } from "react";
import { FieldItem, PLAYERS } from "../@types/game";

const useFieldGame = () => {

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
    
      const addItemToTheField = (player: PLAYERS, column: number) => {
        const copyArray = [...field];
          const filterData = copyArray.filter((e) => e.i === column && e.value === null).sort((a, b) => a.j - b.j);
          if (filterData.length && filterData[0].value === null) {
              filterData[0].value = player;              
              setField(copyArray);
              return;
          } 
          alert('You cannot add a item there.')
        return {} as FieldItem;
      }

      return { field, addItemToTheField};
};

export default useFieldGame;