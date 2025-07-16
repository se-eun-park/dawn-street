import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountCard from '@/components/CountCard'

gsap.registerPlugin(ScrollTrigger)

const MetricsPage = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const countCardsRef = useRef<HTMLDivElement>(null)
  const userCountRef = useRef<HTMLSpanElement>(null)
  const roiCountRef = useRef<HTMLSpanElement>(null)
  const projectCountRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (headerRef.current) {
      gsap.set(headerRef.current, {
        opacity: 0,
        x: 32,
      })

      // ScrollTrigger 설정
      gsap.to(headerRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
    }

    if (descriptionRef.current) {
      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 32,
      })

      gsap.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      if (countCardsRef.current) {
        gsap.set(countCardsRef.current, {
          opacity: 0,
          x: 100,
        })

        // ScrollTrigger 설정
        gsap.to(countCardsRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: countCardsRef.current,
            start: 'top 50%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        })
      }
    }

    // 클린업
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className='bg-bg-black-100 flex h-fit w-full flex-col items-center px-12 pt-24'>
      <div className='w-full lg:max-w-[60vw]'>
        <h1 ref={headerRef} className='flex flex-col items-start gap-1'>
          <span className='text-text-white font-paperlogy-300 text-4xl'>검증된 성장</span>
          <span className='text-text-white font-paperlogy-300 text-4xl'>지속되는 혁신</span>
        </h1>
        <p ref={descriptionRef} className='mt-4'>
          <span className='text-text-white/70 font-pretendard-200 text-md'>
            블록체인과 AI 기술을 기반으로 측정 가능한 성과를 창출하며, <br />
            지속 가능한 성장을 실현하고 있습니다.
          </span>
        </p>

        <div ref={countCardsRef} className='mt-24 flex items-center justify-between gap-14'>
          <CountCard
            countRef={userCountRef}
            startCount={50}
            endCount={100}
            unit='K+'
            title='사용자'
          />

          <CountCard countRef={roiCountRef} startCount={0} endCount={10} unit='X' title='ROI' />

          <CountCard
            countRef={projectCountRef}
            startCount={0}
            endCount={10}
            unit='+'
            title='프로젝트'
          />
        </div>
      </div>
    </section>
  )
}

export default MetricsPage
