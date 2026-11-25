import { useEffect, useState } from 'react';
import { siteConfig } from '../../data/siteConfig';

function formatNewYorkTime(): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: siteConfig.timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
  } catch {
    return '09:21 AM';
  }
}

interface LocationClockProps {
  theme: 'dark' | 'light';
}

export function LocationClock({ theme }: LocationClockProps) {
  const [time, setTime] = useState<string>(formatNewYorkTime);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatNewYorkTime());
    }, 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={`nav-time ${theme === 'light' ? 'is-light' : ''}`}>
      {siteConfig.locationLabel} {'{'} {time} {'}'}
    </div>
  );
}
