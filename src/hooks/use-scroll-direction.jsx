import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollDirection({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}


export default function useScrollDirection({effect, deps, element, useWindow, wait}) {
  const position = useRef(getScrollDirection({ useWindow }))

  let throttleTimeout = useRef(null)

  const callBack = () => {
    const currPos = getScrollDirection({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })
}
