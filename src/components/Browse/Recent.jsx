const data = [
  {
    id: 1,
    image: '/shoe.png',
    title: 'Supreme Air Force 1',
    price: '11.5 Mens - $155',
  },
  {
    id: 2,
    image: '/shoe.png',
    title: 'Air Jordan 1 Mid Metallic Gold',
    price: '5 Youth - $58',
  },
  {
    id: 3,
    image: '/whitekyrie.png',
    title: '[NEW] Kyrie 6 Black-White',
    price: '10 Mens - $105',
  },
  {
    id: 4,
    image: '/shoe.png',
    title: 'Jordan 1 Mid Black Royal Blue',
    price: '5 Youth - $90',
  },
  {
    id: 5,
    image: '/bluehat.png',
    title: 'Supreme Blue Property Label Beanie',
    price: 'Price in USD $300',
  },
  {
    id: 6,
    image: '/greenkyrie.png',
    title: 'Kyrie Flytrao Rage Green',
    price: '10 Mens - $90',
  },
  {
    id: 7,
    image: '/shoe.png',
    title: 'Jordan True Flight Black Cool Grey',
    price: '9.5 Mens - $85',
  },
]

const Recent = ({ search }) => {
  return (
    <div className='py-10 mx-10 sm:py-5 sm:mx-5'>
      <div className='py-4 font-bold flex justify-between items-center sm:font-normal'>
        <p className='text-xl sm:text-sm'>
          Recently <span className='text-[#86c6b7]'>Dropped</span>
        </p>
        <button className='text-[#86c6b7] pr-2 cursor-pointer sm:text-sm'>
          View All {`->`}
        </button>
      </div>
      <div className='flex flex-wrap gap-6 items-center justify-start sm:flex-col sm:gap-2 sm:flex-nowrap'>
        {data
          .filter((item) => {
            return search === ''
              ? item
              : item.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
          })
          .map((item) => {
            return (
              <div
                key={item.id}
                className='w-[23%] h-[300px] p-4 bg-blue-300 rounded-lg font-semibold text-sm flex flex-col gap-4 items-center justify-between tracking-wider cursor-pointer sm:w-full sm:gap-2'
              >
                <img
                  className='rounded-lg w-[150px] h-[150px] sm:w-[150px] sm:h-[150px]'
                  src={item.image}
                  alt=''
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Recent
