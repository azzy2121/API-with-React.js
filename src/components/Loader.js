import loaderImg from '.././assets/loader.png'
import styled from 'styled-components';

const Animation = styled.div`

.u-flash {
    animation: flash 5000ms infinite;
  }

`;

const Loader = () => {

    return (
      <Animation>
      <div className="text-center my-5">
        <div className="u-flash">
        <img src={loaderImg} alt="loader" width="50" height="50" />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      </Animation>
    );
  }
  
  export default Loader;