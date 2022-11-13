import React from "react";
import ButtonSecondary from "../../../components/Buttons/ButtonSecondary/ButtonSecondary";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-medium text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <ButtonSecondary>book appointment</ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
