import React from "react";
import { useGetCountriesQuery } from "../api/countrySlice";

const Countries = () => {
  const {
    data: countries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCountriesQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = countries["data"];
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <h1 className="text-center py-3 text-xlg text-red-500 font-bold underline">
        Overall Data:
      </h1>
      <div className="w-[100%] flex flex-col lg:flex-row justify-around my-5">
        <div className="border-2 border-black p-5">
          <h1>Total samples collected:</h1>
          <p>{content.totalSamplesTested}</p>
        </div>
        <div className="border-2 border-black p-5">
          <h1>Total confirmed cases:</h1>
          <p>{content.totalConfirmedCases}</p>
        </div>
        <div className="border-2 border-black p-5">
          <h1>Total active cases:</h1>
          <p>{content.totalActiveCases}</p>
        </div>
        <div className="border-2 border-black p-5">
          <h1>Total discharged :</h1>
          <p>{content.discharged}</p>
        </div>
        <div className="border-2 border-black p-5">
          <h1>Total deaths:</h1>
          <p>{content.death}</p>
        </div>
      </div>

      <hr />
      <h1 className="text-center py-3 text-xlg text-red-500 font-bold underline">
        States Data:
      </h1>
      <div className="w-[100%] px-20 grid lg:gap-20 lg:grid-cols-4 ">
        {content.states.map((location) => {
          return (
            <div className="border-2 border-black p-5" key={location._id}>
              <h3>State: {location.state}</h3>
              <p>Cases on Admission: {location.casesOnAdmission}</p>
              <p>Confirmed Cases: {location.confirmedCases}</p>
              <p>Death: {location.death}</p>
              <p>Discharged: {location.discharged}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
