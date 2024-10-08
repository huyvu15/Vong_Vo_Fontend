import React from "react";
import BoxItems from "./box-items";
import FormArea from "./form-area";
import LocationArea from "./location-area";
import TopBar from "./top-bar";

const ContactArea = () => {
  return (
    <React.Fragment>
      <TopBar
        title="Hiểu chúng tôi hơn"
        subtitle="Có điều gì thắc mắc? Hãy nói với chúng tôi."
      />
      <BoxItems/>
      <FormArea/>
      <LocationArea/>
    </React.Fragment>
  );
};

export default ContactArea;
