import { Map, ChartBar, Info } from '../icons';

interface MainNavigationProps {
  activeView: 'map' | 'statistics' | 'info';
  onViewChange: (view: 'map' | 'statistics' | 'info') => void;
}

export default function MainNavigation({ activeView, onViewChange }: MainNavigationProps) {
  const items = [
    { id: 'map' as const, label: 'Karte', icon: Map },
    { id: 'statistics' as const, label: 'Statistiken', icon: ChartBar },
    { id: 'info' as const, label: 'Info', icon: Info }
  ];

  return (
    <div className="flex gap-2">
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onViewChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeView === id
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}