/* eslint-disable @next/next/no-img-element */
import React from "react";
type currentRepo = {
  repo: repo;
  key: number;
};
function Repo({ repo }: currentRepo) {
  return (
    <tr>
      <th scope="row">{repo.id}</th>
      <td>{repo.name}</td>
      <td>{repo.full_name}</td>
      <td>{repo.html_url}</td>
    </tr>
  );
}

export { Repo };
