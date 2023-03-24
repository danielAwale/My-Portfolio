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
          <div className="flex-1">form</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
