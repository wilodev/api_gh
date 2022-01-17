import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import HttpApi from "@/utils/HttpApi";
import { RepoList } from "@/containers/RepoList";
import { JumboSearch } from "@/components/JumboSearch";
import { Loading } from "@/components/Loading";
import { Error } from "@/components/Error";
import Seo from "@/components/Seo";

type propsRepos = {
  repos: repo[];
};
// Se realiza la carga incial desde el servidor de 10 usuarios random y 10 proyectos con más estrellas
export const getStaticProps: GetStaticProps<propsRepos> = async () => {
  const repos = await HttpApi.instance.getAll("repositories", 6);
  return {
    props: {
      repos,
    },
  };
};
const Repos = ({ repos }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Variable que almacena el estado del loading
  const [loading, setLoading] = useState(false);
  // Variable que almacena la respuesta de los usuarios buscados en el api
  const [findRepos, setFindRepos] = useState<repo[]>([]);
  // Variable para almacenar al referencia del input
  const [inputRepos, setInputRepos] = useState("");
  // Varaible para encontrar un not found o errror
  const [error, setError] = useState(false);

  const searchRepos = async () => {
    setLoading(true);
    setError(false);
    const response = await HttpApi.instance.getOne(
      `search/repositories?q=${inputRepos}&pages=3?per_page=5`,
      ""
    );

    if (response) {
      console.log(response);
      if (response?.items.length === 0) {
        setError(true);
        setFindRepos([]);
      } else {
        setFindRepos(response.items);
      }
      setLoading(false);
    }
  };
  const changeValueInput = (value: string) => {
    setInputRepos(value);
    if (value === "") {
      setFindRepos([]);
    }
  };
  return (
    <>
      <Seo title="Buscador Repo" description="Busca un repositorio" />
      <JumboSearch
        title="Buscador de Repositorios"
        subtitle="Escribe un nombre"
      >
        <div className="col-12">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Repositorio"
              value={inputRepos}
              onChange={(event) => {
                changeValueInput(event.target.value);
              }}
              onKeyPress={(event) => {
                event.code == "Enter" && inputRepos.length > 2 && searchRepos();
              }}
            />
          </div>

          {inputRepos.length > 2 && (
            <a
              className="btn btn-primary mb-3 mb-md-0 me-2"
              onClick={searchRepos}
            >
              {!loading ? "Buscar Repositorio" : "Buscando ..."}
            </a>
          )}
        </div>
      </JumboSearch>
      <div className="container">
        <div className="row">
          {error && <Error title="Repositorio no encontrado" />}
          {loading && <Loading />}
          {((!error && !loading && findRepos.length === 0) ||
            inputRepos == "") && <RepoList repos={repos} />}
          {!error && !loading && findRepos.length > 0 && (
            <RepoList repos={findRepos} title={inputRepos} />
          )}
        </div>
      </div>
    </>
  );
};

export default Repos;
