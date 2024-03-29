import Link from "next/link";
function SpecialOffer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-11 mt-[5rem]">
        <p className="text-4xl text-center">Special Offer for Winter</p>
        <hr className="w-2/5 h-1 mt-1 bg-gray-300 rounded-xl" />
        <div className="flex flex-row w-full gap-x-5 mt-7">
          <div className="w-1/2 h-96 flex justify-start items-center bg-cover bg-[url('https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/banner/b17.jpg?raw=true')]">
            <div className="flex flex-col items-start text-white gap-y-2 w-fit pl-14">
              <p className="text-lg">Crazy deals</p>
              <p className="text-5xl">buy 1 get 1 free</p>
              <p className="text-xl">The best classic dress on sales now</p>
              <Link href={"/category"}>
                <button className="px-8 py-2 mt-4 border hover:bg-white hover:text-black">
                  Buy now
                </button>
              </Link>
            </div>
          </div>

          <div className="w-1/2 h-96 flex justify-start items-center bg-cover bg-[url('https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/banner/b10.jpg?raw=true')]">
            <div className="flex flex-col items-start text-white gap-y-2 w-fit pl-14">
              <p className="text-lg">spring/summer</p>
              <p className="text-5xl">Upcomming season</p>
              <p className="text-xl">
                The best t-shirt sales will avaiable soon
              </p>
              <Link href={"/contact"}>
                <button className="px-8 py-2 mt-4 border hover:bg-white hover:text-black">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
