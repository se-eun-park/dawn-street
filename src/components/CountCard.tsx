import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type CountCardProps = {
  countRef: RefObject<HTMLSpanElement | null>
  startCount: number
  endCount: number
  unit: string
  title: string
}

const CountCard = ({ countRef, startCount, endCount, unit, title }: CountCardProps) => {
  useEffect(() => {
    if (countRef.current) {
      // 초기 상태 설정
      gsap.set(countRef.current, {
        opacity: 0,
        y: 20,
      })

      // 숫자 카운트업 애니메이션
      let obj = { count: startCount }

      // 화면 크기에 따른 start 지점 결정
      const startPosition = window.innerWidth <= 640 ? 'top 90%' : 'top 65%'

      gsap.to(obj, {
        count: endCount,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: function () {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(obj.count).toString()
          }
        },
        scrollTrigger: {
          trigger: countRef.current,
          start: startPosition,
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      // 요소 자체의 페이드인 애니메이션
      gsap.to(countRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: countRef.current,
          start: startPosition,
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
    }

    // 클린업
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className='bg-bg-darkgray-100 flex aspect-video w-52 flex-col items-center justify-center gap-2 rounded-xl sm:w-1/3'>
      <p className='text-gradient-linear-sunset-90deg flex items-center gap-2'>
        <span
          ref={countRef}
          className='font-paperlogy-800 text-gradient-linear-sunset-90deg text-3xl tracking-wide lg:text-5xl'
        >
          {startCount}
        </span>
        <span className='font-paperlogy-800 text-3xl tracking-wide lg:text-5xl'>{unit}</span>
      </p>
      <span className='text-text-white font-pretendard-400 text-sm'>{title}</span>
    </div>
  )
}

export default CountCard
