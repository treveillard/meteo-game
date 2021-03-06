import React from "react";
import { Store } from "./Store";
import Header from "./Header";
import {
  fetchDataAction,
  toggleCityAction,
  toggleFlippedAction
} from "./Actions";

const MeteoList = React.lazy(() => import("./MeteoList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.meteos.length === 0 && fetchDataAction(dispatch);
  }, [state]);

  const props = {
    meteos: state.meteos,
    isFlipped: state.isFlipped,
    state: { state, dispatch },
    toggleCityAction,
    toggleFlippedAction,
    cities: state.cities,
    foundCities: state.foundCities,
    fail: state.failMessage,
    success: state.successMessage
  };

  return (
    <React.Fragment>
      <Header />
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="row">
          <MeteoList {...props} />
        </div>
      </React.Suspense>
    </React.Fragment>
  );
}
