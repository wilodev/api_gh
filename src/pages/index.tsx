import { GetStaticProps, InferGetStaticPropsType } from "next";
import HttpApi from "@/utils/HttpApi";
import { UsersList } from "@/containers/UsersList";
import { RepoList } from "@/containers/RepoList";
import { Jumbo } from "@/components/Jumbo";
import Seo from "@/components/Seo";

type homeProps = {
  users: user[];
  repos: repo[];
};
// Se realiza la carga incial desde el servidor de 10 usuarios random y 10 proyectos con más estrellas
export const getStaticProps: GetStaticProps<homeProps> = async () => {
  const users = await HttpApi.instance.getAll("users", 6);
  const repos = await HttpApi.instance.getAll("orgs/ReactJs/repos", 5);
  return {
    props: {
      users,
      repos,
    },
  };
};
const Home = ({
  users,
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo
        title="Proyecto Api"
        description="Busca un desarrollador o repositorio"
      />
      <Jumbo />
      <div className="container">
        <div className="row">
          <UsersList users={users} />
        </div>
        <div className="row">
          <RepoList repos={repos} />
        </div>
      </div>
    </>
  );
};

export default Home;
