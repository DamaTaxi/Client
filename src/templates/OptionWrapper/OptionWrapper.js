import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const OptionWrapper = (props) => {
  const { contents, buttonName, cansleName, link } = props;
  return (
    <S.OptionWrapper>
      <p>{contents}</p>
      <div id="buttonWrapper">
        <input type="submit" form="taxiPotForm" value={buttonName} />
        <Link to={link}>
          <button>{cansleName}</button>
        </Link>
      </div>
    </S.OptionWrapper>
  );
};

export default OptionWrapper;
