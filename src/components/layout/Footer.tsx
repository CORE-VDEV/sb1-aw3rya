import { useState } from 'react';
import CookieConsent from '../common/CookieConsent';
import ContactForm from '../common/ContactForm';
import ImpressumModal from '../modals/ImpressumModal';
import DatenschutzModal from '../modals/DatenschutzModal';
import FAQModal from '../modals/FAQModal';

export default function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <>
      <footer className="bg-white mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-gray-200 pb-12">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Warum JVA-Info.de?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir setzen auf seriöse, leicht verständliche und aktuelle Informationen, 
                um Mythen zu entkräften und den Dialog rund um den Strafvollzug zu fördern. 
                Mit einem nutzerfreundlichen Aufbau und einer klaren Sprache wollen wir 
                Zugangshürden abbauen und allen Interessierten einen einfachen Einstieg ermöglichen.
              </p>
              <p className="text-gray-600 text-sm mt-4 font-medium">
                JVA-Info.de – Ihr Schlüssel zu Wissen und Verständnis über den deutschen Strafvollzug.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-4">Rechtliches</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setShowImpressum(true)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Impressum
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowDatenschutz(true)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Datenschutz
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowCookieSettings(true)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Cookie-Einstellungen
                    </button>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-4">Service</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Kontakt
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowFAQ(true)}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Häufige Fragen
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} JVA-Info.de • Alle Rechte vorbehalten
          </div>
        </div>
      </footer>

      <CookieConsent 
        show={showCookieSettings} 
        onClose={() => setShowCookieSettings(false)} 
      />

      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />

      <ImpressumModal
        show={showImpressum}
        onClose={() => setShowImpressum(false)}
      />

      <DatenschutzModal
        show={showDatenschutz}
        onClose={() => setShowDatenschutz(false)}
      />

      <FAQModal
        show={showFAQ}
        onClose={() => setShowFAQ(false)}
      />
    </>
  );
}