import React from "react";
import Link from "next/link";
function Jumbo() {
  return (
    <section className="bg-dark py-4">
      <div className="container min-vh-90 d-flex align-items-center">
        <div className="row align-items-center overflow-hidden">
          <div className="col-12 px-2 px-lg-4 text-center text-lg-start">
            <div className="lc-block mb-5">
              <div>
                <h2 className="text-white rfs-30">
                  Buscador de Usuario o Repositorios
                </h2>
                <h3 className="text-secondary rfs-11">
                  Busca el repositorio o desarrollador pulsando los botones
                </h3>
              </div>
            </div>
            <div className="lc-block mb-5">
              <Link href="/users">
                <a className="btn btn-primary mb-3 mb-md-0 me-2">
                  Buscar Desarrollador
                </a>
              </Link>
              <Link href="/repos">
                <a className="btn btn-info mb-3 mb-md-0">Buscar Repositorio</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Jumbo };
