'use client'

import { useEffect, useRef } from 'react'

export function SquigglyLines() {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = ref.current
    if (svg) {
      const animate = () => {
        const t = Date.now() / 1000
        const points = svg.querySelectorAll('path')
        points.forEach((point, i) => {
          const y = Math.sin(t + i * 0.5) * 10
          point.setAttribute('d', `M0,${100 + y} Q50,${80 + y} 100,${100 + y} T200,${100 + y}`)
        })
        requestAnimationFrame(animate)
      }
      animate()
    }
  }, [])

  return (
    <svg
      ref={ref}
      className="absolute text-green-200/30 w-96 h-96"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(10)].map((_, i) => (
        <path
          key={i}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          d={`M0,100 Q50,${80 + i * 4} 100,100 T200,100`}
        />
      ))}
    </svg>
  )
}

