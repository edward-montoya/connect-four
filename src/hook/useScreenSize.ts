import { useEffect, useMemo, useState } from "react";

const MOBILE = 640;

const useScreenSize = () => {
    const [boardSize, setBoardSize] = useState(window.innerWidth > MOBILE ? 632 : 335);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    const partition = useMemo(() => boardSize / 7, [boardSize]);
    const margin = useMemo(() => (window.innerHeight - boardSize) / 2, [boardSize]);
    const upperLimit = useMemo(() => boardSize - 20, [boardSize]);
    const lowerLimit = 0;
    
    useEffect(() => {
        const update = () => {
          setIsMobile(window.innerWidth < 640);
          setBoardSize(
            window.innerWidth > MOBILE ? 632 : 335
          );
        }
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
        }
    }, []);

    return { boardSize, margin, partition, upperLimit, lowerLimit, isMobile }
};

export default useScreenSize;