import SunriseAnimation from '@/components/SunriseAnimation'

const MainPage = () => {
  return (
    <div className='bg-bg-black-100'>
      <section className='flex h-screen w-full flex-col items-center px-12'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <div className='flex flex-col items-center justify-center gap-16 px-6 pt-16 sm:gap-20 sm:pt-20 md:gap-28 md:pt-24 lg:gap-32 lg:pt-28 xl:gap-37 xl:pt-30'>
            <header className='z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
              <h1 className='text-text-white flex flex-col items-center gap-2 sm:flex-row sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
                <span className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
                  D A W N
                </span>
                <span className='text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
                  S T R E E T
                </span>
              </h1>
              <h2 className='text-text-white/70 text-center text-lg font-extralight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                당신의 비전을 현실로 그려내는 공간
              </h2>
            </header>
          </div>
          <SunriseAnimation />
        </div>
      </section>

      <div className='bg-bg-black-100 h-[40vh]' />
    </div>
  )
}

export default MainPage
