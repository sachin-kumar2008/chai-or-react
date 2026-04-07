function CardSection() {
  return (
    <div className="p-6 flex gap-55 flex-wrap justify-center ">

      {/* Card 1 */}
      <div className="w-74 bg-purple-400 shadow-md rounded-xl p-4 hover:shadow-x2 transition border">
        <h3 className="text-lg font-semibold mb-2">Card One</h3>
        <p className="text-gray-600 text-sm">
          Ye simple card hai jo tum project me use kar sakte ho.
        </p>
        <button className="mt-3 bg-blue-500 text-white px-3 py-1 rounded">
          Read
        </button>
      </div>

      <div className="w-74 bg-purple-400 shadow-md rounded-xl p-4 hover:shadow-x2 transition border">
        <h3 className="text-lg font-semibold mb-2">Card Two</h3>
        <p className="text-gray-600 text-sm">
          Clean design aur responsive layout ke sath.
        </p>
        <button className="mt-3 bg-green-500 text-white px-3 py-1 rounded">
          View
        </button>
      </div>

      <div className="w-74 bg-purple-400 shadow-md rounded-xl p-4 hover:shadow-x2 transition border">
        <h3 className="text-lg font-semibold mb-2">Card Three</h3>
        <p className="text-gray-600 text-sm">
          Easily customize kar sakte ho apne project ke hisab se.
        </p>
        <button className="mt-3 bg-red-500 text-white px-3 py-1 rounded">
          Explore
        </button>
      </div>

    </div>
  );
}

export default CardSection;