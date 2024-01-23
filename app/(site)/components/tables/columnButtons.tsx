import Link from "next/link";
import { FaEye } from "react-icons/fa";

export const ReusableButtonLink = ({ href, children }: any) => {
  return (
    <>
      <Link href={href} className="">
        <button
          type="button"
          className="btn btn-sm border border-green-500 text-gray-600 p-2 rounded-lg js-sweetalert flex"
        >
          {children} <FaEye className="m-auto"/>
        </button>
      </Link>
    </>
  );
};
