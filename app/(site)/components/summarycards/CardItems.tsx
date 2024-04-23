import { HiOutlineTicket, HiOutlineUsers } from "react-icons/hi2";
import { IoAnalyticsOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";

export const CardItems = [
    {title: "Value", figure: "$30,000", percentage: "+4.4%", icon : <LuCircleDollarSign size={32} />},
    {title: "Users", figure: "50,021", percentage: "+2.6%", icon : <HiOutlineUsers size={32}/>},
    {title: "Orders", figure: "45,021", percentage: "+3.1%", icon : <IoAnalyticsOutline size={32} />},
    {title: "Tickets", figure: "20,516", percentage: "+3.1%", icon : <HiOutlineTicket size={32} />},
]