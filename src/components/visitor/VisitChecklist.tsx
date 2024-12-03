import { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export default function VisitChecklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: '1', text: 'Gültigen Personalausweis mitnehmen', checked: false },
    { id: '2', text: 'Besuchsbestätigung ausdrucken', checked: false },
    { id: '3', text: 'Keine Wertsachen/Elektronik mitnehmen', checked: false },
    { id: '4', text: 'Kleingeld für Automaten einpacken', checked: false },
    { id: '5', text: 'Anfahrtsweg prüfen', checked: false },
    { id: '6', text: '30 Minuten vor Besuchszeit da sein', checked: false },
    { id: '7', text: 'Erlaubte Gegenstände prüfen', checked: false },
    { id: '8', text: 'Besuchsregeln nochmal durchlesen', checked: false }
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Checkliste für den Besuch</h3>
      </div>

      <div className="p-4">
        <div className="space-y-3">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex items-start gap-3 w-full text-left hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              {item.checked ? (
                <CheckSquare className="w-5 h-5 text-gray-900 mt-0.5" />
              ) : (
                <Square className="w-5 h-5 text-gray-400 mt-0.5" />
              )}
              <span className={`text-sm ${item.checked ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                {item.text}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Fortschritt: </span>
            {items.filter(item => item.checked).length} von {items.length} erledigt
          </div>
          <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full transition-all duration-500"
              style={{ width: `${(items.filter(item => item.checked).length / items.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}