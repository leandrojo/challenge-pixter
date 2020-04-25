import axios from 'axios';

const fetch = async (q: string, startIndex: number = 0): Promise<any> => {
  const options = {
    params: {
      q,
      startIndex,
    },
  };

  try {
    const response = await axios.get(
      'https://www.googleapis.com/books/v1/volumes',
      options,
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default {
  fetch,
};
