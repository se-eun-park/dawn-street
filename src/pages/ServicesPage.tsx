import ServicePageTitle from '@/components/ServicePageTitle'
import ServiceDropDown from '@/components/ServiceDropDown'
import ServiceCard from '@/components/ServiceCard'

const ServicesPage = () => {
  return (
    <section className='bg-bg-black-100 flex h-fit flex-col items-center gap-8 overflow-hidden px-12 py-24 sm:py-36 lg:gap-18'>
      <ServicePageTitle />

      <div className='border-border-gray flex w-[60vw] flex-col border-t'>
        <ServiceDropDown idx={'01'} title={'Blockchain Solutions'}>
          <ServiceCard />
        </ServiceDropDown>

        <ServiceDropDown idx={'02'} title={'AI Automation'}>
          <ServiceCard />
        </ServiceDropDown>

        <ServiceDropDown idx={'03'} title={'Digital Life Services'}>
          <ServiceCard />
        </ServiceDropDown>
      </div>
    </section>
  )
}

export default ServicesPage
