// src/components/Modal.tsx
'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
}

export default function Modal({ isOpen, onClose, title = "www.cariv.com :", message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[320px] overflow-hidden rounded-lg bg-white shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="p-6 text-center">
          <p className="mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
          <p className="mb-6 text-base font-medium text-gray-800 leading-relaxed">{message}</p>
          <button
            onClick={onClose}
            className="w-full rounded-xs bg-primary py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-dark active:scale-95"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}