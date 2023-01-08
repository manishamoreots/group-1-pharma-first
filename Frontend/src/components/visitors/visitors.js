import React from "react";
import "./visitors.css";
import { Statistic } from "semantic-ui-react";
const Visitors = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "25%",marginTop:"5%"
        }}
      >
        <div style={{ marginLeft: "8%" }}>
          <h2>INDIA'S  LARGEST  HEALTHCARE  PLATFORM</h2>
          <Statistic.Group >
            <Statistic>
              <Statistic.Value>260m+</Statistic.Value>
              <Statistic.Label >Visitors</Statistic.Label>
            </Statistic>
            <Statistic >
              <Statistic.Value >31m+</Statistic.Value>
              <Statistic.Label>Orders Delivered</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>1800+</Statistic.Value>
              <Statistic.Label>Cities</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </div>
      </div>
    </>
  );
};
export default Visitors;
