import React, { useEffect } from "react";
import axios from "../../helper/ApiHelper";

const LandingPage = () => {
  useEffect(() => {
    axios
      .get("issues/all")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return <div>LandingPage</div>;
};

export default LandingPage;
