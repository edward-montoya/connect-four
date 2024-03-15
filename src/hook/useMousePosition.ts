import { useEffect, useMemo, useState } from "react";

export interface IMousePosition {
    x: number,
    y: number,
}

const MOUSE_CORRECTION = 275;

const useMousePosition = (margin: number, partition: number, upperLimit: number, lowerLimit: number = 0) => {
    
    const [ mousePosition, setMousePosition ] = useState<IMousePosition>({ x: 0, y: 0});

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, []);

    const getColumnByMousePosition = () => {
        const mousePositionCorrected: number = mousePosition.x - margin - MOUSE_CORRECTION;

        if (mousePositionCorrected > (1 * partition) - partition && mousePositionCorrected < (2 * partition) - partition) {
          return 0;
        }
        if (mousePositionCorrected > (2 * partition) - partition && mousePositionCorrected < (3 * partition) - partition) {
          return 1;
        }
        if (mousePositionCorrected > (3 * partition) - partition && mousePositionCorrected < (4 * partition) - partition) {
          return 2;
        }
        if (mousePositionCorrected > (4 * partition) - partition && mousePositionCorrected < (5 * partition) - partition) {
          return 3;
        }
        if (mousePositionCorrected > (5 * partition) - partition && mousePositionCorrected < (6 * partition) - partition) {
          return 4;
        }
        if (mousePositionCorrected > (6 * partition) - partition && mousePositionCorrected < (7 * partition) - partition) {
          return 5;
        }
        return 6;
      }

      const userPosition = useMemo(() => {
        if (mousePosition.x) {
            const mousePositionCorrected: number = mousePosition.x - margin - MOUSE_CORRECTION;
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
        }
        return 0;
      }, [mousePosition, margin, upperLimit, lowerLimit]);

    return { mousePosition, getColumnByMousePosition, userPosition };
}

export default useMousePosition;