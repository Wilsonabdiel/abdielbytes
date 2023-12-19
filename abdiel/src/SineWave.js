import { useRef, useEffect } from 'react';
import SineWaveGenerator from 'sine-waves';

function SineWaves() {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const generator = new SineWaveGenerator({
        el: canvas,
        speed: 8,
        waves: [
          // ... your wave configurations ...
        ],
      });
      generator.loop();
  
      return () => generator.clear(); // clean up on unmount
    }, []);
  
    return (
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />
    );
  }
  
export default SineWaves;
