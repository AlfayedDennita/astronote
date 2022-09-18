import getString from './strings';

export const formatDate = (date, locale = 'en') => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Date(date).toLocaleDateString(locale, options);
};

export const truncateText = (text, maxLength) => (text.length > maxLength ? `${text.substring(0, maxLength - 3)}...` : text);

export const getGreeting = (locale = 'en') => {
  const hours = new Date().getHours();
  const getStringLocale = (id) => getString(id, locale);
  let greeting = '';

  switch (true) {
    case hours < 5:
      greeting = getStringLocale(62);
      break;
    case hours < 12:
      greeting = getStringLocale(59);
      break;
    case hours < 15:
      greeting = getStringLocale(60);
      break;
    case hours < 18:
      greeting = getStringLocale(61);
      break;
    default:
      greeting = getStringLocale(62);
  }

  return greeting;
};
