import { useState } from 'react';
import { BookOpen, Briefcase, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

interface RehabilitationInfoProps {
  programs: {
    education: string[];
    work: string[];
    rehabilitation: string[];
  };
}

export default function RehabilitationInfo({ programs }: RehabilitationInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <button 
          className="flex items-center justify-between w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Resozialisierung & Bildung</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-6">
          {/* Bildungsangebote */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-gray-600" />
              <h4 className="text-sm font-medium text-gray-900">Bildungsangebote</h4>
            </div>
            <ul className="space-y-2">
              {programs.education.map((program, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="select-none">•</span>
                  <span>{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arbeitsmöglichkeiten */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-gray-600" />
              <h4 className="text-sm font-medium text-gray-900">Arbeitsmöglichkeiten</h4>
            </div>
            <ul className="space-y-2">
              {programs.work.map((job, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="select-none">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resozialisierungsprogramme */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-gray-600" />
              <h4 className="text-sm font-medium text-gray-900">Resozialisierungsprogramme</h4>
            </div>
            <ul className="space-y-2">
              {programs.rehabilitation.map((program, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="select-none">•</span>
                  <span>{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}