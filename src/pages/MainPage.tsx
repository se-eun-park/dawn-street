import { useEffect, useState } from 'react'
import SunriseAnimation from '@/components/SunriseAnimation'
import ScrollDown from '@/assets/svg/ScrollDown'

const MainPage = () => {
  const [isScrolled, setIsScrolled] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsScrolled(false)
    }, 2000)

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='bg-bg-black-100'>
      <section className='flex h-screen w-full flex-col items-center px-12'>
        <div className='animate-fade-in-delay-500 flex flex-col items-center'>
          <SunriseAnimation />
        </div>
        <div className='flex flex-col items-center justify-center gap-16 px-6 pt-16 sm:gap-20 sm:pt-20 md:gap-28 md:pt-24 lg:gap-32 lg:pt-28 xl:gap-37 xl:pt-30'>
          <header className='z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
            <h1 className='text-text-white 3xl:gap-20 flex flex-col items-center gap-2 sm:flex-row sm:gap-8 md:gap-12'>
              <span className='font-paperlogy-800 3xl:text-8xl text-4xl sm:text-5xl md:text-6xl'>
                D A W N
              </span>
              <span className='font-paperlogy-800 3xl:text-8xl text-4xl sm:text-5xl md:text-6xl'>
                S T R E E T
              </span>
            </h1>
            <h2 className='text-text-white/70 font-paperlogy-200 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
              당신의 비전을 현실로 그려내는 공간
            </h2>
          </header>
        </div>
      </section>

      <div className='bg-bg-black-100 h-[40vh]' />

      <ScrollDown
        className={`stroke-text-white/70 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'} fixed bottom-1/10 left-1/2 z-10 w-10 -translate-x-1/2 animate-bounce transition-opacity duration-300`}
      />
    </div>
  )
}

export default MainPage
