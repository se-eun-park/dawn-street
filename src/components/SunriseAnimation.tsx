import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LottieComponent from '@/components/common/LottieComponent'
import Star from '@/assets/lottie/Star.json'
import cityImage from '@/assets/png/city.png'

gsap.registerPlugin(ScrollTrigger)

const SunriseAnimation = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const sunsetRef = useRef<HTMLDivElement>(null)
  const cityRef = useRef<HTMLImageElement>(null)
  const gradientBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mainRef.current || !sunsetRef.current || !cityRef.current || !gradientBarRef.current)
      return

    const ctx = gsap.context(() => {
      // 전체 섹션 pin 설정
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: 'top 20%',
        end: 'bottom 30%',
        pin: true,
        pinSpacing: true,
      })

      // 배경 gradient
      gsap.fromTo(
        mainRef.current,
        {
          backgroundColor: '#141620',
        },
        {
          backgroundColor: '#141620',
          background:
            'linear-gradient(to top, #c991a6 0%, #966b88 20%, #614c6b 30%, #3e3956 50%, #1d212f 100%)',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 20%',
            end: 'bottom 30%',
            scrub: true,
          },
        },
      )

      // 해 위치
      gsap.fromTo(
        sunsetRef.current,
        {
          y: 130,
          opacity: 0,
        },
        {
          y: 20,
          opacity: 1,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 20%',
            end: 'bottom 30%',
            scrub: 1,
          },
        },
      )

      // 도시 이미지 brightness
      gsap.fromTo(
        cityRef.current,
        {
          filter: 'brightness(0.2)',
        },
        {
          filter: 'brightness(1)',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 20%',
            end: 'bottom 30%',
            scrub: true,
          },
        },
      )

      // 하단 gradient bar 색상
      gsap.fromTo(
        gradientBarRef.current,
        {
          background: '#09090b',
        },
        {
          background: '#2E2D3C',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top 20%',
            end: 'bottom 30%',
            scrub: true,
          },
        },
      )
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={mainRef}
      className='bg-bg-darkgray relative h-[50vh] max-h-[50vh] w-[60vw] rounded-3xl'
    >
      <div className='sticky top-0 h-full w-full'>
        <div
          ref={sunsetRef}
          className='bg-gradient-linear-sunset absolute bottom-16 left-1/2 z-10 aspect-square w-24 -translate-x-1/2 -translate-y-1/2 rounded-full sm:bottom-18 md:bottom-20'
        />

        <LottieComponent
          animationData={Star}
          speed={1}
          isPaused={false}
          isStopped={false}
          loop={true}
          init={0}
          end={100}
          className='absolute top-0 z-0 h-full w-full opacity-50'
        />

        <img
          ref={cityRef}
          src={cityImage}
          alt='city image'
          className='absolute bottom-5 z-10 w-full sm:bottom-7 md:bottom-9 lg:bottom-11 xl:bottom-13'
        />
        <div
          ref={gradientBarRef}
          className='absolute bottom-0 z-10 h-5 w-full rounded-b-3xl sm:h-7 md:h-9 lg:h-11 xl:h-13'
        />
      </div>
    </section>
  )
}

export default SunriseAnimation
