import { useEffect, useRef, useState } from 'react';

export type HoverPose = 'idle' | 'walk' | 'jump';

// Mascot reacts to the pointer: walks on hover, jumps on click, then settles back to idle.
export const usePenkoPose = () => {
  const [pose, setPose] = useState<HoverPose>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handlers = {
    onMouseEnter: () => setPose('walk'),
    onMouseLeave: () => setPose('idle'),
    onClick: () => {
      setPose('jump');
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setPose('idle'), 600);
    },
  };

  return { pose, handlers };
};
