import React, { Component } from "react";
import Header from "../componentes/header";
import Cardp from "../componentes/listaProfesor";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Listad extends Component {
  state = {
    res: []
  };

  componentDidMount() {
    fetch(`https://backend-sand-kappa.vercel.app/api/profesores`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          res: res
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />

        <div className="centrar docentes margen">
          <h1>Lista de docentes</h1>
        </div>

        <div>
          {this.state.res.map((e, index) => (
            <div key={index}>
              <div className="card ">
                <div className="card-body datosDocente p-3 ml-5">
                  <h4 className="card-title">{e.nombre}</h4>
                  <h5 className="card-text">{e.asignatura}</h5>
                  <a
                    href={`/cartap/${e.id_profesor}`}
                    className="btn btn-outline-light"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Listad;
