import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <MaxWidthWrapper className="scroll-pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 pb-20 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold pb-4">Contact Us</h1>
          <p>011 987 678</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold pb-4">Address</h1>
          {/* Add your address content here */}
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold pb-4">Business Hours</h1>
          <ul>
            <li>Mon: Open 24 hours</li>
            <li>Tue: Open 24 hours</li>
            <li>Wed: Open 24 hours</li>
            <li>Thu: Open 24 hours</li>
            <li>Fri: Open 24 hours</li>
            <li>Sat: Open 24 hours</li>
            <li>Sun: Open 24 hours</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <div className="text-center py-4">
          <p>© 2024 TSG Hamil. All rights reserved.</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
