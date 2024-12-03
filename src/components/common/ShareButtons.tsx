import { Share2, Facebook, Twitter, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link wurde in die Zwischenablage kopiert!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 flex items-center gap-2">
        <Share2 className="w-4 h-4" /> Teilen:
      </span>
      
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="Auf Facebook teilen"
      >
        <Facebook className="w-5 h-5" />
      </a>
      
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="Auf Twitter teilen"
      >
        <Twitter className="w-5 h-5" />
      </a>
      
      <button
        onClick={copyToClipboard}
        className="text-blue-600 hover:text-blue-700 transition-colors"
        aria-label="Link kopieren"
      >
        <Link2 className="w-5 h-5" />
      </button>
    </div>
  );
}