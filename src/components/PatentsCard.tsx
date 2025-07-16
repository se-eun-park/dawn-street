type PatentsCardProps = {
  title: string
  description?: string
  tag: string
}

const PatentsCard = ({ title, description, tag }: PatentsCardProps) => {
  return (
    <div className='flex w-full flex-col'>
      <p className='text-text-white font-paperlogy-300 text-2xl'>{title}</p>
      <p>{description}</p>
      <div>{tag}</div>
    </div>
  )
}

export default PatentsCard
