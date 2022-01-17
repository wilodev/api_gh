// Se añade la librería de Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Se añade los iconos de bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
// Se añade la hoja de estilos custom global para el proyecto
import "@/styles/globals.css";
// Se instacia el tipo para las props de NextJs
import type { AppProps } from "next/app";
import App from "@/layouts/App";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
