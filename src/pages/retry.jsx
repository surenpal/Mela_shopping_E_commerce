import React from 'react'

export const retry = () => {
  return (
    <div>retry</div>
  )
}
import React, { useState } from 'react';

type RetryProps = {
  onRetry?: (e?: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  label?: string;
  disabled?: boolean;
};

export const Retry: React.FC<RetryProps> = ({ onRetry, label = 'Retry', disabled: disabledProp = false }) => {
  const [loading, setLoading] = useState(false);
  const disabled = disabledProp || loading;

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    try {
      setLoading(true);
      await onRetry?.(e);
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