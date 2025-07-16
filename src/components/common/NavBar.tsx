import { useEffect, useState } from 'react'
import { Rogo } from '@/assets/svg'

type NavBarProps = {
  nowPage: 'main' | 'metrics' | 'service' | 'patents' | 'partnerships'
  setNowPage: (page: 'main' | 'metrics' | 'service' | 'patents' | 'partnerships') => void
  refresh: number
  setRefresh: (refresh: number) => void
}

// 데스크탑 NavBar 컴포넌트
const DesktopNavBar = ({ nowPage, setNowPage, refresh, setRefresh }: NavBarProps) => {
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  const handleClick = (page: NavBarProps['nowPage']) => {
    setNowPage(page)
    setRefresh(refresh * -1)
  }

  return (
    <nav
      className={`fixed top-4 ${isFirstRender ? 'opacity-0' : 'opacity-100'} left-1/2 z-50 flex h-12 w-full -translate-x-1/2 items-center justify-center bg-transparent px-12 transition-opacity duration-1000 lg:w-[60vw]`}
    >
      <Rogo
        onClick={() => handleClick('main')}
        className='absolute left-12 w-8 cursor-pointer lg:left-0'
      />

      <div className='flex items-center gap-8'>
        <button onClick={() => handleClick('metrics')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-400 text-sm'>핵심 지표</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'metrics' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>

        <button onClick={() => handleClick('service')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-400 text-sm'>서비스</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'service' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>

        <button onClick={() => handleClick('patents')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-400 text-sm'>특허</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'patents' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>

        <button onClick={() => handleClick('partnerships')} className='relative cursor-pointer'>
          <span className='text-text-white font-pretendard-400 text-sm'>파트너쉽</span>
          <div
            className={`bg-text-white absolute -bottom-1 left-1/2 aspect-square w-1 -translate-x-1/2 rounded-full transition-all duration-300 ${nowPage === 'partnerships' ? 'scale-y-100' : 'scale-y-0'}`}
          />
        </button>
      </div>
    </nav>
  )
}

// 모바일 NavBar 컴포넌트
const MobileNavBar = ({ nowPage, setNowPage, refresh, setRefresh }: NavBarProps) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  const handleClick = (page: NavBarProps['nowPage']) => {
    setNowPage(page)
    setRefresh(refresh * -1)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* 모바일 네비게이션 바 */}
      <nav
        className={`fixed top-4 ${isFirstRender ? 'opacity-0' : 'opacity-100'} left-1/2 z-50 flex h-12 w-full -translate-x-1/2 items-center justify-between bg-transparent px-12 transition-opacity duration-1000`}
      >
        <Rogo onClick={() => handleClick('main')} className='w-8 cursor-pointer' />

        {/* 햄버거 메뉴 버튼 */}
        <button onClick={toggleMenu} className='flex cursor-pointer flex-col gap-1'>
          <div
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
          />
          <div
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
          />
          <div
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        className={`fixed top-16 left-1/2 z-40 w-full -translate-x-1/2 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className='flex flex-col px-6 py-4'>
          <button
            onClick={() => handleClick('metrics')}
            className='font-pretendard-400 border-b border-white/20 py-3 text-left text-sm text-white'
          >
            핵심 지표
          </button>

          <button
            onClick={() => handleClick('service')}
            className='font-pretendard-400 border-b border-white/20 py-3 text-left text-sm text-white'
          >
            서비스
          </button>

          <button
            onClick={() => handleClick('patents')}
            className='font-pretendard-400 border-b border-white/20 py-3 text-left text-sm text-white'
          >
            특허
          </button>

          <button
            onClick={() => handleClick('partnerships')}
            className={`font-pretendard-400 py-3 text-left text-sm text-white ${nowPage === 'partnerships' ? 'text-blue-400' : ''}`}
          >
            파트너쉽
          </button>
        </div>
      </div>

      {/* 메뉴 열린 상태에서 배경 클릭 시 닫기 */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-30 bg-black/20' onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  )
}

const NavBar = (props: NavBarProps) => {
  return (
    <>
      <div className='hidden lg:block'>
        <DesktopNavBar {...props} />
      </div>

      <div className='block lg:hidden'>
        <MobileNavBar {...props} />
      </div>
    </>
  )
}

export default NavBar
