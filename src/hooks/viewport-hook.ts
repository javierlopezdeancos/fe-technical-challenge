import { useState, useLayoutEffect } from 'react';

const defaultOptions = {
  defaultVH: undefined,
  defaultVW: undefined,
  updateOnResize: true,
};

interface Options {
  readonly defaultVW?: number
  readonly defaultVH?: number
  readonly updateOnResize?: boolean
}

const useViewportHook = (options?: Options) => {
  const { updateOnResize, defaultVW, defaultVH } = {
    ...defaultOptions,
    ...options,
  };

  const [vw, setVW] = useState(defaultVW as number)
  const [vh, setVH] = useState(defaultVH as number)

  useLayoutEffect(() => {
    const setSizes = () => {
      if (window.innerWidth !== vw) {
        setVW(window.innerWidth);
      }

      if (window.innerHeight !== vh) {
        setVH(window.innerHeight);
      }
    };

    setSizes()

    if (updateOnResize) {
      window.addEventListener('resize', setSizes)

      return () => window.removeEventListener('resize', setSizes)
    }
  }, [updateOnResize, vh, vw])

  return { vw, vh }
};

export default useViewportHook
