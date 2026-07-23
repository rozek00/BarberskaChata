import { handleSave } from "./actions";
import { getData, pricingFields } from "./data";

export default async function AdminPage() {
  const data = await getData();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Panel Administracyjny</h1>
      <p className="text-lg text-gray-700 mb-8">Edytuj parametry wizytówki i zarządzaj treścią strony.</p>
      <form className="w-full max-w-md bg-white p-8 rounded shadow-md" action={handleSave}>
        {pricingFields.map((field) => (
          <div className="mb-4" key={field.key}>
            <label htmlFor={field.key} className="block text-gray-700 font-bold mb-2">
              {field.label}
            </label>
            <input
              type="text"
              id={field.key}
              name={field.key}
              defaultValue={data[field.key]}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Zapisz zmiany
        </button>
      </form>
    </div>
  );
}