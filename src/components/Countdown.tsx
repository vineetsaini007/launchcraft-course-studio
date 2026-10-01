import { useEffect, useState } from "react";

const closesAt = new Date("2026-10-12T00:00:00+05:30").getTime();
const secondsRemaining = () =>
  Math.max(0, Math.floor((closesAt - Date.now()) / 1000));

export default function Countdown() {
  const [left, setLeft] = useState(secondsRemaining);
  useEffect(() => {
    const timer = window.setInterval(() => setLeft(secondsRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const days = Math.floor(left / 86400);
  const hours = Math.floor((left % 86400) / 3600);
  const minutes = Math.floor((left % 3600) / 60);
  const seconds = left % 60;
  return (
    <div
      className="countdown"
      aria-label={`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds until enrollment closes`}
    >
      {[
        [days, "DAYS"],
        [hours, "HRS"],
        [minutes, "MIN"],
        [seconds, "SEC"],
      ].map(([value, label]) => (
        <div key={label}>
          <b>{String(value).padStart(2, "0")}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
