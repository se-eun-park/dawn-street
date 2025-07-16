import { useState, useRef } from 'react'

type ServiceDropDownProps = {
  idx: string
  title: string
  children: React.ReactNode
}

const ServiceDropDown = ({ idx, title, children }: ServiceDropDownProps) => {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setIsOpen(false)

    setIsHover(true)
    setTimeout(() => {
      setIsOpen(true)
    }, 300)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
    setIsOpen(false)
  }

  return (
    <div
      ref={dropdownRef}
      className={`border-border-gray relative flex h-fit w-full cursor-pointer flex-col border-b px-4 transition-all duration-300 xl:px-12 2xl:px-16 ${isHover ? 'pt-6 pb-52 xl:pt-10 xl:pb-64 2xl:pt-12 2xl:pb-72' : 'py-6 xl:py-10 2xl:py-12'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex items-center gap-4 xl:gap-12 2xl:gap-16'>
        <span className='text-text-white/70 font-pretendard-200 text-xs xl:text-sm 2xl:text-lg'>
          {idx}
        </span>
        <span className='text-text-white font-pretendard-200 text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl'>
          {title}
        </span>
      </div>

      {isHover && (
        <div
          className={`absolute top-36 flex gap-12 transition-all duration-300 ease-in ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default ServiceDropDown
