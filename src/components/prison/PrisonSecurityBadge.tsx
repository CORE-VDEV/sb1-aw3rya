import { Prison } from '../../types/prison';

interface PrisonSecurityBadgeProps {
  level: Prison['securityLevel'];
}

export default function PrisonSecurityBadge({ level }: PrisonSecurityBadgeProps) {
  const colors = {
    niedrig: 'bg-gray-100 text-gray-700',
    mittel: 'bg-gray-200 text-gray-800',
    hoch: 'bg-gray-300 text-gray-900'
  };

  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${colors[level]}`}>
      {level}
    </span>
  );
}