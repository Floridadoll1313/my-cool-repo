import { useState, useEffect } from 'react';

/**
 * Hook to verify Stripe Subscription status.
 * @param {string} customerId - The Stripe Customer ID.
 * @returns {object} { isFounder, loading, error }
 */
export const useSubscriptionVerification = (customerId) => {
  const [isFounder, setIsFounder] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!customerId) {
      setLoading(false);
      return;
    }

    const verifyStatus = async () => {
      try {
        setLoading(true);
        // Replace '/api/verify-subscription' with your actual server endpoint
        // that securely calls Stripe's API to retrieve the subscription
        const response = await fetch(`/api/verify-subscription?customerId=${customerId}`);
        
        if (!response.ok) throw new Error('Failed to fetch subscription status');
        
        const data = await response.json();

        // Business Logic: Only 'active' subscriptions with the 'founder' metadata
        // are granted access to the 'Founder' tier content.
        const isActive = data.status === 'active';
        const isFounderTier = data.metadata?.tier === 'founder';

        setIsFounder(isActive && isFounderTier);
      } catch (err) {
        console.error("Stripe verification error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    verifyStatus();
  }, [customerId]);

  return { isFounder, loading, error };
};
