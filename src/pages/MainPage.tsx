import LottieComponent from '@/components/common/LottieComponent'
import Star from '@/assets/lottie/Star.json'

const MainPage = () => {
  return (
    <main className='bg-bg-darkgray h-screen max-h-screen w-full'>
      <LottieComponent
        animationData={Star}
        speed={1}
        isPaused={false}
        isStopped={false}
        loop={true}
        init={0}
        end={100}
        className='absolute z-0 h-full w-full opacity-50'
      />
      <h1 className='text-xl font-thin'>MainPage 당신의 비전을 현실로 그리는 페이지</h1>
    </main>
  )
}

export default MainPage
