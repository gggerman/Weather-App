import React from "react";
import "./form.css";

const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Ciudad"/>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" name="country" autoComplete="off" placeholder="País"/>
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-dark">Buscar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Introduzca una ciudad.
    </div>
  );
}

export default Form;
