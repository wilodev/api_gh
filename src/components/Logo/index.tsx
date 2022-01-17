import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <a className="navbar-brand">Api GH</a>
    </Link>
  );
}

export { Logo };
