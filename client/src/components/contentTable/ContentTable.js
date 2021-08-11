import React from "react";
import "./contentTable.scss";

import { DeleteForeverOutlined, Edit } from "@material-ui/icons";

const ContentTable = () => {
  return (
    <div className="contentTable">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <label>
                <input type="checkbox" />
              </label>
            </th>
            <th scope="col">Name</th>
            <th scope="col">NIP</th>
            <th scope="col">Department</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <label>
                <input type="checkbox" />
              </label>
            </th>
            <td>wira</td>
            <td>09187364819</td>
            <td>Preschool</td>
            <td>Male</td>
            <td>
              <span>
                <Edit style={{ color: "teal" }}></Edit>
              </span>
              <span>
                <DeleteForeverOutlined
                  style={{ color: "crimson" }}
                ></DeleteForeverOutlined>
              </span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <label>
                <input type="checkbox" />
              </label>
            </th>
            <td>wira</td>
            <td>09187364819</td>
            <td>Preschool</td>
            <td>Male</td>
            <td>
              <span>
                <Edit style={{ color: "teal" }}></Edit>
              </span>
              <span>
                <DeleteForeverOutlined
                  style={{ color: "crimson" }}
                ></DeleteForeverOutlined>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
