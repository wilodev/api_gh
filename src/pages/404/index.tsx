import Link from "next/link";
import React from "react";

function Error() {
  return (
    <div
      className="page-wrap d-flex flex-row align-items-center"
      style={{ height: "65vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">Upps tenemos un error.</div>
            <Link href="/">
              <a className="btn btn-link">Inicio</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
