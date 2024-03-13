import { useEffect, useState } from "react";

export interface IMousePosition {
    x: number,
    y: number,
}

const useMousePosition: () => IMousePosition = () => {
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
    return mousePosition;
}

export default useMousePosition;