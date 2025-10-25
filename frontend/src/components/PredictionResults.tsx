import type { PredictionResult } from "../types";
import "./PredictionResults.css";

interface PredictionResultsProps {
  result: PredictionResult;
  team1Name: string;
  team2Name: string;
}

export const PredictionResults = ({
  result,
  team1Name,
  team2Name,
}: PredictionResultsProps) => {
  const { average, detailed } = result;

  return (
    <div className="result-card fade-in">
      <h2>Вероятность победы:</h2>
      <div id="probability-bar">
        <div
          id="radiant-bar"
          className="bar"
          style={{ width: `${average.Radiant * 100}%`, background: "#00ff7f" }}
        >
          {team1Name}: {average.Radiant * 100}%
        </div>
        <div
          id="dire-bar"
          className="bar"
          style={{ width: `${average.Dire * 100}%`, background: "#ff4040" }}
        >
          {team2Name}: {average.Dire * 100}%
        </div>
      </div>
      <table className="result-table">
        <thead>
          <tr>
            <th></th>
            <th>{team1Name}</th>
            <th>{team2Name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&#60;25 Мин</td>
            <td>{detailed[0].Radiant * 100}%</td>
            <td>{detailed[0].Dire * 100}%</td>
          </tr>
          <tr>
            <td>25-30 Мин</td>
            <td>{detailed[1].Radiant * 100}%</td>
            <td>{detailed[1].Dire * 100}%</td>
          </tr>
          <tr>
            <td>30-32.5 Мин</td>
            <td>{detailed[2].Radiant * 100}%</td>
            <td>{detailed[2].Dire * 100}%</td>
          </tr>
          <tr>
            <td>32.5-35 Мин</td>
            <td>{detailed[3].Radiant * 100}%</td>
            <td>{detailed[3].Dire * 100}%</td>
          </tr>
          <tr>
            <td>35-37.5 Мин</td>
            <td>{detailed[4].Radiant * 100}%</td>
            <td>{detailed[4].Dire * 100}%</td>
          </tr>
          <tr>
            <td>37.5-40 Мин</td>
            <td>{detailed[5].Radiant * 100}%</td>
            <td>{detailed[5].Dire * 100}%</td>
          </tr>
          <tr>
            <td>40-50 Мин</td>
            <td>{detailed[6].Radiant * 100}%</td>
            <td>{detailed[6].Dire * 100}%</td>
          </tr>
          <tr>
            <td>50&#60; Мин</td>
            <td>{detailed[7].Radiant * 100}%</td>
            <td>{detailed[7].Dire * 100}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
