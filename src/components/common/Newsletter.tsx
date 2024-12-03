import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg border p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Mail className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold">Newsletter</h3>
      </div>
      
      {subscribed ? (
        <div className="text-center py-4">
          <p className="text-green-600 font-medium">Vielen Dank für Ihre Anmeldung!</p>
          <p className="text-sm text-gray-600 mt-2">
            Sie erhalten in Kürze eine Bestätigungs-E-Mail.
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">
            Bleiben Sie informiert über Aktualisierungen und neue Funktionen.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ihre E-Mail-Adresse"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Anmelden
            </button>
          </form>
        </>
      )}
    </div>
  );
}