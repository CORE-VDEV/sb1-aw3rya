import { Heart, Coffee, Gift } from '../icons';

export default function DonationSection() {
  return (
    <div className="rounded-lg overflow-hidden mt-8" style={{ backgroundColor: '#1a1f2e' }}>
      <div className="text-center p-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: '#e6e6e6' }}>
          <Heart className="w-6 h-6 text-gray-700" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Unterstützen Sie unser Projekt</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Dieses Projekt ist eine freiwillige Initiative zur Transparenz im deutschen Justizvollzug. 
          50% aller Spenden werden an gemeinnützige Organisationen für Resozialisierung weitergeleitet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-6 pb-8">
        {[
          { icon: Coffee, amount: '5€', title: 'Kleiner Beitrag', description: 'Unterstützen Sie uns mit einem kleinen Beitrag in Höhe eines Kaffees' },
          { icon: Heart, amount: '25€', title: 'Standard Spende', description: 'Der ideale Beitrag zur Unterstützung unserer laufenden Arbeit', highlight: true },
          { icon: Gift, amount: '50€', title: 'Großzügige Spende', description: 'Für alle, die das Projekt besonders unterstützen möchten' }
        ].map((option, index) => (
          <div 
            key={index} 
            className={`rounded-xl p-6 border border-gray-700 relative ${
              option.highlight ? 'bg-gray-800' : 'bg-gray-800/50'
            }`}
          >
            {option.highlight && (
              <div className="absolute -top-2 right-4 px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                Beliebt
              </div>
            )}
            <div className="flex items-center justify-center w-10 h-10 rounded-full mb-4" style={{ backgroundColor: '#e6e6e6' }}>
              <option.icon className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-semibold text-white mb-2">{option.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{option.description}</p>
            <button 
              className="w-full px-4 py-2 rounded-lg transition-colors border border-gray-700 hover:bg-gray-700/50"
              style={{ backgroundColor: '#e6e6e6' }}
            >
              {option.amount} spenden
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 p-6 text-center bg-gray-800/50">
        <p className="text-gray-300">
          50% Ihrer Spende geht direkt an Organisationen für Resozialisierung.
        </p>
        <p className="text-gray-400 mt-2">
          Alle Spenden sind steuerlich absetzbar. Sie erhalten automatisch eine Spendenquittung.
        </p>
      </div>
    </div>
  );
}