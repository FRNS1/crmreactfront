import CircularProgress from '@mui/material/CircularProgress';

import './style.css'

function Loading() {
  return (
    <div className='container-loading'>
      <CircularProgress />
    </div>
  );
}

export default Loading;