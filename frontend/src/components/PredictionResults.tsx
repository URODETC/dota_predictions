import type { PredictionResult } from "../types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
} from "recharts";
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

  const basePoints = [
    { min: 20, radiant: detailed[0].Radiant, dire: detailed[0].Dire },
    { min: 27.5, radiant: detailed[1].Radiant, dire: detailed[1].Dire },
    { min: 31, radiant: detailed[2].Radiant, dire: detailed[2].Dire },
    { min: 33.5, radiant: detailed[3].Radiant, dire: detailed[3].Dire },
    { min: 36, radiant: detailed[4].Radiant, dire: detailed[4].Dire },
    { min: 38.5, radiant: detailed[5].Radiant, dire: detailed[5].Dire },
    { min: 45, radiant: detailed[6].Radiant, dire: detailed[6].Dire },
    { min: 55, radiant: detailed[7].Radiant, dire: detailed[7].Dire },
  ];

  const interpolate = (x: number) => {
    for (let i = 0; i < basePoints.length - 1; i++) {
      const a = basePoints[i];
      const b = basePoints[i + 1];
      if (x >= a.min && x <= b.min) {
        const ratio = (x - a.min) / (b.min - a.min);
        return {
          time: `${x} мин`,
          [team1Name]: a.radiant + (b.radiant - a.radiant) * ratio,
          [team2Name]: a.dire + (b.dire - a.dire) * ratio,
        };
      }
    }
    return null;
  };

  const chartData = [];
  for (let t = 20; t <= 55; t++) {
    const point = interpolate(t);
    if (point) chartData.push(point);
  }

  return (
    <div className="result-card fade-in">
      <h2>Вероятность победы:</h2>

      <div id="probability-bar">
        <div
          id="radiant-bar"
          className="bar"
          style={{ width: `${average.Radiant * 100}%`, background: "#00ff7f" }}
        >
          {team1Name}: {(average.Radiant * 100).toFixed(1)}%
        </div>
        <div
          id="dire-bar"
          className="bar"
          style={{ width: `${average.Dire * 100}%`, background: "#ff4040" }}
        >
          {team2Name}: {(average.Dire * 100).toFixed(1)}%
        </div>
      </div>

      <div style={{ width: "100%", height: 360, marginTop: 30 }}>
        <ResponsiveContainer>
          <LineChart
            data={chartData}
            margin={{ top: 10, right: 20, left: 0, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="time" interval={4}>
              <Label
                value="Время (минуты)"
                offset={-15}
                position="insideBottom"
              />
            </XAxis>
            <YAxis domain={[0, 100]}>
              <Label
                value="Вероятность победы, %"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--result-bg)",
                border: "1px solid var(--result-text)",
                borderRadius: "8px",
                color: "var(--result-text)",
                fontSize: "0.9em",
              }}
              formatter={(value, name) => [`${value.toFixed(1)}%`, name]}
              labelFormatter={(label) => `Время: ${label}`}
            />
            <Line
              type="monotone"
              dataKey={team1Name}
              stroke="#00ff7f"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey={team2Name}
              stroke="#ff4040"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
