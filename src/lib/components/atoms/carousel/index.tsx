import { Carousel as MTCarousel } from '@material-tailwind/react'

export type CarouselSlide = {
  slideUrl: string
  altText: string
}

export type CarouselProps = {
  placeholder: string
  slides: CarouselSlide[]
  maxWidth?: string
  maxHeight?: string
}

export function Carousel({ placeholder, slides, maxWidth, maxHeight }: Readonly<CarouselProps>) {
  // Constructing the class string
  const carouselClass = `rounded-xl ${maxWidth ?? ''} ${maxHeight ?? ''}`

  return (
    <MTCarousel placeholder={placeholder} transition={{ duration: 2 }} className={carouselClass}>
      {slides.map((slide, index) => (
        <img key={index} src={slide.slideUrl} alt={slide.altText} className="h-full w-full object-cover" />
      ))}
    </MTCarousel>
  )
}
