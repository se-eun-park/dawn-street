import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MetricsPage = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
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
    }

    if (userCountRef.current) {
      // 초기 상태 설정
      gsap.set(userCountRef.current, {
        opacity: 0,
        y: 20,
      })

      // 숫자 카운트업 애니메이션
      let obj = { count: 50 }

      gsap.to(obj, {
        count: 100,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          if (userCountRef.current) {
            userCountRef.current.textContent = Math.floor(obj.count).toString()
          }
        },
        scrollTrigger: {
          trigger: userCountRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      // 요소 자체의 페이드인 애니메이션
      gsap.to(userCountRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: userCountRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
    }

    if (roiCountRef.current) {
      // 초기 상태 설정
      gsap.set(roiCountRef.current, {
        opacity: 0,
        y: 20,
      })

      // 숫자 카운트업 애니메이션
      let obj = { count: 0 }

      gsap.to(obj, {
        count: 10,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          if (roiCountRef.current) {
            roiCountRef.current.textContent = Math.floor(obj.count).toString()
          }
        },
        scrollTrigger: {
          trigger: roiCountRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      // 요소 자체의 페이드인 애니메이션
      gsap.to(roiCountRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: roiCountRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
    }

    if (projectCountRef.current) {
      // 초기 상태 설정
      gsap.set(projectCountRef.current, {
        opacity: 0,
        y: 20,
      })

      // 숫자 카운트업 애니메이션
      let obj = { count: 0 }

      gsap.to(obj, {
        count: 10,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          if (projectCountRef.current) {
            projectCountRef.current.textContent = Math.floor(obj.count).toString()
          }
        },
        scrollTrigger: {
          trigger: projectCountRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      // 요소 자체의 페이드인 애니메이션
      gsap.to(projectCountRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectCountRef.current,
          start: 'top 80%',
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
    <section className='bg-bg-black-100 flex h-fit w-full flex-col items-center px-12 pt-24'>
      <div className='lg:w-[60vw]'>
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

        <div className='mt-24 flex items-center gap-24'>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-2'>
              <span
                ref={userCountRef}
                className='text-gradient-linear-white-purple font-paperlogy-800 text-6xl tracking-wide'
              >
                50
              </span>
              <span className='text-gradient-linear-white-purple font-paperlogy-800 text-6xl'>
                k+
              </span>
            </div>
            <span className='text-text-white font-pretendard-400 text-sm'>사용자</span>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-2'>
              <span
                ref={roiCountRef}
                className='text-gradient-linear-white-purple font-paperlogy-800 text-6xl tracking-wide'
              >
                0
              </span>
              <span className='text-gradient-linear-white-purple font-paperlogy-800 text-6xl'>
                X
              </span>
            </div>
            <span className='text-text-white font-pretendard-400 text-sm'>ROI</span>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-2'>
              <span
                ref={projectCountRef}
                className='text-gradient-linear-white-purple font-paperlogy-800 text-6xl tracking-wide'
              >
                0
              </span>
              <span className='text-gradient-linear-white-purple font-paperlogy-800 text-6xl'>
                +
              </span>
            </div>
            <span className='text-text-white font-pretendard-400 text-sm'>프로젝트</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetricsPage
