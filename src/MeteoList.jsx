import React from "react";
import Card from "./Card";

export default function MeteoList(props) {
  const { meteos } = props;

  return meteos.map(meteo => {
    return (
      <Card
        {...props}
        key={meteo.id}
        temp={meteo.main.temp}
        humidity={meteo.main.humidity}
        icon={meteo.weather[0].icon}
        answer={meteo.name}
      />
    );
  });
}
