import { useState } from 'react'
import LottieComponent from '@/components/common/LottieComponent'
import Star from '@/assets/lottie/Star.json'
import cityImage from '@/assets/png/city.png'

const MainPage = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleOnClick = () => {
    setTimeout(() => {
      setIsClicked(true)
    }, 450)
  }

  return (
    <main
      className={`relative h-screen max-h-screen w-full transition-all duration-300 ${isClicked ? 'bg-gradient-radial' : 'bg-bg-darkgray'}`}
    >
      <div className='flex flex-col items-center justify-center gap-16 px-6 pt-16 sm:gap-20 sm:pt-20 md:gap-28 md:pt-24 lg:gap-32 lg:pt-28 xl:gap-37 xl:pt-30'>
        <header className='z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
          <h1
            className={`flex flex-col items-center gap-2 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 ${isClicked ? 'text-text-white' : 'text-point-darkpurple'}`}
          >
            <span className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
              D A W N
            </span>
            <span className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
              S T R E E T
            </span>
          </h1>
          <h2
            className={`text-center text-lg font-extralight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${isClicked ? 'text-text-white/70' : 'text-text-gray'}`}
          >
            당신의 비전을 현실로 그려내는 공간
          </h2>
        </header>
        <button
          onClick={handleOnClick}
          className={`border-text-gray text-text-gray hover:bg-point-darkpurple/30 z-20 h-16 w-40 rounded-full border text-lg font-medium transition-all duration-200 hover:text-white sm:h-18 sm:w-48 sm:text-xl md:h-20 md:w-56 md:text-2xl lg:h-22 lg:w-64 lg:text-3xl xl:h-24 xl:w-xs xl:text-3xl 2xl:h-20 2xl:w-56 2xl:text-2xl ${isClicked ? 'opacity-0' : 'cursor-pointer opacity-100'}`}
        >
          우리의 여정
        </button>
      </div>

      {isClicked && (
        <div className='bg-gradient-linear-sunset animate-slide-up absolute bottom-16 left-1/2 z-10 aspect-square w-32 -translate-x-1/2 -translate-y-1/2 rounded-full sm:bottom-18 sm:w-36 md:bottom-20 md:w-40 lg:w-48 xl:w-52' />
      )}

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
        src={cityImage}
        alt='city image'
        className={`absolute bottom-10 z-10 w-full transition-all duration-300 sm:bottom-12 md:bottom-14 lg:bottom-16 xl:bottom-12.5 ${isClicked ? 'brightness-100' : 'brightness-20'}`}
      />
      <div
        className={`absolute bottom-0 z-10 h-10 w-full transition-all duration-300 sm:h-12 md:h-14 lg:h-16 xl:h-15 ${isClicked ? 'bg-gradient-linear' : 'bg-bg-black'}`}
      />
    </main>
  )
}

export default MainPage
