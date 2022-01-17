import React, { ReactNode } from "react";
type propsJumboSearch = {
  title: string;
  subtitle: string;
  children: ReactNode;
};
function JumboSearch({ title, subtitle, children }: propsJumboSearch) {
  return (
    <section className="bg-dark py-4">
      <div className="container min-vh-90 align-items-center">
        <div className="row align-items-center overflow-hidden text-center">
          <div className="col-12 px-2 px-lg-4 text-center text-lg-start">
            <div className="lc-block mb-5 text-center">
              <div>
                <h2 className="text-white rfs-30">{title}</h2>
                <h3 className="text-secondary rfs-11">{subtitle}</h3>
              </div>
            </div>
            <div className="d-flex col-12 flex-column text-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { JumboSearch };
