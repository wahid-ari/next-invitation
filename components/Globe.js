import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Globe({ width, height, ...props }) {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 10000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0, 0.8, 0],
      glowColor: [0.2, 0.2, 0.2],
      markers: [
        // longitude latitude
        { location: [-7.2677389, 112.7443089], size: 0.09 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <canvas {...props} ref={canvasRef} style={{ width: width, height: height, maxWidth: '100%', aspectRatio: 1 }} />
  );
}
