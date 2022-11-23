import axios from "axios";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import "./featuredInfo.css";
//import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {

const [ income, setIncome] = useState([]);
const [ perc, setPerc] = useState(0)

useEffect(() =>{
const getIncome = async () =>{
  try{
const res = await userRequest.get("orders/income")
setIncome(res.data)
setPerc((res.data[1].total*100)/res.data[0].total - 100)
  }catch{}
}
getIncome()
},[])

console.log(perc)

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)} {" "}
            { perc < 0 ? (
             <ion-icon name="arrow-down-outline"  className="featuredIcon negative"></ion-icon>
            ) : (
              <ion-icon name="arrow-up-outline"  className="featuredIcon positive"></ion-icon>
            )}</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ion-icon name="arrow-down-outline" className="featuredIcon negative"></ion-icon>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ion-icon name="arrow-up-outline"className="featuredIcon"></ion-icon>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
