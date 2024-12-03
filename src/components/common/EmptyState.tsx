import { ComponentType } from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}

export default function EmptyState({ icon: Icon, title, description }: EmptyStateProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-gray-400" />
      </div>
      <h3 className="text-gray-900 font-medium mb-1">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm">{description}</p>
      )}
    </div>
  );
}