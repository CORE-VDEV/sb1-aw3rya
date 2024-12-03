import Modal from './Modal';

interface DatenschutzModalProps {
  show: boolean;
  onClose: () => void;
}

export default function DatenschutzModal({ show, onClose }: DatenschutzModalProps) {
  if (!show) return null;

  return (
    <Modal title="Datenschutzerklärung" onClose={onClose}>
      <div className="prose prose-sm max-w-none">
        <h3>1. Datenschutz auf einen Blick</h3>
        <h4>Allgemeine Hinweise</h4>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
          Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
          werden können.
        </p>

        <h4>Datenerfassung auf dieser Website</h4>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
          Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>

        <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
        <h4>Datenschutz</h4>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
          Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
          gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h4>Hinweis zur verantwortlichen Stelle</h4>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
          JVA-Info.de<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>

        <h3>3. Datenerfassung auf dieser Website</h3>
        <h4>Cookies</h4>
        <p>
          Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser 
          auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot 
          nutzerfreundlicher, effektiver und sicherer zu machen.
        </p>

        <h4>Server-Log-Dateien</h4>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so 
          genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
        </p>
      </div>
    </Modal>
  );
}