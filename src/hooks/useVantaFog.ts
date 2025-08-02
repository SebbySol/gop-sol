import { useState, useEffect, useRef } from 'react';

export const useVantaFog = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaEffect) {
            const loadVanta = async () => {
                const THREE = await import('three');
                (window as any).THREE = THREE;

                const FOG = (await import('vanta/dist/vanta.fog.min')).default;

                setVantaEffect(FOG({
                    el: elementRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0xf57700,
                    midtoneColor: 0x0,
                    lowlightColor: 0x752e00,
                    baseColor: 0x480000,
                    blurFactor: 0.90,
                    speed: 2.80,
                    zoom: 0.30
                }));
            };

            loadVanta();
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return elementRef;
}; 