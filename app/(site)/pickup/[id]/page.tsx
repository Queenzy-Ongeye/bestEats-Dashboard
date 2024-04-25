"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import PickUp from "../page";

interface IPickupDetails {
  id: number;
  customer_name: string;
  quantity: number;
  price: string;
  product: string;
}

const PickUpDetails = ({ params }: any) => {
  const router = useRouter();
  const [pickupData, setPickupData] = useState<any>(null);
  const id = params.id;

  useEffect(() => {
    (async () => {
      try {
        const pickupDataResponse = await axios.get(`/orderReport.json`);
        const pickupData: IPickupDetails[] = pickupDataResponse.data;

        // converting the id into a number
        const itemId = parseInt(id);
        const itemDetails = pickupData.filter((item) => item.id === itemId);
        setPickupData(itemDetails.length > 0 ? itemDetails[0] : null);
      } catch (error) {
        console.error("Error fetching pickup data:", error);
      }
    })();
  }, [id]);

  return (
    <>
      <PickUp />
      <div className="fixed justify-center items-center inset-x-0 inset-y-0  bg-black/30 bg-opacity-50 backdrop-blur-sm flex">
        <div className="bg-gray-100 w-[1000px] rounded-md h-full overflow-y-auto">
          <div
            className="text-orange-400 border border-orange-400 rounded-full mt-2 p-1 cursor-pointer w-10 h-10 flex items-center justify-center mx-2"
            onClick={() => router.back()}
          >
            <MdClose size={20} />
          </div>
          <div className="p-2">
            <h1 className="font-semibold text-3xl text-center text-black">
              Customer Order Details
            </h1>
            {pickupData && (
              <div
                key={pickupData.id}
                className="items-center shadow-md m-4 shadow-gray-100 justify-between p-4 bg-white rounded-md dark:bg-darker"
              >
                <h3 className="font-semibold text-lg text-black text-center">
                  Customer Name : {pickupData.customer_name}
                </h3>
                <h2 className="font-semibold text-lg text-black text-center">
                  Order List
                </h2>
                <table className="min-w-full divide-y divide-gray-200">
                  <tr>
                    <th className="py-3.5 px-4 text-sm sm:text-md md:text-lg font-bold text-left rtl:text-right text-gray-700">
                      Product
                    </th>
                    <th className="py-3.5 px-4 text-sm sm:text-md md:text-lg font-bold text-left rtl:text-right text-gray-700">
                      Item Quantity
                    </th>
                    <th className="py-3.5 px-4 text-sm sm:text-md md:text-lg font-bold text-left rtl:text-right text-gray-700">
                      Total Price
                    </th>
                  </tr>

                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-700  whitespace-nowrap ">
                      {pickupData.product_name}
                    </td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-700  whitespace-nowrap ">
                      {pickupData.quantity}
                    </td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-700  whitespace-nowrap ">
                      {pickupData.price}
                    </td>
                  </tr>
                  <tr></tr>
                </table>
                <h2 className="font-semibold text-xl text-black text-center P-2">
                  Drvier Details
                </h2>
                <h3 className="font-semibold text-lg text-black">Name: George Dickons</h3>
                <h3 className="font-semibold text-lg text-black">Age: 40yrs</h3>
                <h3 className="font-semibold text-lg text-black">Gender: Male</h3>
                <h3 className="font-semibold text-lg text-black">Vehicle Details: White Nissan Van Registration No. KCP 459I</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUpDetails;
