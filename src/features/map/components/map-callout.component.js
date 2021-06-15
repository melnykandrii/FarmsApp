import React from "react";
import { FarmCompactInfo } from "../../farms/components/farm-compact-info.component";

export const MapCallout = ({ farm }) => {
  return (
    <>
      <FarmCompactInfo isMap farm={farm} />
    </>
  );
};
