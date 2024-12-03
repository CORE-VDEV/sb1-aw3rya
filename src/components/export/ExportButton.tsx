import { Prison } from '../../types/prison';
import { Download } from 'lucide-react';

interface ExportButtonProps {
  prisons: Prison[];
  format: 'csv' | 'json';
}

export default function ExportButton({ prisons, format }: ExportButtonProps) {
  const exportData = () => {
    let content: string;
    let filename: string;
    
    if (format === 'csv') {
      const headers = ['Name', 'Typ', 'Sicherheitsstufe', 'Insassen', 'Kapazität', 'Adresse'].join(',');
      const rows = prisons.map(prison => [
        prison.name,
        prison.type,
        prison.securityLevel,
        prison.inmates,
        prison.capacity,
        prison.contact.address
      ].join(','));
      
      content = [headers, ...rows].join('\n');
      filename = 'jva-daten.csv';
    } else {
      content = JSON.stringify(prisons, null, 2);
      filename = 'jva-daten.json';
    }

    const blob = new Blob([content], { type: `text/${format}` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportData}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Download className="w-4 h-4" />
      <span>Als {format.toUpperCase()} exportieren</span>
    </button>
  );
}