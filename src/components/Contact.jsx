import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {/* text */}
          <div className="flex-1">
            <div>
              <h4 className="text-xl uppercase font-medium mb-2 tracking-wide">
                Let's get in touch!
              </h4>
              <h2 className="text-[90px] leading-none mb-12">Contact me</h2>
            </div>
          </div>
          {/* form */}
          <div className="flex-1">
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white transition-all"
              placeholder="Your name"
            />
            <input
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white transition-all"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
