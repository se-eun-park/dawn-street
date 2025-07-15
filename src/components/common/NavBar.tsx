import { Rogo } from '@/assets/svg'

type NavBarProps = {
  nowPage: 'main' | 'metrics' | 'service' | 'patents' | 'partnerships'
  setNowPage: (page: 'main' | 'metrics' | 'service' | 'patents' | 'partnerships') => void
  refresh: number
  setRefresh: (refresh: number) => void
}

const NavBar = ({ nowPage, setNowPage, refresh, setRefresh }: NavBarProps) => {
  const handleClick = (page: NavBarProps['nowPage']) => {
    setNowPage(page)
    setRefresh(refresh * -1)
  }

  return (
    <nav className='fixed top-4 left-1/2 z-50 flex h-12 w-full -translate-x-1/2 items-center justify-center bg-transparent px-12 lg:w-[60vw]'>
      <Rogo
        onClick={() => handleClick('main')}
        className='absolute left-12 w-8 cursor-pointer lg:left-0'
      />

      <div className='flex items-center gap-8'>
        <button onClick={() => handleClick('metrics')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-regular text-sm'>핵심 지표</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'metrics' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>

        <button onClick={() => handleClick('service')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-regular text-sm'>서비스</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'service' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>

        <button onClick={() => handleClick('patents')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-regular text-sm'>특허</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'patents' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>

        <button onClick={() => handleClick('partnerships')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-regular text-sm'>파트너쉽</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'partnerships' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
