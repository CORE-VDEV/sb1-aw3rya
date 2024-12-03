import { Prison } from '../icons';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#e6e6e6' }}>
              <Prison className="w-5 h-5 text-gray-700" />
            </div>
            <div>
              <h1 className="text-lg font-medium text-gray-900">JVA Übersicht</h1>
              <p className="text-xs text-gray-500">Justizvollzugsanstalten in Deutschland</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">Offizielles Verzeichnis</div>
        </div>
      </div>
    </header>
  );
}