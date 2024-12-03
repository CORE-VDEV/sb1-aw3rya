import { useState } from 'react';
import { X } from 'lucide-react';

interface FeedbackFormProps {
  onClose: () => void;
}

export default function FeedbackForm({ onClose }: FeedbackFormProps) {
  const [feedbackType, setFeedbackType] = useState<'suggestion' | 'bug' | 'content'>('suggestion');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde später die Feedback-Verarbeitung implementiert
    console.log({ feedbackType, message, email });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-lg max-w-lg w-full">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Feedback geben</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Art des Feedbacks
            </label>
            <select
              value={feedbackType}
              onChange={(e) => setFeedbackType(e.target.value as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              required
            >
              <option value="suggestion">Verbesserungsvorschlag</option>
              <option value="bug">Fehler melden</option>
              <option value="content">Inhaltlicher Hinweis</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ihre Nachricht
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              required
              placeholder="Beschreiben Sie Ihr Anliegen..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail (optional)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              placeholder="Für Rückmeldungen zu Ihrem Feedback"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800"
            >
              Feedback senden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}