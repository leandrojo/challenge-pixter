import objectify from './objectify';

interface Options {
  initialSymbol: string;
  handleKeys: (k: any) => string;
}

const defaultOptions = {
  initialSymbol: '#',
  handleKeys: (k: string) => k,
};

function parse(str: string, options: Partial<Options> = {}) {
  const { handleKeys, initialSymbol } = Object.assign(defaultOptions, options);
  return str
    .replace(initialSymbol, '')
    .split('&')
    .map((information: string) => information.split('='))
    .reduce(
      (memo: { string?: any }, pair) => objectify(memo, pair, handleKeys),
      {},
    );
}

const FragmentIdentifier = {
  parse,
};

export default FragmentIdentifier;
