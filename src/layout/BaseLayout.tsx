import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { MainPage, MetricsPage, ServicesPage, PartnershipsPage, PatentsPage } from '@/pages'

const BaseLayout = () => {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <main>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <MainPage />
      <MetricsPage />
      <ServicesPage />
      <PatentsPage />
      <PartnershipsPage />
    </main>
  )
}

export default BaseLayout
