import React from "react";
const About = () => {
  return (
    <section
      id=""
      className="  h-screen  justify-center     relative  p-8  text-white font-medium   "
    >
      <h className=" font-extrabold text-[#e0aaff] text-2xl tracking-wider  border-b-[3px]  border-b-purple-500 p-2  ">
        About :
      </h>
      <div className="flex items-center h-full  text-white justify-evenly ">
        <div className="flex gap-24 flex-col  border-dashed border-gray-700 border-y  ">
          <div className="   gap-6 flex flex-col  p-12">
            <div>
              <h
                className="text-[#c77dff]  border-dotted  border-gray-600
								border p-4 tracking-wider uppercase font-bold text-2xl flex flex-col
								mb-8"
              >
                Hi I'm Youssef Taoussi
              </h>
              <p className="max-w-xl font-medium  border-dotted  border-gray-600 border-x px-8 tracking-wider text-gray-200">
                I'm self tought FRONT-END devlopper with a keen eye for
                FULLSTACK devlopper
              </p>
            </div>
          </div>
          <div className="flex  justify-center flex-col sm:flex-row   border-y  border-dotted border-gray-700 p-6 gap-14">
            <div className="flex   flex-1 gap-2 flex-wrap items-center ">
              <h className=" font-bold text-xl text-[#e0aaff]">Skills : </h>
              <img
                src="https://i.pinimg.com/564x/c5/73/ff/c573ff5552d6da9a1d28ec4e27cd1445.jpg"
                className="w-10 h-10 rounded-full "
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/b8/48/d5/b848d5d9bb221592064de0f356f61676.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="https://i.pinimg.com/564x/2a/e1/8a/2ae18a66f89f1dc3fff96203288fcb64.jpg"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/69/16/e2/6916e2b11f37661b5ba69a422c49460c.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="https://i.pinimg.com/564x/11/a7/b5/11a7b5fb70c24e5632f2baccce14603c.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <img
                src="https://i.pinimg.com/564x/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center">
                <h1 className="text-black text-xl font-bold">ex</h1>
              </div>
              <img
                src="https://i.pinimg.com/564x/af/0d/ad/af0dad0aff317476578e26326f7e565a.jpg"
                alt=""
                className=" rounded-lg w-10 h-10"
              />
            </div>
            <button className="p-2 rounded  text-white  font-medium px-6 bg-[#3c096c] hover:opacity-80">
              Check My CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
