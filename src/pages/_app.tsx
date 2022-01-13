// Se añade la librería de Bootstrap
import "bootstrap/dist/css/bootstrap.css";
// Se añade la hoja de estilos custom global para el proyecto
import "../styles/globals.css";
// Se instacia el tipo para las props de NextJs
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
