import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const getNotesKey = (subjectId) => `notes_subject_${subjectId}`;

const TranslatePage = () => {
  const location = useLocation();
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [translationWords, setTranslationWords] = useState([]);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [pdfText, setPdfText] = useState('');

  // Try to get note from location.state or reconstruct from localStorage
  useEffect(() => {
    if (location.state && location.state.note) {
      setNote(location.state.note);
      setPdfText(location.state.note.pdfText || '');
    } else {
      // Try to find note in localStorage (search all subjects)
      let found = null;
      for (let i = 1; i <= 10; i++) { // assume max 10 subjects
        const notesKey = getNotesKey(i);
        const storedNotes = localStorage.getItem(notesKey);
        if (storedNotes) {
          const notes = JSON.parse(storedNotes);
          const n = notes.find(n => String(n.id) === String(noteId));
          if (n) {
            found = n;
            break;
          }
        }
      }
      if (found) {
        setNote(found);
        setPdfText(found.pdfText || '');
      } else {
        navigate('/dashboard');
      }
    }
  }, [location.state, noteId, navigate]);

  // Prepare translation words
  useEffect(() => {
    if (pdfText) {
      const words = pdfText.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean);
      setTranslationWords(words);
      setCurrentWordIdx(0);
    }
  }, [pdfText]);

  const currentWord = translationWords[currentWordIdx];
  const videoSrc = currentWord ? `/words/${currentWord.toUpperCase()}_1.mp4` : null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* PDF Text Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">PDF Text</h2>
        <div className="bg-white rounded-xl shadow p-6 max-w-3xl text-lg leading-relaxed whitespace-pre-wrap">
          {pdfText
            ? pdfText
            : <span className="text-gray-400">No text extracted from PDF.</span>}
        </div>
      </div>
      {/* Translation Modal Floating at Bottom Right */}
      {translationWords.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50 flex items-end justify-end">
          <div className="bg-gradient-to-br from-primary-100 via-white to-secondary-100 rounded-3xl shadow-2xl px-2 pt-1 pb-2 max-w-2xl w-[480px] relative flex flex-col items-stretch justify-start border-4 border-primary-300 hover:scale-105 transition-transform duration-300 h-auto">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => navigate(-1)}
            >
              ✕
            </button>
            <h3 className="text-3xl font-extrabold mb-2 text-center text-primary-700 tracking-tight drop-shadow-lg">Sign Language Translation</h3>
            {currentWordIdx < translationWords.length ? (
              <>
                <div className="text-2xl font-bold text-blue-700 text-center animate-pulse">
                  {currentWord ? currentWord : '...'}
                </div>
                <div className="w-full flex items-center justify-center">
                  {videoSrc ? (
                    <video
                      key={currentWord}
                      src={videoSrc}
                      autoPlay
                      controls={false}
                      className="w-80 h-[28rem] rounded-2xl border-4 border-primary-200 shadow-xl bg-white object-contain m-0"
                      style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)' }}
                      onEnded={() => {
                        if (currentWordIdx < translationWords.length - 1) {
                          setCurrentWordIdx(idx => idx + 1);
                        }
                      }}
                      onError={() => {
                        if (currentWordIdx < translationWords.length - 1) {
                          setCurrentWordIdx(idx => idx + 1);
                        } else {
                          setCurrentWordIdx(translationWords.length);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-80 h-[28rem] flex items-center justify-center bg-gray-100 rounded-2xl border-4 border-primary-100 text-gray-400 text-7xl m-0">
                      ?
                    </div>
                  )}
                </div>
                {/* Progress Bar */}
                <div className="w-full px-4 mb-2">
                  <div className="h-2 rounded-full bg-primary-100 overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full transition-all duration-300"
                      style={{ width: `${((currentWordIdx + 1) / translationWords.length) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">
                  Word {currentWordIdx + 1} of {translationWords.length}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="text-5xl mb-4 text-primary-600 animate-bounce">🎉</div>
                <div className="text-2xl font-bold mb-2 text-primary-700">Translation complete!</div>
                <button
                  className="mt-4 px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow hover:bg-primary-700 transition text-lg font-semibold"
                  onClick={() => navigate(-1)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslatePage; 