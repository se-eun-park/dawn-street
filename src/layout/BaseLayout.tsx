import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef, useState } from 'react'
import NavBar from '@/components/common/NavBar'
import { MainPage, MetricsPage, ServicesPage, ContactPage, PatentsPage } from '@/pages'

type PageProps = 'main' | 'metrics' | 'service' | 'patents' | 'contact'

const BaseLayout = () => {
  const lenisRef = useRef<any>(null)

  const [nowPage, setNowPage] = useState<PageProps>('main')
  const [refresh, setRefresh] = useState(-1)

  const mainRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const patentsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // 페이지 ref 매핑 객체
  const pageRefs = {
    main: mainRef,
    metrics: metricsRef,
    service: servicesRef,
    patents: patentsRef,
    contact: contactRef,
  } as const

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  // 스크롤 이동 함수
  useEffect(() => {
    const targetRef = pageRefs[nowPage]
    const targetElement = targetRef.current

    if (targetElement && lenisRef.current?.lenis) {
      // Lenis의 scrollTo 메서드 사용 (더 부드러운 스크롤)
      lenisRef.current.lenis.scrollTo(targetElement, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else if (targetElement) {
      // Lenis가 아직 준비되지 않았을 때 fallback
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [nowPage, refresh])

  return (
    <main>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <NavBar nowPage={nowPage} setNowPage={setNowPage} refresh={refresh} setRefresh={setRefresh} />
      <div ref={mainRef}>
        <MainPage />
      </div>
      <div ref={metricsRef}>
        <MetricsPage />
      </div>
      <div ref={patentsRef}>
        <PatentsPage />
      </div>
      <div ref={servicesRef}>
        <ServicesPage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </main>
  )
}

export default BaseLayout
