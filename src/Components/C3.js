import React from "react";
import { Form, Table } from "react-bootstrap";
import { CustomContext } from "../Context/Context";

export default function C3() {
  const context = CustomContext();
  return (
    <div className="pt-5">
      <h2>User Data</h2>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {context?.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>1</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.user_type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
