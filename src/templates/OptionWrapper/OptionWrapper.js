import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const OptionWrapper = (props) => {
  const { contents, buttonName, cansleName, cansleLink, successLink, data } = props;
  return (
    <S.OptionWrapper>
      <p>{contents}</p>
      <div id="buttonWrapper">
        <Link
          to={{
            pathname: `${successLink}`,
            state: {
              data: data,
            },
          }}
        >
          <input type="submit" form="taxiPotForm" value={buttonName} />
        </Link>
        <Link to={cansleLink}>
          <button>{cansleName}</button>
        </Link>
      </div>
    </S.OptionWrapper>
  );
};

export default OptionWrapper;
