import { Prison } from '../../types/prison';
import { Info, FileText, Users } from 'lucide-react';

interface InfoSectionProps {
  prisons: Prison[];
}

export default function InfoSection({ prisons }: InfoSectionProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gray-100">
              <Info className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-900">Über das Projekt</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            JVA-Info.de bietet einen umfassenden und transparenten Einblick in das deutsche 
            Justizvollzugssystem. Unsere Mission ist es, durch fundierte Informationen 
            zum Verständnis des Strafvollzugs beizutragen.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gray-100">
              <FileText className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-900">Aktuelle Daten</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• {prisons.length} Justizvollzugsanstalten</li>
            <li>• Detaillierte Besuchsinformationen</li>
            <li>• Regelmäßige Aktualisierungen</li>
            <li>• Offizielle Kontaktdaten</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gray-100">
              <Users className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="font-medium text-gray-900">Zielgruppen</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Angehörige von Inhaftierten</li>
            <li>• Journalisten & Forscher</li>
            <li>• Interessierte Bürger</li>
            <li>• Fachpersonal & Behörden</li>
          </ul>
        </div>
      </div>
    </div>
  );
}