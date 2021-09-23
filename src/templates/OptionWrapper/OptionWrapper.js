import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './style';

const OptionWrapper = (props) => {
  const { contents, buttonName, cansleName, cansleLink, successLink, data } = props;
  const history = useHistory();

  const handleOnClickEvent = () => {
    if (successLink !== '') history.push({ pathname: `${successLink}`, state: { data: data } });
  };
  function text() {
    return;
  }

  return (
    <S.OptionWrapper>
      <p>{contents}</p>
      <div id="buttonWrapper">
        <input
          type="submit"
          onClick={typeof successLink !== 'undefined' ? handleOnClickEvent : text}
          value={buttonName}
        />
        <Link to={cansleLink}>
          <button>{cansleName}</button>
        </Link>
      </div>
    </S.OptionWrapper>
  );
};

export default OptionWrapper;
