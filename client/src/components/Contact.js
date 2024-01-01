import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleFormDataChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmitFormData = (e) => {
        e.preventDefault();
    }
    console.log(formData)
    return (
        <section id="contact" className=" mt-24  relative p-6 mb-6     " >
            <h className=" font-extrabold text-[#e0aaff] text-2xl tracking-wider    border-b-[3px]  border-b-purple-500 p-2  ">
                Contact :
            </h>
            <div className="flex items-center flex-1  gap-8 flex-col h-full justify-center text-white   ">
                <p className="text-lg font font-medium text-gray-400">Shot me an email directly  on
                    <span className="font-bold text-gray-200 tracking-wider"> yousseftaoussi894@gmail.com</span>
                </p>
                <div

                    className="flex w-full  max-w-2xl   justify-center flex-col gap-4   items-center  ">
                    <input
                        value={formData.nama}
                        name="name"
                        required
                        onChange={handleFormDataChange}
                        type="text"
                        placeholder="Name"
                        className="p-3  w-full hover:border-gray-700 transitionClass border  rounded-lg border-gray-800 bg-transparent" />
                    <input
                        required
                        value={formData.email}
                        onChange={handleFormDataChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="p-3 w-full border hover:border-gray-700 transitionClass rounded-lg border-gray-800 bg-transparent" />
                    <textarea
                        required
                        value={formData.message}
                        name="message"
                        onChange={handleFormDataChange}
                        rows={5}
                        placeholder="Message"
                        className=" bg-transparent w-full p-3 border hover:border-gray-700 transitionClass border-gray-800 " />
                    <button className="self-start p-2 px-4 border-white border rounded-lg text-white transitionClass transition-colors font-bold hover:bg-[#e0aaff] hover:text-black">
                        Send Message
                    </button>
                </div>

            </div>

        </section>
    )
}
export default Contact; 