import React, { useState } from 'react';

export const SimpleRetry = () => <div>retry</div>;

export const Retry = ({ onRetry, label = 'Retry', disabled: disabledProp = false }) => {
  const [loading, setLoading] = useState(false);
  const disabled = disabledProp || loading;

  const handleClick = async (e) => {
    if (disabled) return;
    try {
      setLoading(true);
      if (onRetry) await onRetry(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button type="button" onClick={handleClick} disabled={disabled} aria-busy={loading} aria-disabled={disabled}>
      {loading ? 'Retrying…' : label}
    </button>
  );
};

export default Retry;