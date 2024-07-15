import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5E1DA4D] to-[#D8CAE14D]">
        <div className="p-6 mt-4">
          <h1 className="text-2xl font-semibold mb-4">
            View / Terminate GIRO arrangements
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Unsuccessful/Terminated GIRO arrangements will only be shown on
            Mobile and Internet Banking for up to 6 months and thereafter
            auto-deleted.
          </p>
          <div className="mb-4">
            <span className="text-gray-500">From</span>
            <div className="flex flex-row justify-between">
              <div>
                <div className="text-gray-700 font-semibold">360 Account</div>
                <div className="text-gray-500">001-23456-789</div>
              </div>
              <a href="#" className="text-blue-600">
                Change
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 flex-grow">
          <h2 className="text-lg font-semibold mb-2">Your GIRO arrangements</h2>

          <div className="flex space-x-2 mb-4">
            <button className="px-2 py-2 text-center text-white text-xs bg-red-600 rounded-full">
              Active
            </button>

            <button className="px-2 py-2 text-center text-gray-400 text-xs rounded-full border border-gray-300">
              In Progress
            </button>

            <button className="px-2 py-2 text-center text-gray-400 text-xs rounded-full border border-gray-300">
              Unsuccessful / Terminated
            </button>
          </div>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">OCBC Credit Cards</h3>
              <p className="text-gray-700">1234-5678-2244-6688</p>
              <p className="text-gray-500">Pay full amount</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">IRAS - GST</h3>
              <p className="text-gray-700">1234567890</p>
              <p className="text-gray-500">Pay full amount annually</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">Ang Mo Kio Town Council</h3>
              <p className="text-gray-700">1234567890</p>
              <p className="text-gray-500">Pay minimum amount</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">OCBC Credit Cards</h3>
              <p className="text-gray-700">1234-5678-2244-6688</p>
              <p className="text-gray-500">Pay full amount</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">IRAS - GST</h3>
              <p className="text-gray-700">1234567890</p>
              <p className="text-gray-500">Pay full amount annually</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">Ang Mo Kio Town Council</h3>
              <p className="text-gray-700">1234567890</p>
              <p className="text-gray-500">Pay minimum amount</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">OCBC Credit Cards</h3>
              <p className="text-gray-700">1234-5678-2244-6688</p>
              <p className="text-gray-500">Pay full amount</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">IRAS - GST</h3>
              <p className="text-gray-700">1234567890</p>
              <p className="text-gray-500">Pay full amount annually</p>
            </div>
          </Link>

          <Link href="/details">
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold">Ang Mo Kio Town Council</h3>
              <p className="text-gray-700">1234567890</p>
              <p className="text-gray-500">Pay minimum amount</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
