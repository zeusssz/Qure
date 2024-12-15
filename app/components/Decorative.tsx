'use client'

import { useEffect, useRef } from 'react'

export function Squiggle() {
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

export function Circle() {
  return (
    <svg
      className="absolute text-green-100/20 w-[800px] h-[800px]"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
          <stop offset="100%" stopColor="rgba(5, 150, 105, 0.1)" />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="url(#circleGradient)"
      >
        <animate
          attributeName="r"
          values="75;85;75"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export function Wave() {
  return (
    <svg
      className="absolute text-green-50 w-full h-24"
      viewBox="0 0 1440 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
          <stop offset="50%" stopColor="rgba(5, 150, 105, 0.1)" />
          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
        </linearGradient>
      </defs>
      <path
        fill="url(#waveGradient)"
        d="M0,50 C150,20 350,80 600,50 C850,20 1050,80 1300,50 L1440,50 L1440,100 L0,100 Z"
      >
        <animate
          attributeName="d"
          values="M0,50 C150,20 350,80 600,50 C850,20 1050,80 1300,50 L1440,50 L1440,100 L0,100 Z;
                  M0,50 C150,80 350,20 600,50 C850,80 1050,20 1300,50 L1440,50 L1440,100 L0,100 Z;
                  M0,50 C150,20 350,80 600,50 C850,20 1050,80 1300,50 L1440,50 L1440,100 L0,100 Z"
          dur="20s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

