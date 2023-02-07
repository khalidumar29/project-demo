import { useState } from "react";
import ConuntryCard from "./conuntryCard";
import { BiMobileAlt } from "react-icons/bi";

type Props = {};
interface Contry {
  id: number;
  name: String;
  Image: String;
}

const Maincomponents = (props: Props) => {
  const [contry] = useState<Contry[]>([
    {
      id: 1,
      name: "nederlands",
      Image: "https://i.ibb.co/Gn64xsf/nederland.png",
    },
    { id: 2, name: "francais", Image: "https://i.ibb.co/ZYM4VJJ/France.webp" },
    { id: 3, name: "english", Image: "https://i.ibb.co/rbcvjh2/England.webp" },
    { id: 4, name: "deutsch", Image: "https://i.ibb.co/XsSx600/Germany.webp" },
    { id: 5, name: "italiano", Image: "https://i.ibb.co/t3zw4rV/Italy.png" },
  ]);

  return (
    <div className='flex items-center mx-[20%]'>
      <div className='w-[50%] flex flex-col items-center'>
        <h1 className='text-center text-8xl'>Airbag</h1>

        <div className='w-[120px] h-[120px] rounded bg-white flex items-center justify-center mt-36'>
          <div className='bg-red-500 w-[80%] h-[80%]'>
            <img
              src={
                "https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
              }
              alt=''
            />
          </div>
        </div>
        <div className='flex gap-2 justify-center items-center text-gray-800 mt-5'>
          <BiMobileAlt className='w-8 h-8' />
          <span>scan to countinue by phone</span>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-[50%] '>
        {contry.map((country) => (
          <ConuntryCard
            key={country.id}
            id={country.id}
            name={country.name}
            Image={country.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default Maincomponents;
