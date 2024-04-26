import dayjs from 'dayjs';
export const dateSort = (arr) => {
  return arr
    .sort((a, b) => a.time - b.time)
    .map((item) => ({
      time: dayjs(item.time).format('YYYY-MM-DD'),
      value: item.value,
    }));
};
