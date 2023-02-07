import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  id: number;
  name: String;
  Image: String;
}
const ConuntryCard = ({ name, Image }: Props) => {
  console.log(name);

  return (
    <div className='flex justify-between items-center p-6 w-[450px] bg-white shadow-lg'>
      <div className='flex gap-6  items-center'>
        <div className='w-[80px] h-[80px] rounded-full bg-gray-700'>
          <img className='h-full w-full rounded-full' src={`${Image}`} alt='' />
        </div>
        <div>
          <h1 className='text-3xl text-black-300 '>{name}</h1>
        </div>
      </div>
      <div className='flex p-2 rounded-full justify-center items-center bg-slate-400 text-black-200'>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default ConuntryCard;
