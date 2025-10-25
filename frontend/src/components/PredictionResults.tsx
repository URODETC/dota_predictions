import type { PredictionResult } from '../types';
import './PredictionResults.css';

interface PredictionResultsProps {
  result: PredictionResult;
  team1Name: string;
  team2Name: string;
}

export const PredictionResults = ({ result, team1Name, team2Name }: PredictionResultsProps) => {
  const { average, early_game, mid_game, late_game } = result;

  return (
    <div className="result-card fade-in">
      <h2>Вероятность победы:</h2>
      <div id="probability-bar">
        <div
          id="radiant-bar"
          className="bar"
          style={{ width: `${average.radiant}%`, background: '#00ff7f' }}
        >
          {team1Name}: {average.radiant}%
        </div>
        <div
          id="dire-bar"
          className="bar"
          style={{ width: `${average.dire}%`, background: '#ff4040' }}
        >
          {team2Name}: {average.dire}%
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
            <td>&#60;30 Мин</td>
            <td>{early_game.radiant}%</td>
            <td>{early_game.dire}%</td>
          </tr>
          <tr>
            <td>30-50 Мин</td>
            <td>{mid_game.radiant}%</td>
            <td>{mid_game.dire}%</td>
          </tr>
          <tr>
            <td>50&#60; Мин</td>
            <td>{late_game.radiant}%</td>
            <td>{late_game.dire}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};