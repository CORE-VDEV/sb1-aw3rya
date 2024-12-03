import { useState } from 'react';

interface CookieConsentProps {
  show: boolean;
  onClose: () => void;
}

export default function CookieConsent({ show, onClose }: CookieConsentProps) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookie-Einstellungen</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Notwendige Cookies</h3>
              <p className="text-sm text-gray-600">
                Diese Cookies sind für die Grundfunktionen der Website erforderlich
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.necessary}
              disabled
              className="rounded border-gray-300"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Analyse Cookies</h3>
              <p className="text-sm text-gray-600">
                Helfen uns zu verstehen, wie Besucher mit der Website interagieren
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
              className="rounded border-gray-300"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Marketing Cookies</h3>
              <p className="text-sm text-gray-600">
                Werden verwendet, um personalisierte Werbung anzuzeigen
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              className="rounded border-gray-300"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
          >
            Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  );
}