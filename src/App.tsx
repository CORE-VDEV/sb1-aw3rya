import { useState } from 'react';
import { Prison } from './types/prison';
import { prisons } from './data/prisons';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import FeedbackButton from './components/feedback/FeedbackButton';
import FeedbackForm from './components/feedback/FeedbackForm';
import { usePrisonFilters } from './hooks/usePrisonFilters';

export default function App() {
  const [selectedPrison, setSelectedPrison] = useState<Prison | null>(null);
  const { filteredPrisons, setFilters } = usePrisonFilters(prisons);
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e6e6e6' }}>
      <Header />
      <MainContent 
        prisons={filteredPrisons}
        selectedPrison={selectedPrison}
        onPrisonSelect={setSelectedPrison}
        onFilterChange={setFilters}
      />
      <Footer />
      <FeedbackButton onClick={() => setShowFeedback(true)} />
      {showFeedback && <FeedbackForm onClose={() => setShowFeedback(false)} />}
    </div>
  );
}