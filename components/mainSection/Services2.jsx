import ff from "../../public/img/ff.png";
import ff2 from "../../public/img/ff2.png";
import tt3 from "../../public/img/tt3.png";
import tt4 from "../../public/img/tt4.png";
import t5 from "../../public/img/t5.png";
import Image from "next/image";



function Services() {
  const service = [
    {
      id: 1,
      name: "Free delevary",
      img: ff,
      bg_color: "bg-orange-200",
    },
    {
      id: 2,
      name: "Online order",
      img: ff2,
      bg_color: "bg-yellow-200",
    },
    {
      id: 3,
      name: "Save money",
      img: tt3,
      bg_color: "bg-blue-200",
    },
    {
      id: 4,
      name: "Happy sell",
      img: tt4,
      bg_color: "bg-violet-200",
    },
    {
      id: 5,
      name: "24/7 Support",
      img: t5,
      bg_color: "bg-lime-300",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container flex flex-row items-center justify-center gap-24 mt-36">
          {service.map((data) => (
            <ServicesComponent
              key={data.id}
              name={data.name}
              img={data.img}
              bg_color={data.bg_color}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function ServicesComponent({ name, img, bg_color }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white py-8 px-12 rounded-xl drop-shadow-lg">
        <br />
        <Image
          src={img}
          width={120}
          height={120}
          alt="f5"
          className="w-auto h-20"
        />
        <br />
        <p className={`mt-4 px-2 text-blue-600 rounded ${bg_color}`}>{name}</p>
        <br />
      </div>
    </>
  );
}

export default Services;
