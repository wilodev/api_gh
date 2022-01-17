import Link from "next/link";
import React from "react";
// Importamos el estado de navegación de un router
import { ItemLink } from "@/utils/itemLink";
type propsMenuItem = {
  link: string;
  text: string;
};
/**
 * Función para crear un item de menu desde un loop
 */
function MenuItem({ link, text }: propsMenuItem) {
  return (
    <ItemLink href={link} exact className="nav-link">
      {text}
    </ItemLink>
  );
}

export { MenuItem };
