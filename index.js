import react from '../react-static';

const blah = (e, args) => {
  const element = e;
  const options = args;

  return Array.join(element, options);
};

blah('abc', 'edg');

react.blah();
