const data = [
  {
    id: 1,
    image: '/checkabout.png',
    title:
      'Our team hand picks new or lightly used items from high-demand brands. All items pass a verification process to ensure each and every one is legit and authentic.',
  },
  {
    id: 2,
    image: '/cleanabout.png',
    title:
      'Items arrive to us are either/and cleaned, restored, ironed, washed, and stored in a dust-free and temperature controlled space.',
  },
  {
    id: 3,
    image: '/sendabout.png',
    title:
      'We list our products on the eBay platform at the best pricing so you can save even on the most popular brands. We quickly ship our item out to you with sustainable packaging, tracking, and quick shipping.',
  },
]

const HowItWorks = () => {
  return (
    <div className='bg-[#b1d6ce] p-10 px-20 text-white tracking-wider leading-7 sm:p-5 sm:px-5'>
        <p className="text-2xl font-bold text-center sm:text-xl">How it Works</p>
      <div className='flex flex-wrap py-10 gap-8 items-center justify-center sm:flex-col sm:gap-4 sm:py-5 sm:gap-y-8'>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='w-[23%] h-fit rounded-lg font-semibold text-sm flex flex-col gap-6 items-center justify-between tracking-wider cursor-pointer sm:w-full sm:font-normal sm:gap-2'
            >
              <img
                className='rounded-lg w-[250px] h-[250px] p-2 sm:w-[200px] sm:h-[200px]'
                src={item.image}
                alt=''
              />
              <p className="text-center font-normal w-[250px] sm:w-full">{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HowItWorks
