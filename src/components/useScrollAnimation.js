import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useScrollAnimation = (ref, options = {}) => {
  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          ...options, 
        },
      }
    )
  }, [ref, options])
}

export default useScrollAnimation
