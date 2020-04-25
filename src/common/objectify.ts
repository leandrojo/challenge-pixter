export default function objectify(
  obj: { string?: any },
  [key, value]: string[],
  handleKeys: (k: any) => any = (k) => k,
) {
  return { ...obj, [handleKeys(key)]: value };
}
