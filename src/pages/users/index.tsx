import { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import HttpApi from "@/utils/HttpApi";
import { UsersList } from "@/containers/UsersList";
import { JumboSearch } from "@/components/JumboSearch";
import { Loading } from "@/components/Loading";
import { User } from "@/components/User";
import { Error } from "@/components/Error";
import Seo from "@/components/Seo";

type homeProps = {
  users: user[];
};
// Se realiza la carga incial desde el servidor de 10 usuarios random y 10 proyectos con más estrellas
export const getStaticProps: GetStaticProps<homeProps> = async () => {
  const users = await HttpApi.instance.getAll("users", 6);
  return {
    props: {
      users,
    },
  };
};
const Users = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Variable que almacena el estado del loading
  const [loading, setLoading] = useState(false);
  // Variable que almacena la respuesta de los usuarios buscados en el api
  const [findUsers, setFindUsers] = useState<user>();
  // Variable para almacenar al referencia del input
  const [inputUsers, setInputUsers] = useState("");
  // Varaible para encontrar un not found o errror
  const [error, setError] = useState(false);

  const searchUsers = async () => {
    setLoading(true);
    setError(false);
    const response = await HttpApi.instance.getOne("users", inputUsers);
    if (response) {
      if (response?.message === "Not Found") {
        setError(true);
        setFindUsers(undefined);
      } else {
        setFindUsers(response);
      }
      setLoading(false);
    }
  };
  const changeValueInput = (value: string) => {
    setInputUsers(value);
    if (value === "") {
      setFindUsers(undefined);
    }
  };
  return (
    <>
      <Seo title="Buscador Dev" description="Busca un desarrollador" />
      <JumboSearch title="Buscador de Usuarios" subtitle="Escribe un nombre">
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
              placeholder="Username"
              value={inputUsers}
              onChange={(event) => {
                changeValueInput(event.target.value);
              }}
              onKeyPress={(event) => {
                event.code == "Enter" && searchUsers();
              }}
            />
          </div>
          <a
            className="btn btn-primary mb-3 mb-md-0 me-2"
            onClick={searchUsers}
          >
            {!loading ? "Buscar Desarrollador" : "Buscando ..."}
          </a>
        </div>
      </JumboSearch>
      <div className="container">
        <div className="row">
          {error && <Error title="Usuario no encontrado" />}
          {loading && <Loading />}
          {((!error && !loading && findUsers == undefined) ||
            inputUsers == "") && <UsersList users={users} />}
          {!error && !loading && findUsers !== undefined && (
            <User user={findUsers} key={findUsers.id} />
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
