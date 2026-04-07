function TableSection() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-2">Student Table</h2>
      <table className="border w-full text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Sachin</td>
            <td className="border p-2">20</td>
          </tr>
          <tr>
            <td className="border p-2">Ajay </td>
            <td className="border p-2">22</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default TableSection;