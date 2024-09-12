const csvParser = jest.fn().mockImplementation((options) => {
  return {
    pipe: jest.fn().mockImplementation((readable) => readable),
  };
});

export default csvParser;
