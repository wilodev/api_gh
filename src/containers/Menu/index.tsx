import React, { useState } from "react";
// Importamos los componentes personalizados
import { Logo } from "@/components/Logo";
import { MenuItem } from "@/components/MenuItem";
// Importamos la data del menú
import itemMenu from "./data.json";
import Link from "next/link";
// Función para crear un Menú en la página
function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Logo />
        <div className="hidden sm-block">
          <Link href="/users" passHref>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-person-circle"></i>
            </button>
          </Link>
          <Link href="/repos" passHref>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-archive-fill"></i>
            </button>
          </Link>
        </div>

        <div className="navbar-collapse w-100 collapse">
          <ul className="navbar-nav navbar-nav-scroll me-auto">
            {itemMenu.map((item) => (
              <MenuItem link={item.url} text={item.title} key={item.key} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Menu };
