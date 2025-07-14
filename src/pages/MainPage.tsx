import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LottieComponent from '@/components/common/LottieComponent'
import Star from '@/assets/lottie/Star.json'
import cityImage from '@/assets/png/city.png'

gsap.registerPlugin(ScrollTrigger)

const MainPage = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const sunsetRef = useRef<HTMLDivElement>(null)
  const cityRef = useRef<HTMLImageElement>(null)
  const gradientBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      !mainRef.current ||
      !headerRef.current ||
      !sunsetRef.current ||
      !cityRef.current ||
      !gradientBarRef.current
    )
      return

    const ctx = gsap.context(() => {
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
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        },
      )

      // 헤더 텍스트 색상
      const headerSpans = headerRef.current?.querySelectorAll('span')
      if (headerSpans) {
        gsap.fromTo(
          headerSpans,
          {
            color: '#404060', // text-point-darkpurple
          },
          {
            color: '#ffffff', // text-text-white
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mainRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        )
      }

      // 부제목 색상
      const headerH2 = headerRef.current?.querySelector('h2')
      if (headerH2) {
        gsap.fromTo(
          headerH2,
          {
            color: '#5a5b62',
          },
          {
            color: 'rgba(255, 255, 255, 0.7)',
            duration: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: mainRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true,
            },
          },
        )
      }

      // 해 위치
      gsap.fromTo(
        sunsetRef.current,
        {
          y: 350,
          opacity: 0.5,
        },
        {
          y: -50,
          opacity: 1,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top top',
            end: 'bottom bottom',
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
            start: 'top top',
            end: 'bottom bottom',
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
          background: '#1d212f',
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: mainRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        },
      )
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={mainRef} className='bg-bg-darkgray relative h-[200vh] max-h-[200vh] w-full'>
      <div className='sticky top-0 h-screen w-full'>
        <div className='flex flex-col items-center justify-center gap-16 px-6 pt-16 sm:gap-20 sm:pt-20 md:gap-28 md:pt-24 lg:gap-32 lg:pt-28 xl:gap-37 xl:pt-30'>
          <header
            ref={headerRef}
            className='z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6'
          >
            <h1 className='flex flex-col items-center gap-2 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
              <span className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
                D A W N
              </span>
              <span className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
                S T R E E T
              </span>
            </h1>
            <h2 className='text-center text-lg font-extralight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
              당신의 비전을 현실로 그려내는 공간
            </h2>
          </header>
        </div>
        <div
          ref={sunsetRef}
          className='bg-gradient-linear-sunset absolute bottom-16 left-1/2 z-10 aspect-square w-28 -translate-x-1/2 -translate-y-1/2 rounded-full sm:bottom-18 md:bottom-20 md:w-36 lg:w-42 xl:w-48'
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
          className='absolute bottom-10 z-10 w-full transition-all duration-300 sm:bottom-12 md:bottom-14 lg:bottom-16 xl:bottom-12.5'
        />
        <div
          ref={gradientBarRef}
          className='absolute bottom-0 z-10 h-10 w-full transition-all duration-300 sm:h-12 md:h-14 lg:h-16 xl:h-15'
        />
      </div>
    </section>
  )
}

export default MainPage
