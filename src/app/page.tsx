import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Auto Parts
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Choisissez la marque de votre voiture
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des pièces"
              className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Car Brands Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Peugeot', color: 'bg-blue-500' },
            { name: 'Renault', color: 'bg-yellow-500' },
            { name: 'Toyota', color: 'bg-red-500' },
            { name: 'Honda', color: 'bg-green-500' },
            { name: 'Ford', color: 'bg-blue-600' },
            { name: 'BMW', color: 'bg-gray-800' },
          ].map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full ${brand.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {brand.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Boutique
                    </p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <h3 className="font-semibold text-lg mb-2">Mon véhicule</h3>
            <p className="text-blue-100 text-sm mb-3">
              Informations du véhicule
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
              Ajouter un véhicule
            </button>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <h3 className="font-semibold text-lg mb-2">Historique d'entretien</h3>
            <p className="text-green-100 text-sm mb-3">
              Ajouter un entretien
            </p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors">
              Ajouter un entretien
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
