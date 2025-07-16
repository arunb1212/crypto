import React, { useContext, useEffect, useState } from "react";
import { CoinCon } from "../Context/CoinContext";
import { Link } from "react-router";
import Features from "./Features";
import { FaChartColumn } from "react-icons/fa6";
import { GiDart } from "react-icons/gi";
import { LuFilePenLine } from "react-icons/lu";
import Pricing from "./Pricing";
import { GiCrossMark } from "react-icons/gi";
import Blogs from "./Blogs";


const Home = () => {
  let { coin, curr } = useContext(CoinCon);

  let [dis, setDis] = useState([]);
  let[input,setInput]=useState()

  useEffect(() => {
    setDis(coin);
  }, [coin]);

  let inputhandler=(e)=>{
    setInput(e.target.value)
    console.log(input)
    if(input=== ""){
        setDis(coin)
    }
  }

  let searchHandler= async (e)=>{
    e.preventDefault()

    const newCoin = await coin.filter((item)=>{
        return(
       item.name.toLowerCase().includes(input.toLowerCase())
        )
    })


    setDis(newCoin)
    

  }
  return (
    <div className=" mt-[30px]  items-center w-full min-h-screen   flex-col overflow-x-scroll">
      <div className="flex w-full justify-center items-center text-center flex-col">
        <h1 className="text-4xl text-white font-bold mb-[20px]">
          Largest <br /> Crypto Market over Globe
        </h1>
        <p className="text-white mb-[20px]">
          Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Mollitia unde, magnam iure saepe <br /> incidunt inventore sequi
          tenetur nemo sapiente velit.
        </p>
      </div>
      <div className="w-full  flex justify-center items-center">
      <div className=" h-[50px] flex item-center justify-center rounded-[10px] w-[400px] px-[0px] bg-white">
        <form onSubmit={searchHandler} className="h-[50px] flex item-center justify-between  rounded-[30px] w-[400px] px-[10px] bg-white" >
        <input list="list"
          className="w-[200px] outline-none "
          type="text" value={input}
          onChange={inputhandler}
          placeholder="Enter the Name"
        />

<datalist id="list">
    {coin.map((item)=>(<option value={item.name}/>))}
</datalist>


        <button className="bg-[#5B32B7] my-[5px] px-[10px] rounded text-white font-bold">
          Search
        </button>
        </form>
      </div>
      </div>
<div className="w-full flex justify-center items-center">


      <div className="h-[50px] w-[60%] flex items-center justify-between px-[30px]  rounded bg-[#37216b] text-white text-center mt-[50px] mb-[20px]">
        <div className="w-[40px] flex-shrink-0">#</div>
        <div className="w-[180px]">Coins</div>
        <div className="w-[120px]">Price</div>
        <div className="w-[160px]">24 Hours Change</div>
        <div className="w-[160px]">Market Cap</div>
      </div>
</div>

<div className="w-full  justify-center flex flex-col items-center">
  {dis.length === 0 ? (
    <p className="text-white text-2xl">No Coin Found</p>
  ) : (
    dis.slice(0, 10).map((list) => (
      <Link to={`/coins/${list.id}`} className="mb-[2px] h-[50px] w-[60%] flex items-center justify-between px-[30px] rounded bg-[#37216b] text-white text-center">
        <div className="w-[40px] flex-shrink-0">{list.market_cap_rank}</div>
        <div className="w-[180px]  flex items-center gap-[10px] justify-start">
          <img
            className="w-[30px] h-[30px] object-contain"
            src={list.image}
            alt=""
          />
          <span className="text-[13px]">
            {list.name} - {list.symbol.toUpperCase()}
          </span>
        </div>
        <div className="w-[120px] text-start">
          {curr.symbol}
          {list.current_price}
        </div>
        <div className="w-[160px] text-[13px] text-start">
          {list.high_24h} -- {list.low_24h}
        </div>
        <div className="w-[160px] text-start">
          {curr.symbol} {list.market_cap}
        </div>
      </Link>
    ))
  )}
</div>
<div className=" w-full text-white flex mt-[30px] items-center flex-col">
<h1 className='text-3xl font-bold mb-[10px]'>Features</h1>
<div className="w-[80%] flex justify-between  items-center gap-[20px]">

  
  <Features logo={<FaChartColumn/>}  para={"Live Charts"} />
  <Features logo={<GiDart />} para={"Accurate Pricing"} />
  <Features logo={<LuFilePenLine/>} para={"Daily Blogs"} />
  </div>


</div>
<div className=" w-full text-white  flex mt-[30px] items-center flex-col">
  <h1 className="font-bold text-3xl mb-[10px]">Pricing</h1>
  <div className="flex w-[80%] justify-between ">
  <Pricing  mark2={<GiCrossMark/>} mark3={<GiCrossMark/>} mark4={<GiCrossMark/>} plan={"Basic"}/>
  <Pricing mark3={<GiCrossMark/> } mark4={<GiCrossMark/>} plan={"Single"}/>
  <Pricing plan={"Enterprise"}/>
  </div>


</div>
<div className="flex w-full justify-center flex-col items-center mt-[10px]   text-white">
  <h1 className="text-3xl font-bold">Blogs</h1>
  <div className="flex w-[80%] justify-between ">
  <Blogs ll={"Quis aspernatur ut et sit ipsum quae pariatur consequuntur adipisci qui consectetur.Incidunt aut dolorem alias recusandae nostrum harum et rerum qui mollitia vero accusamus ipsa non molestias."} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMLCfd6ttVBwE7ALzXRtfmB3IQg3IeeQfT_1LKyeubz_VcG9auTKMQmr_c7SMZJoCdQY&usqp=CAU"}/>
  <Blogs ll={"Molestiae quo dicta possimus quia accusantium fuga magnam in provident.Ducimus occaecati necessitatibus veritatis eligendi itaque optio corrupti magni eveniet animi et nihil et."} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTUPMKpkKxSIsBGWsYW5lvK_YWkMM9NueBDG4gFe0CcsXrTxczZQWFCIlKEr-EiOuaLM&usqp=CAU"}/>
  <Blogs ll={"Aut assumenda aut fugiat totam molestias fugiat in.Molestias deserunt iste velit rem reiciendis voluptas aliquam rerum laboriosam officia laborum molestiae omnis quaerat et."} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPw0XXxx--NWHQqmq60_9P22ooJ9bHbsYhMQywXccBk-Wgt2ITHczbowJcEy5-1F3jSiw&usqp=CAU"}/>
  </div>
 
</div>
    </div>
  );
};

export default Home;
