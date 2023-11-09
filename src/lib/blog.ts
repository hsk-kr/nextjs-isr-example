export const estimateReadingTime = (text: string) => {
  const estimatedMins = text.length / 200;

  if (estimatedMins < 1) return '< 1 min';

  return `${Math.ceil(estimatedMins)} mins`;
};

export const convertDateFormatForPost = (datetimeStr: string) => {
  const date = new Date(datetimeStr);

  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};
