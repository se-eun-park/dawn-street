import type { SVGProps } from 'react'
const SvgScrollDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='#000' viewBox='0 0 24 24' {...props}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M5 15a7 7 0 0 0 14 0V9A7 7 0 0 0 5 9zM12 6v8'
    />
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='m15 11-3 3-3-3' />
  </svg>
)
export default SvgScrollDown
