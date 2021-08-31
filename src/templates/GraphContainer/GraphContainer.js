import React from 'react';
import * as S from './style';

const GraphContainer = (props) => {
  const { reserve, all, width, height, left } = props;

  const percentFunc = (reserve, all) => {
    //%값 계산해주는 함수
    if (reserve < 1 || reserve > all) {
      console.log(`올바른 값이 아닙니다`);
      return;
    }
    var result = (reserve / all) * 100;
    return result;
  };

  return (
    <S.GraphContainer filled={percentFunc(reserve, all)} left={left} width={width} height={height}>
      <p>현재 인원수 : </p>
      <div className="yellowBorderBox">
        <p>
          {reserve}/{all}
        </p>
        <div className="filledBox"></div>
      </div>
    </S.GraphContainer>
  );
};

export default GraphContainer;