import Modal from './Modal';

interface FAQModalProps {
  show: boolean;
  onClose: () => void;
}

export default function FAQModal({ show, onClose }: FAQModalProps) {
  if (!show) return null;

  const faqs = [
    {
      question: "Was ist der Zweck von JVA-Info.de?",
      answer: "JVA-Info.de bietet einen umfassenden Überblick über alle Justizvollzugsanstalten in Deutschland. Wir stellen transparent und neutral Informationen über Standorte, Kapazitäten, Sicherheitsstufen und Besuchsregelungen zur Verfügung."
    },
    {
      question: "Wie aktuell sind die Daten?",
      answer: "Unsere Daten werden regelmäßig aktualisiert und stammen aus offiziellen Quellen der Justizvollzugsanstalten und Justizministerien. Das letzte Aktualisierungsdatum wird bei jeder JVA angezeigt."
    },
    {
      question: "Kann ich Besuchszeiten online buchen?",
      answer: "Nein, JVA-Info.de ist ein reines Informationsportal. Besuchstermine müssen direkt bei der jeweiligen JVA vereinbart werden. Wir stellen jedoch alle notwendigen Kontaktinformationen zur Verfügung."
    },
    {
      question: "Wie kann ich fehlerhafte Informationen melden?",
      answer: "Über unser Kontaktformular können Sie uns auf Fehler oder Aktualisierungsbedarf hinweisen. Wir überprüfen jeden Hinweis sorgfältig und aktualisieren die Informationen entsprechend."
    },
    {
      question: "Werden personenbezogene Daten von Inhaftierten angezeigt?",
      answer: "Nein, wir zeigen ausschließlich allgemeine Informationen über die Einrichtungen an. Personenbezogene Daten von Inhaftierten werden aus Datenschutzgründen nicht veröffentlicht."
    },
    {
      question: "Wie finanziert sich JVA-Info.de?",
      answer: "JVA-Info.de finanziert sich durch freiwillige Spenden und arbeitet unabhängig. 50% aller Spenden fließen direkt in Projekte zur Resozialisierung."
    },
    {
      question: "Kann ich die Daten für wissenschaftliche Zwecke nutzen?",
      answer: "Ja, unsere Daten können für wissenschaftliche und journalistische Zwecke unter Angabe der Quelle verwendet werden. Für detaillierte Datensätze kontaktieren Sie uns bitte direkt."
    },
    {
      question: "Gibt es eine API für die Daten?",
      answer: "Derzeit bieten wir keine öffentliche API an. Bei spezifischen Anfragen für größere Projekte kontaktieren Sie uns bitte über das Kontaktformular."
    }
  ];

  return (
    <Modal title="Häufig gestellte Fragen" onClose={onClose}>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <h3 className="text-base font-medium text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </Modal>
  );
}