export default (
  callback: (...params: any[]) => void,
  time: number = 250,
  interval: number,
) => (...args: any[]) => {
  clearTimeout(interval);
  interval = setTimeout(() => callback(...args), time);
};
