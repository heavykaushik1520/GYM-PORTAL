import React from "react";
import { useApi } from "../../hooks/useApi";
import "../../style/AllTrainer.css"
import { Link } from "react-router-dom";

export default function GetAllTrainers() {
  let { data: trainers } = useApi("http://localhost:8080/api/trainers");
  return (
    <div className="All-trainer-container">
      <h2 className="table-heading">All Trainers</h2>
      <div className="table-container">
        <table className="trainers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Experience</th>
              <th colSpan={1}> ACTION </th>
            </tr>
          </thead>
          <tbody>
            {trainers &&
              trainers.data.map((trainer) => {
                return (
                  <tr key={trainer.id}>
                    <td>{trainer.id}</td>
                    <td>{trainer.name}</td>
                    <td>{trainer.phoneNumber}</td>
                    <td>{trainer.experience}</td>
                    <td>
                      <Link
                        className="btn btn-warning"
                        // to={`/members/${member.id}/update-member`}
                        to={`/update-trainer/${trainer.id}`}

                      >
                        Update
                      </Link>
                    </td>
                    {/* <td>
                      <Link
                        className="btn btn-danger"
                        to={`/trainer/${trainer.id}/delete-trainer`}
                      >
                        Delete
                      </Link>
                    </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
