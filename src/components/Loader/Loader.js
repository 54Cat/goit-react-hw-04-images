import {Blocks } from 'react-loader-spinner';

export default function Loader ({ isLoading }) {
  return (
    <Blocks
      visible={isLoading}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};