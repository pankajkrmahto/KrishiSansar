import React from 'react';
import { useToast } from '../context/ToastContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast-item toast-${toast.type}`}>
          <span className="toast-icon">
            {toast.type === 'success' ? '✔' : toast.type === 'error' ? '✕' : 'ℹ'}
          </span>
          <span className="toast-msg">{toast.message}</span>
          <button
            type="button"
            className="toast-close"
            onClick={() => removeToast(toast.id)}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;

