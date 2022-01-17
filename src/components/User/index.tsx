/* eslint-disable @next/next/no-img-element */
import React from "react";
type currentUser = {
  user: user;
  key: number;
};
function User({ user }: currentUser) {
  return (
    <div className="col-md-4 py-4 ">
      <div className="lc-block">
        <img
          alt={user.login}
          className="rounded-circle float-start me-4"
          src={user.avatar_url}
          style={{ width: "10vh" }}
          loading="lazy"
        />
        <div>
          <h5>
            <strong>{user.login}</strong>
          </h5>
        </div>

        <small className="text-secondary" style={{ letterSpacing: "1px" }}>
          <a href={user.url} target="_blank" rel="noreferrer">
            @{user.login}
          </a>
        </small>

        <div>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

export { User };
