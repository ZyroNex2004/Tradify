export default function MegaMenu() {
  return (
    <div className="absolute top-14 right-0 w-[800px] bg-white border shadow-xl p-6 z-50">
      <h2 className="text-lg font-semibold mb-4">Products Menu</h2>

      <div className="grid grid-cols-4 gap-6 text-sm">
        <div>Kite</div>
        <div>Console</div>
        <div>Kite Connect</div>
        <div>Coin</div>
      </div>
    </div>
  );
}
