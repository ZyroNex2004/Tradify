import MainLayout from "../layouts/MainLayout";

export default function Portfolio() {
  const holdings = [
    { symbol: "RELIANCE", qty: 10, buyPrice: 2300, currentPrice: 2450 },
    { symbol: "TCS", qty: 5, buyPrice: 3200, currentPrice: 3350 },
    { symbol: "INFY", qty: 8, buyPrice: 1400, currentPrice: 1380 },
  ];

  const calculatePL = (buy, current, qty) => {
    return (current - buy) * qty;
  };

  return (
    <MainLayout>
      <h1 className="text-xl font-semibold mb-4">Portfolio</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Stock</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Buy Price</th>
              <th className="p-3">Current Price</th>
              <th className="p-3">P/L</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock, index) => {
              const pl = calculatePL(
                stock.buyPrice,
                stock.currentPrice,
                stock.qty
              );

              return (
                <tr key={index} className="border-t">
                  <td className="p-3 font-medium">{stock.symbol}</td>
                  <td className="p-3">{stock.qty}</td>
                  <td className="p-3">₹{stock.buyPrice}</td>
                  <td className="p-3">₹{stock.currentPrice}</td>
                  <td
                    className={`p-3 font-semibold ${
                      pl >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ₹{pl}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
