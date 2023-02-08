import { Fragment } from "react";

import StrainsSummary from "./StrainsSummary";
import AvailableStrains from "./AvailableStrains";

const Strains = () => {
  return (
    <Fragment>
      <StrainsSummary />
      <AvailableStrains />
    </Fragment>
  );
};

export default Strains;
