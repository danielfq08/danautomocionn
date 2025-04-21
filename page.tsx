
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 border-b flex items-center justify-between">
        <img src="/logo.png" alt="Danautomoción Logo" className="h-12" />
        <div className="space-x-4">
          <button className="text-sm font-medium">Español</button>
          <button className="text-sm font-medium">English</button>
        </div>
      </header>

      <section className="px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Danautomoción</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Somos una empresa enfocada en ventas, familia, sueños y metas. Construimos
          soluciones modernas para nuestros clientes en ambos idiomas.
        </p>
      </section>

      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contáctanos</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </section>

      <footer className="p-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Danautomoción LLC. Todos los derechos reservados.
      </footer>
    </main>
  );
}
