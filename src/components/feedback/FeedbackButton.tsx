import { MessageSquare } from 'lucide-react';

interface FeedbackButtonProps {
  onClick: () => void;
}

export default function FeedbackButton({ onClick }: FeedbackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
      aria-label="Feedback geben"
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
}