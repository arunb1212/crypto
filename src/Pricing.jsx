import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = ({plan,mark1,mark2,mark3,mark4}) => {
  return (
    <div className="w-[300px] h-[200px] flex justify-center items-center flex-col border bg-[white] text-black rounded-xl">
      <h1 className="text-xl font-bold">{plan}</h1>
      <p className="font-bold">What you Get ??</p>
      <div className=" w-[80%] text-xl  flex items-center justify-center gap-[20px]">
        <div>

        {

mark1?(mark1):<IoMdCheckmarkCircleOutline/>

        }
        </div>

        <p>Chart Preview </p>
      </div>
      <div className="w-[80%]  flex items-center justify-center gap-[20px]">
      <div>

{

mark2?(mark2):<IoMdCheckmarkCircleOutline/>

}
</div>
        <p>Daily Blogs </p>
      </div>
      <div className="w-[80%]  flex items-center justify-center gap-[20px]">
      <div>

{

mark3?(mark3):<IoMdCheckmarkCircleOutline/>

}
</div>
        <p>Market Analysis </p>
      </div>
      <div className="w-[80%] flex items-center justify-center gap-[20px]">
      <div>

{

mark4?(mark4):<IoMdCheckmarkCircleOutline/>

}
</div>
        <p>Chat Support</p>
      </div>
    </div>
  );
};

export default Pricing;
