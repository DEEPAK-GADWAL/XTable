import React, { useState } from "react";
import "./App.css";
const YourComponent = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleSortByDate = () => {
    const sortedData = [...data].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setData(sortedData);
  };

  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => b.views - a.views);
    setData(sortedData);
  };

  return (
    <div>
      <div>
        <span>
          <button onClick={handleSortByDate}>Sort by Date</button>
          <button onClick={handleSortByViews}>Sort by Views</button>
        </span>
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => (
                <tr key={index}>
                  <td>{val.date}</td>
                  <td>{val.views}</td>
                  <td>{val.article}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
