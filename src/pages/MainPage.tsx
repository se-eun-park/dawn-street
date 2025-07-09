import LottieComponent from '@/components/common/LottieComponent'
import Star from '@/assets/lottie/Star.json'

const MainPage = () => {
  return (
    <main className='bg-bg-darkgray relative h-screen max-h-screen w-full'>
      <div className='flex flex-col items-center justify-center gap-37 pt-30'>
        <header className='z-20 flex flex-col items-center justify-center gap-6'>
          <h1 className='flex items-center gap-20'>
            <span className='text-point-darkpurple text-8xl font-extrabold'>D A W N</span>
            <span className='text-point-darkpurple text-8xl font-extrabold'>S T R E E T</span>
          </h1>
          <h2 className='text-text-gray text-4xl font-extralight'>
            당신의 비전을 현실로 그려내는 공간
          </h2>
        </header>
        <button className='border-text-gray text-text-gray hover:bg-point-darkpurple/30 z-20 h-24 w-sm cursor-pointer rounded-full border text-4xl font-medium transition-all duration-200 hover:text-white'>
          우리의 여정
        </button>
      </div>

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
        className='absolute bottom-12.5 z-10 w-full brightness-20'
      />
      <div className='bg-bg-black absolute bottom-0 z-10 h-12.5 w-full' />
    </main>
  )
}

export default MainPage
