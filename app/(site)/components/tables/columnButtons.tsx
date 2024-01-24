import Link from "next/link";
import { FaEye } from "react-icons/fa";

export const ReusableButtonLink = ({ href, children }: any) => {
  return (
    <>
      <Link href={href} className="">
        <button
          type="button"
          className="border border-green-500 text-gray-600 p-2 rounded-lg items-center space-x-1 grid grid-cols-2"
        >
          {children} <FaEye size={15} className="ml-2"/>
        </button>
      </Link>
    </>
  );
};
