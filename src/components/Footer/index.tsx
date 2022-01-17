import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="pt-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <Link href="/">
              <a className="me-0 text-white">Api GH</a>
            </Link>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
              metus id
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-4"></div>
          </div>
          <div className="col-lg-3">
            <div className="row g-4"></div>
          </div>
        </div>
        <hr className="mt-4 mb-0" />
        <div className="py-3">
          <div className="container px-0">
            <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
              <div className="text-primary-hover">
                {" "}
                Copyrights{" "}
                <Link href="/">
                  <a className="text-white">©2021 Wilodev</a>
                </Link>
                . All rights reserved.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
