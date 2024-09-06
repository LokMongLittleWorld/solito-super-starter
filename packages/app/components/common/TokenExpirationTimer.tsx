import { useAuth } from 'app/provider/auth';
import { getTokenExpirationTime, isTokenValid } from 'app/utils/jwt';
import { useEffect, useState } from 'react';
import { P } from 'app/design/typography';
import { convertSecondsToHMS } from 'app/utils/common';

const TokenExpirationTimer = () => {
  const { token, logout } = useAuth();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!token) {
      setTimeLeft(null);
      return;
    }

    const expirationTime = getTokenExpirationTime(token);
    const updateTimer = () => {
      const now = Date.now();
      const remaining = Math.max(0, expirationTime - now);
      setTimeLeft(Math.round(remaining / 1000)); // Convert to seconds

      if (remaining <= 0 || !isTokenValid(token)) {
        logout();
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, [token, logout]);

  if (!timeLeft) return null;

  return <P>Token will be expired in: {convertSecondsToHMS(timeLeft)}</P>;
};

export default TokenExpirationTimer;
