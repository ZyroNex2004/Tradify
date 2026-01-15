import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function Charts() {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 350,
      layout: {
        background: { color: "#ffffff" },
        textColor: "#333",
      },
      grid: {
        vertLines: { color: "#eee" },
        horzLines: { color: "#eee" },
      },
      rightPriceScale: {
        borderColor: "#ccc",
      },
      timeScale: {
        borderColor: "#ccc",
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#16a34a",
      downColor: "#dc2626",
      borderUpColor: "#16a34a",
      borderDownColor: "#dc2626",
      wickUpColor: "#16a34a",
      wickDownColor: "#dc2626",
    });

    // Sample data (replace later with real API data)
    candleSeries.setData([
      { time: "2025-01-01", open: 100, high: 110, low: 95, close: 105 },
      { time: "2025-01-02", open: 105, high: 115, low: 100, close: 110 },
      { time: "2025-01-03", open: 110, high: 120, low: 108, close: 118 },
      { time: "2025-01-04", open: 118, high: 125, low: 112, close: 115 },
      { time: "2025-01-05", open: 115, high: 130, low: 114, close: 128 },
    ]);

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Stock Chart</h2>
      <div ref={chartContainerRef} />
    </div>
  );
}
