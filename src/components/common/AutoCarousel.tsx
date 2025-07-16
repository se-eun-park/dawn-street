import Slider from 'react-slick'

type AutoCarouselProps = {
  children?: React.ReactNode
}

const AutoCarousel = ({ children }: AutoCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }

  return (
    <div className='text-text-white w-full'>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

export default AutoCarousel
