import { IoMdAdd } from "react-icons/io";
import Title from "./Title";

const Faq = () => {
  return (
    <section className="py-8">
      <div className="container">
        <Title title="Get Your Answer" subTitle="Frequently Asked Questions" />

        <div className="flex items-center gap-8 md:flex-row flex-col my-8">
          <div className="md:w-1/2 w-full">
            <img src="/images/faq.png" alt="faq" className="mx-auto" />
          </div>

          <div className="md:w-1/2 w-full">
            <ul className="space-y-8">
              <li className="flex gap-4 items-center max-w-[464px] w-full justify-between">
                <span className="text-[#1B3C74] font-semibold text-lg">
                  Why choose our medical for your family?
                </span>
                <IoMdAdd size={24} className="text-primary" />
              </li>

              <li className="flex gap-4 items-center max-w-[464px] w-full justify-between">
                <span className="text-[#1B3C74] font-semibold text-lg">
                  Why we are different from others?
                </span>
                <IoMdAdd size={24} className="text-primary" />
              </li>

              <li className="flex gap-4 items-center max-w-[464px] w-full justify-between">
                <span className="text-[#1B3C74] font-semibold text-lg">
                  Trusted & experience senior care & love
                </span>
                <IoMdAdd size={24} className="text-primary" />
              </li>

              <li className="flex gap-4 items-center max-w-[464px] w-full justify-between">
                <span className="text-[#1B3C74] font-semibold text-lg">
                  How to get appointment for emergency cases
                </span>
                <IoMdAdd size={24} className="text-primary" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
