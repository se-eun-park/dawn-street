import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cityBannerImage from '@/assets/png/city-banner.png'

gsap.registerPlugin(ScrollTrigger)

const DesktopServicePageTitle = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (imgRef.current) {
      gsap.set(imgRef.current, {
        opacity: 0,
        y: 32,
      })

      gsap.to(imgRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      if (titleRef.current) {
        gsap.set(titleRef.current, {
          opacity: 0,
          x: 100,
        })

        // ScrollTrigger 설정
        gsap.to(titleRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        })
      }

      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
        })

        // ScrollTrigger 설정
        gsap.to(descriptionRef.current, {
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
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
    <div className='flex h-full w-[60vw] justify-between gap-4'>
      <img
        ref={imgRef}
        src={cityBannerImage}
        alt='banner image'
        className='aspect-ratio-16-8 w-[40vw] rounded-3xl object-cover'
      />

      <div className='flex flex-col justify-between py-4'>
        <p ref={titleRef} className='text-text-white font-paperlogy-300 text-md'>
          Services
        </p>

        <p ref={descriptionRef}>
          <span className='text-text-white/70 font-paperlogy-300 text-xl'>
            블록체인으로 신뢰를,
            <br /> AI로 효율을,
            <br /> 디지털로 연결을 만듭니다.
          </span>
        </p>
      </div>
    </div>
  )
}

const MobileServicePageTitle = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (imgRef.current) {
      gsap.set(imgRef.current, {
        opacity: 0,
        y: 32,
      })

      gsap.to(imgRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top 60%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      if (titleRef.current) {
        gsap.set(titleRef.current, {
          opacity: 0,
          x: 100,
        })

        // ScrollTrigger 설정
        gsap.to(titleRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        })
      }

      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, {
          opacity: 0,
        })

        // ScrollTrigger 설정
        gsap.to(descriptionRef.current, {
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 40%',
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
    <div className='flex h-full w-[60vw] flex-col justify-between gap-4'>
      <div className='flex flex-col justify-between gap-2 px-4 md:flex-row md:items-end'>
        <p ref={titleRef} className='text-text-white font-paperlogy-300 text-3xl'>
          Services
        </p>

        <p ref={descriptionRef}>
          <span className='text-text-white/70 font-paperlogy-300 text-xs md:text-sm'>
            블록체인으로 신뢰를,
            <br /> AI로 효율을,
            <br /> 디지털로 연결을 만듭니다.
          </span>
        </p>
      </div>

      <img
        ref={imgRef}
        src={cityBannerImage}
        alt='banner image'
        className='aspect-ratio-16-8 w-full rounded-3xl object-cover'
      />
    </div>
  )
}

const ServicePageTitle = () => {
  return (
    <>
      <div className='hidden xl:block'>
        <DesktopServicePageTitle />
      </div>

      <div className='block xl:hidden'>
        <MobileServicePageTitle />
      </div>
    </>
  )
}

export default ServicePageTitle
