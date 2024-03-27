import { useEffect, useState } from "react";
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
    const [winner, setWinner] = useState<PLAYERS | undefined | null>(null);
    
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

    const restart = () => {
      setField(generateArray(n, m));
      setWinner(null);
    }

    useEffect(() => {
      [1, 5, 6, 7].forEach((offset) => {
        for (let i = 0; i < field.length; i++) {
          const current = field[i].value;
          const n1 = i + offset;
          const n2 = n1 + offset;
          const n3 = n2 + offset;
          if (n3 < field.length) {
            if (current !== null && current === field[n1].value && current === field[n2].value && current === field[n3].value) {
              setWinner(current);
              return;
            }
          }
        }
      });
    }, [field]);

    return { field, winner, addItemToTheField, restart};
};

export default useFieldGame;