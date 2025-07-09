import { useState } from 'react'
import LottieComponent from '@/components/common/LottieComponent'
import Star from '@/assets/lottie/Star.json'

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
      <div className='flex flex-col items-center justify-center gap-37 pt-30'>
        <header className='z-20 flex flex-col items-center justify-center gap-6'>
          <h1
            className={`flex items-center gap-20 ${isClicked ? 'text-text-white' : 'text-point-darkpurple'}`}
          >
            <span className='text-8xl font-extrabold'>D A W N</span>
            <span className='text-8xl font-extrabold'>S T R E E T</span>
          </h1>
          <h2
            className={`text-4xl font-extralight ${isClicked ? 'text-text-white/70' : 'text-text-gray'}`}
          >
            당신의 비전을 현실로 그려내는 공간
          </h2>
        </header>
        <button
          onClick={handleOnClick}
          className={`border-text-gray text-text-gray hover:bg-point-darkpurple/30 z-20 h-24 w-sm rounded-full border text-4xl font-medium transition-all duration-200 hover:text-white ${isClicked ? 'opacity-0' : 'cursor-pointer opacity-100'}`}
        >
          우리의 여정
        </button>
      </div>

      {isClicked && (
        <div className='bg-gradient-linear-sunset animate-slide-up absolute bottom-20 left-1/2 z-10 aspect-square w-2xs -translate-x-1/2 -translate-y-1/2 rounded-full' />
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
        src='./src/assets/png/city.png'
        alt='city image'
        className={`absolute bottom-12.5 z-10 w-full transition-all duration-300 ${isClicked ? 'brightness-100' : 'brightness-20'}`}
      />
      <div
        className={`absolute bottom-0 z-10 h-15 w-full transition-all duration-300 ${isClicked ? 'bg-gradient-linear' : 'bg-bg-black'}`}
      />
    </main>
  )
}

export default MainPage
