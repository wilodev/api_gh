import { User } from "@/components/User";
import React from "react";

function UsersList({ users }: userList) {
  return (
    <div className="section">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 flex text-center">
            <div className="lc-block mb-4 py-2">
              <h2 className="display-2 mb-0">
                <b>Users</b>
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
        <div className="row d-flex justify-content-center">
          {users && users.map((item) => <User user={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
}

export { UsersList };
