import React from 'react';
import * as S from './styles';
import yellow_main_logo from '../../assets/images/yellow_main_logo.svg';
import damataxi_logo from '../../assets/images/damataxi_logo.svg';
import android_logo from '../../assets/images/android_logo.svg';
import backend_logo from '../../assets/images/backend_logo.svg';
import design_logo from '../../assets/images/design_logo.svg';
import frontend_logo from '../../assets/images/frontend_logo.svg';
import road from '../../assets/images/road.svg';
import taxi_image from '../../assets/images/taxi_image.png';
import { Link } from 'react-router-dom';

const DeveloperPage = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <img src={yellow_main_logo} alt="" />
        <Link to="/user-main">돌아가기</Link>
      </S.Header>
      <S.ProjectInfo>
        <img src={damataxi_logo} alt="" />
        <S.TextContainer>
          <span>대마택시 프로젝트는</span>
          <p>의무귀가 날에 택시 팟을 잡아서 가고 싶지만 택시 팟이 없어 택시를 혼자 타거나</p>
          <p>버스를 타고 가는 학생들을 위해 모르는 학생들과도 쉽게 모여 택시를 타고 갈 수 있게 하기 위한 UP 프로젝트</p>
        </S.TextContainer>
      </S.ProjectInfo>
      <S.MajorInfo>
        <S.Top>
          <S.Major>
            <img src={backend_logo} alt="" />
            <S.MajorText>
              <span>백엔드</span>
              <p>고도현 / 정고은</p>
            </S.MajorText>
          </S.Major>
          <S.Major>
            <img src={frontend_logo} alt="" />
            <S.MajorText>
              <span>프론트엔드</span>
              <p>김재현 / 박성현</p>
            </S.MajorText>
          </S.Major>
        </S.Top>
        <S.Bottom>
          <S.Major>
            <img src={android_logo} alt="" />
            <S.MajorText>
              <span>안드로이드</span>
              <p>권민정</p>
            </S.MajorText>
          </S.Major>
          <S.Major>
            <img src={design_logo} alt="" />
            <S.MajorText>
              <span>디자인</span>
              <p>권민정</p>
            </S.MajorText>
          </S.Major>
        </S.Bottom>
      </S.MajorInfo>
      <S.RoadImg src={road} alt="" />
      <S.TaxiImg src={taxi_image} alt="" />
    </S.Wrapper>
  );
};

export default DeveloperPage;
