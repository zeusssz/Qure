'use client'

import { useEffect, useRef } from 'react'

export function SquigglyLines() {
  const leftRef = useRef<SVGSVGElement>(null)
  const rightRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const animate = (svg: SVGSVGElement | null, direction: 1 | -1) => {
      if (svg) {
        const path = svg.querySelector('path')
        if (path) {
          let progress = 0
          const animatePath = () => {
            progress += 0.005
            const y = Math.sin(progress) * 20
            path.setAttribute('d', `M${direction === 1 ? 0 : 100},0 Q${direction === 1 ? 20 : 80},${500 + y} ${direction === 1 ? 0 : 100},1000`)
            requestAnimationFrame(animatePath)
          }
          animatePath()
        }
      }
    }

    animate(leftRef.current, 1)
    animate(rightRef.current, -1)
  }, [])

  return (
    <>
      <svg ref={leftRef} className="absolute left-0 top-0 h-full w-20 text-green-100" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <path d="M0,0 Q20,500 0,1000" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <svg ref={rightRef} className="absolute right-0 top-0 h-full w-20 text-green-100" viewBox="0 0 100 1000" preserveAspectRatio="none">
        <path d="M100,0 Q80,500 100,1000" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </>
  )
}

