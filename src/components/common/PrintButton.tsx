import { Printer } from 'lucide-react';

interface PrintButtonProps {
  onPrint: () => void;
}

export default function PrintButton({ onPrint }: PrintButtonProps) {
  return (
    <button
      onClick={onPrint}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      aria-label="Drucken"
    >
      <Printer className="w-4 h-4" />
      <span>Drucken</span>
    </button>
  );
}