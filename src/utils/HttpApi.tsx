// Creamos una clase en formato Single para tener una solo instancia de esta en el proyecto
// Constante con la URL del API de donde consumir datos
const urlServer = process.env.NEXT_PUBLIC_URL_API_GH;
class HttpApi {
  private static _instance?: HttpApi;
  // Constructor de la clase Singleton
  private constructor() {
    if (HttpApi._instance)
      throw new Error("Use HttpApi.instance instead of new.");
    HttpApi._instance = this;
  }
  // Devolvemos la instancia Singleton
  static get instance() {
    return HttpApi._instance ?? (HttpApi._instance = new HttpApi());
  }

  // Constante del limite de peticiones por una llamada
  private limit = 10;

  /**
   * Función para crear la cabecera que se enviará en cada petición
   *
   * @returns
   * @memberof HttpApi
   */
  private customHeaders = () => {
    // TODO desconetar esto si deseas crear autenticación con Github en este caso con 60 peticiones
    // por hora tenemos suficiente para hacer la prueba
    // Variable que almacena el token
    //let token = process.env.TOKEN_GH;
    // if (token) {
    //   // Creamos los datos que van en la cabecerá en cada petición
    //   return new Headers({
    //     Authorization: `BEARER ${token}`,
    //     "Content-Type": "application/json",
    //   });
    // } else {
    //   // Caso contrario solicitamos con un token de Infinyti para cosas públicas
    //   token = env.API_APP_KEY_INFINYTI;
    //   // Creamos los datos que van en la cabecerá en cada petición
    //   return new Headers({
    //     "api-key": token,
    //     "Content-Type": "application/json",
    //   });
    // }
    // Código sin token y autenticación
    return new Headers({
      "Content-Type": "application/vnd.github.v3+json",
    });
  };

  /**
   * Función para crear el contenido a enviar en la petición
   *
   * @param {string} method
   * @param {object or boolean} data
   * @returns
   * @memberof HttpApi
   */
  private configRequest = (method: string) => {
    return {
      method,
      headers: this.customHeaders(),
      mode: "cors",
      cache: "default",
    };
  };

  /**
   * Función para realizar la conexión con un endpoint y solicitar todos los elementos
   *
   * @memberof HttpApi
   */
  getAll = async (url: string, limit: number = this.limit) => {
    try {
      // Configuración de peticion
      const configData: any = HttpApi.instance.configRequest("GET");
      // Solicitud de llamada al endpoint
      const req = await fetch(
        `${urlServer}${url}?per_page=${limit}`,
        configData
      );
      console.log("la respuesta es ", req);
      // Convertir la respuesta en formato json
      const json = await req.json();
      return json;
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Función para realizar la conexión con un endpoint y
   *  solicitar un elemento por su ID ya sea string o number
   *
   * @memberof HttpApi
   */
  getOne = async (url: string, id: string | number) => {
    try {
      // Configuración de peticion
      const configData: any = HttpApi.instance.configRequest("GET");
      // Solicitud de llamada al endpoint
      const req = await fetch(`${urlServer}${url}/${id}`, configData);
      // Convertir la respuesta en formato json
      const json = await req.json();
      return json;
    } catch (e) {
      console.error(e);
    }
  };
}
export default HttpApi;
