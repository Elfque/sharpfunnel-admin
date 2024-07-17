import { singleOverviewType } from "../utils/interface";

const SingleOverview = ({ text, data, icon, type }: singleOverviewType) => {
  return (
    <div className="p-4 rounded-lg border border-navbarBg flex gap-[26px] items-center">
      <div
        className={`icon text-xl w-14 h-14 flex justify-center items-center ${
          type === "orders"
            ? "bg-[#F2EEFC]"
            : type === "visit"
            ? "bg-[#E9F9F4]"
            : type === "pages"
            ? "bg-[#FEF8EC]"
            : "bg-[#E9F9F4]"
        } rounded-md`}
      >
        {icon}
      </div>

      <div className="text-blackText">
        <div className="text-sm">{text}</div>
        <div className="text-[28px] font-semibold">{data}</div>
      </div>
    </div>
  );
};

export default SingleOverview;
