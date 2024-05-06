import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Title from "../components/Title";
import { blogs, specialisations, specialists } from "../constants";
import Button from "../components/Button";
import { HiCheckCircle } from "react-icons/hi";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <>
      <section className="py-10 container">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            568: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="adSwiper"
        >
          <SwiperSlide>
            <img src="/images/ad1.png" alt="ad1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/ad2.png" alt="ad1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/ad3.png" alt="ad1" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-10 gradient">
        <div className="container">
          <Title title="Find by specialisation" />

          <div className="grid md:grid-cols-4 min-[427px]:grid-cols-2 grid-cols-1 gap-8 my-8">
            {specialisations.map((obj, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center justify-center gap-4 shadow rounded-[10px] p-4"
              >
                <img src={obj.image} alt={obj.name} width={70} />
                <p className="text-[#ABB6C7] text-center text-lg font-medium">
                  {obj.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button label="View All" onClick={() => {}} />
          </div>
        </div>
      </section>

      <section className="py-10">
        <Title title="Our Medical Specialist" />

        <div className="px-4 my-8">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              468: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              568: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              968: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1273: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1496: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay]}
          >
            {specialists.map((obj, i) => (
              <SwiperSlide key={i}>
                <div className="h-[395px] relative rounded-tl-[250px] rounded-tr-[250px] rounded-b bg-gradient-to-b from-[#E1F3FF] to-[#2AA7FF] flex items-center justify-center">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    className=" object-contain absolute bottom-0"
                  />
                </div>

                <div className="mt-4 flex flex-col items-center justify-center">
                  <h4 className="text-2xl">{obj.name}</h4>
                  <p className="text-primary text-[17px] font-semibold mt-2">
                    {obj.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-10 gradient">
        <div className="container flex md:flex-row flex-col items-center gap-8">
          <div className="md:w-1/2 w-full">
            <img src="/images/patient-caring.png" alt="patient-caring" className="mx-auto" />
          </div>

          <div className="md:w-1/2 w-full ">
            <p className="font-semibold text-primary">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <h2 className="text-4xl font-semibold mt-1">
              Patient <span className="text-primary">Caring</span>
            </h2>
            <p className="text-[#77829D] my-4">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-center gap-2">
                <HiCheckCircle size={24} className="text-primary" />
                <span className="text-lg font-medium text-[#1B3C74]">
                  Stay Updated About Your Health
                </span>
              </li>
              <li className="flex items-center gap-2">
                <HiCheckCircle size={24} className="text-primary" />
                <span className="text-lg font-medium text-[#1B3C74]">
                  Check Your Results Online
                </span>
              </li>
              <li className="flex items-center gap-2">
                <HiCheckCircle size={24} className="text-primary" />
                <span className="text-lg font-medium text-[#1B3C74]">
                  Manage Your Appointments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 container">
        <Title title="Read Our Latest News" subTitle="Blog & News" />

        <div className="my-8 grid lg:grid-cols-3 min-[568px]:grid-cols-2 grid-cols-1 gap-8">
          {blogs.map((blog, i) => (
            <div key={i}>
              <img
                src={blog.image}
                alt="blog-image"
                className="w-full rounded object-cover"
              />
              <div className="mt-2">
                <div className="space-x-2">
                  <span className="text-[#77829D] font-medium">{blog.tag}</span>
                  <span className="text-[#77829D] font-medium">
                    {blog.createdAt}
                  </span>
                </div>
                <p className="text-lg font-medium text-[#1B3C74] break-all">
                  {blog.title}
                </p>

                <div className="flex items-center gap-1 mt-2">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-[#1B3C74]">{blog.author.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 gradient">
        <div className="container flex gap-8 items-center md:flex-row flex-col-reverse">

          <div className="md:w-1/2 w-full">
            <p className="text-[17px] text-primary font-semibold">
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </p>
            <h2 className="sm:text-4xl text-3xl text-[#1B3C74] font-semibold mt-1">
              Our Families
            </h2>
            <p className="text-[#77829D] mt-4 font-medium">
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <img src="/images/our-families.png" alt="our-families" className="mx-auto" />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
};

export default Home;

