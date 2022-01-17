import React from "react";
import { Repo } from "@/components/Repo";
type propRepoList = {
  repos: repo[];
  title?: string;
};
function RepoList({ repos, title = "React JS" }: propRepoList) {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="lc-block mb-4 py-2">
              <h2 className="display-2 mb-0">
                <b>{title}</b>
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
                metus id
                <br /> ligula malesuada placerat sit amet quis enim.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Full Name</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {repos && repos.map((item) => <Repo repo={item} key={item.id} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export { RepoList };
