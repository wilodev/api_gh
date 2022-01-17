import React, { FunctionComponent, ReactNode } from "react";
// Importamos el container que maneja el menú
import { Menu } from "@/containers/Menu";
import { Footer } from "@/components/Footer";
// Definimos los tipos de los props
type propsLayout = {
  children?: ReactNode;
};
function App({ children }: propsLayout) {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
}

export default App;
