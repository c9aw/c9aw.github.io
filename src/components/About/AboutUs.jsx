const about =
  'We’re dedicated to providing our customers with the highest quality sneakers, hoodies, shirts, hats, accessories and more. Our products are authentic, new or lightly used items that go through our team to make sure we deliver the best possible to you. All our items are cleaned and packaged with sustainable materials and delivered to wherever you are. Our mission is to provide a sustainable way for people around the globe to purchase from their favorite brands while saving money, and helping the environment by reducing our carbon footprint. Our products are currently being sold through the eBay app and website, where we can safely ensure clear and transparent pricing and quality, while we work on our upcoming buy, sell, and trade platform.'

const AboutUs = () => {
  return (
    <div className="p-10 my-10 text-center mx-auto w-4/5 sm:p-0 sm:my-5">
      <p className="text-3xl underline sm:text-xl">About Us</p>
      <p className="text-lg mt-10 sm:text-sm sm:mt-5">{about}</p>
    </div>
  )
}

export default AboutUs
