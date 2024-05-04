import React, { useContext, useEffect, useState } from "react";
import "./Profile-detail.css";
import { useGlobalContext } from "../../useContext/GlobalContext";
import { baseURL } from "../../helper/baseURL";
export default function ProfileDetail() {
  const { user, token } = useContext(useGlobalContext);
  const [points, setPoints] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${baseURL}/quiz/score/${user?.email}`,
        { headers: { Authorization: "Bearer "+token } }
      );
      const data = await response.json();

      if (data && data.userScore && data.userScore.points) {
        setPoints(data.userScore.points);
      }
    };
    fetchData();
  }, [user?.email, token]);
  return (
    <div className="profile-detail">
      <div>
        <h1>Your profile </h1>
        <img src={user?.image} alt={user?.name} />
        <h2> Your Name : {user?.name}</h2>
        <h3>Your Email : {user?.email}</h3>
      </div>
      <div>
        <h1>Your Score</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Course</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {points && points.length ? (
              <>
                {points.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.course}</td>
                    <td>{item.score.toFixed(0)}%</td>
                  </tr>
                ))}
                <tr>
                  <td>last</td>
                  <td> Average</td>
                  <td>
                    {(points
                      ?.reduce((acc, cur) => acc + cur.score, 0)
                      /(points?.length)).toFixed(2)} %
                  </td>
                </tr>
              </>
            ) : (
              <tr>
                <td> Not Id</td>
                <td> Not course </td>
                <td> Not Score</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
