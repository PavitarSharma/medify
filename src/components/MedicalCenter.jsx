import { AiFillLike } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

const MedicalCenter = ({ data }) => {
  return (
    <div className="py-4 px-6 bg-white shadow-md relative">
      <div className="flex gap-6  sm:flex-row flex-col">
        <div className="relative w-[124px] h-[124px] rounded-full flex items-center justify-center bg-[#8CCFFF] mx-auto">
          <img
            src="/images/hospital.png"
            alt="hospital"
            width={80}
            height={80}
          />
          <FaCheckCircle
            size={22}
            className="text-[#2AA7FF] absolute -right-1 bottom-6"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl sm:text-start text-center text-primary font-semibold">
            {data["Hospital Name"]}
          </h3>

          <div className="mt-4">
            <h4 className="text-sm font-bold sm:text-start text-center">
              {data.City}, {data.State}
            </h4>
            <p className="text-sm text-[#414146] sm:text-start text-center">
              {data["Hospital Type"]}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <button className="flex items-center gap-1 py-1 px-4 rounded bg-[#00A500] text-white">
                <AiFillLike />
                <span>{data["Hospital overall rating"]}</span>
              </button>

              <button className="bg-[#2AA7FF] text-sm text-white sm:py-4 py-3 sm:px-6 px-4 font-medium rounded cursor-pointer">
                Book Free center Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default MedicalCenter;
