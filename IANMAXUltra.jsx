
export default function IANMAXUltra() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-black italic text-red-600 mb-6">
          IANMAX
        </h1>

        <p className="text-xl text-zinc-300 mb-10">
          Premium Entertainment Platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Movies", "TV Shows", "Music"].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold mb-4">{item}</h2>

              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
