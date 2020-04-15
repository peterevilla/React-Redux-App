import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { getData } from "../actions/index";
import { CircularProgress } from "@material-ui/core";
import BatteryCharging20Icon from "@material-ui/icons/BatteryCharging20";
import BatteryFullIcon from "@material-ui/icons/BatteryFull";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Activity = (props) => {
  return (
    <div>
     

      {props.loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
        <div className="wrap" >
        <Button onClick={() => props.getData()} variant="contained" color="secondary">
        I am Bored
        </Button><br/><br/><br/>
        
        {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
        
        {props.fetch ? < BatteryFullIcon /> : <BatteryCharging20Icon />}
          
          {props.fetch && (
            <div>
              <Card className="card" >
                <CardContent>
                    <h1>{props.boredData.activity}</h1>
                </CardContent>
                {props.boredData.link && <a href={`${props.boredData.link}`}>Link: {props.boredData.link}</a>}
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boredData: state.boredData,
    loading: state.loading,
    fetch: state.fetch,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(Activity);
