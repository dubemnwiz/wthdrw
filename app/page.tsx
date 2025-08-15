export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to wthdrw!</h1>
      <input type="file" accept="audio/*" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
      <p className="text-lg text-center">
        This app generates a print using an audio file.
      </p>
      <div className="text-sm text-gray-500">
        © {new Date().getFullYear()} wthdrw. All rights reserved.
      </div>
    </div>
  );
}
