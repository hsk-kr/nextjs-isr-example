export const estimateReadingTime = (text: string) => {
  const estimatedMins = text.length / 200;

  if (estimatedMins < 1) return '< 1 min';

  return `${Math.ceil(estimatedMins)} mins`;
};

export const convertDateFormatForPost = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

export const removeHtmlTags = (html: string) => {
  return html.replace(/<[^>]*>/g, '');
};
