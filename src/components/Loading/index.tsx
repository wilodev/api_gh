import React from "react";

function Loading() {
  return (
    <div className="section">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 flex text-center">
            <div className="lc-block mb-4 py-2">
              <h2 className="display-2 mb-0">Cargando ...</h2>¡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Loading };
