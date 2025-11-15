import type { PredictionResult } from "../types";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Label,
  Area,
  AreaChart,
  type TooltipContentProps,
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
        const radiantWin = a.radiant + (b.radiant - a.radiant) * ratio;
        const direWin = a.dire + (b.dire - a.dire) * ratio;
        return {
          time: `${x}`,
          advantage: radiantWin > direWin ? radiantWin : -direWin,
        };
      }
    }
    return null;
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipContentProps<string | number, string>) => {
    if (active && payload && payload.length) {
      const advantage = Number(payload[0].value);
      const isRadiantAdvantage = advantage > 0;
      const absoluteAdvantage = Math.abs(advantage);
      const leadingTeam = isRadiantAdvantage ? team1Name : team2Name;

      return (
        <div
          className="custom-tooltip"
          style={{
            margin: "0",
            padding: "10px",
            backgroundColor: "var(--result-bg)",
            border: "1px solid var(--result-text)",
            borderRadius: "8px",
            color: "var(--result-text)",
            fontSize: "0.9em",
          }}
        >
          <p className="label" style={{ margin: 0 }}>{`Время: ${label} мин`}</p>
          <p
            className="desc"
            style={{
              margin: "4px 0 0 0",
              color: isRadiantAdvantage ? "var(--good)" : "var(--bad)",
            }}
          >
            {`${leadingTeam}: ${absoluteAdvantage.toFixed(1)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const chartData = [];
  for (let t = 20; t <= 55; t++) {
    const point = interpolate(t);
    if (point) chartData.push(point);
  }

  // compute gradient split offset so the color change aligns with value 0
  let gradientZeroOffset = 0.5;
  if (chartData.length) {
    const advValues = chartData.map((d) => d.advantage);
    const maxAdv = Math.max(...advValues);
    const minAdv = Math.min(...advValues);
    if (maxAdv !== minAdv) {
      const raw = maxAdv / (maxAdv - minAdv);
      // clamp to [0,1]
      gradientZeroOffset = Math.min(1, Math.max(0, raw));
    } else {
      gradientZeroOffset = 0.5;
    }
  }

  return (
    <div className="result-card fade-in">
      <h2>Вероятность победы:</h2>

      <div id="probability-bar">
        <div
          id="radiant-bar"
          className="bar"
          style={{
            width: `${average.Radiant * 100}%`,
            background: "var(--good)",
          }}
        >
          {team1Name}: {(average.Radiant * 100).toFixed(1)}%
        </div>
        <div
          id="dire-bar"
          className="bar"
          style={{ width: `${average.Dire * 100}%`, background: "var(--bad)" }}
        >
          {team2Name}: {(average.Dire * 100).toFixed(1)}%
        </div>
      </div>

      <div style={{ width: "100%", height: 360, marginTop: 30 }}>
        <ResponsiveContainer>
          <AreaChart
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
            <YAxis
              domain={[-100, 100]}
              tickFormatter={(value) => Math.abs(value) + "%"}
            >
              <Label
                value={`Преимущество`}
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip content={CustomTooltip} />
            <defs>
              <linearGradient
                id="advantageGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0" stopColor="var(--good)" stopOpacity={1} />
                <stop
                  offset={String(gradientZeroOffset)}
                  stopColor="var(--good)"
                  stopOpacity={0.5}
                />
                <stop
                  offset={String(gradientZeroOffset)}
                  stopColor="var(--bad)"
                  stopOpacity={0.5}
                />
                <stop offset="1" stopColor="var(--bad)" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="advantage"
              stroke={`url(#advantageGradient)`}
              fill={`url(#advantageGradient)`}
              fillOpacity={1}
              isAnimationActive={false}
              baseLine={0}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
