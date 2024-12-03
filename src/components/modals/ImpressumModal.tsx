import Modal from './Modal';

interface ImpressumModalProps {
  show: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ show, onClose }: ImpressumModalProps) {
  if (!show) return null;

  return (
    <Modal title="Impressum" onClose={onClose}>
      <div className="prose prose-sm max-w-none">
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>
          JVA-Info.de<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>

        <h3>Vertreten durch</h3>
        <p>Max Mustermann</p>

        <h3>Registereintrag</h3>
        <p>
          Eintragung im Handelsregister<br />
          Registergericht: Amtsgericht Musterstadt<br />
          Registernummer: HRB 12345
        </p>

        <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
        <p>
          Max Mustermann<br />
          Musterstraße 123<br />
          12345 Musterstadt
        </p>

        <h3>Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          https://ec.europa.eu/consumers/odr
          Unsere E-Mail-Adresse finden Sie im Kontaktformular.
        </p>

        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
          Tätigkeit hinweisen.
        </p>
      </div>
    </Modal>
  );
}