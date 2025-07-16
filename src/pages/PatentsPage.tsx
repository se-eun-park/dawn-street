import PatentsCard from '@/components/PatentsCard'

const PatentsPage = () => {
  return (
    <section className='bg-bg-black-100 flex h-fit w-full flex-col items-center overflow-hidden px-12 py-24 sm:py-36'>
      <div className='flex w-full gap-12 xl:max-w-[60vw]'>
        <PatentsCard
          title='인센티브 및 블록체인 기반의 정보 전달 플랫폼'
          description='등록번호: 1020652470000'
          tag='등록 특허'
        />
        <PatentsCard
          title='블록체인 기반의 인증 방식을 이용하여 재산의 관리처분방법을 디지털로 보관하는 시스템 및 방법'
          description='출원번호: 진행중'
          tag='진행중 특허'
        />
        <PatentsCard
          title='사용자 반응 기반 멀티라벨 콘텐츠 성과 예측 및 전략 자동화 시스템'
          tag='진행중 특허'
        />
      </div>
    </section>
  )
}

export default PatentsPage
