import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import * as S from './styles';

const List = ({ getListModal, title, list, pageNum, reportPageIndex, setReportPageIndex, totalPage }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ListContainer>
        {list.map((ele) => (
          <S.List
            onClick={() => {
              getListModal(ele.id);
            }}
            key={ele.id}
          >
            <span>{ele.id}</span>
            <span>{ele.title}</span>
          </S.List>
        ))}
        <S.PageNum>
          <span
            onClick={() => {
              setReportPageIndex(0);
            }}
          >
            <S.Left />
            <S.Left />
          </span>
          <span
            onClick={() => {
              setReportPageIndex(reportPageIndex - 1);
            }}
          >
            <S.Left />
          </span>
          {pageNum.map((ele, index) => (
            <span
              key={index}
              style={
                index === reportPageIndex
                  ? { backgroundColor: '#FFC044', color: 'white' }
                  : { backgroundColor: 'white', color: '#080606' }
              }
            >
              {ele}
            </span>
          ))}
          <span
            onClick={() => {
              setReportPageIndex(reportPageIndex + 1);
            }}
          >
            <S.Right />
          </span>
          <span
            onClick={() => {
              setReportPageIndex(totalPage);
            }}
          >
            <S.Right />
            <S.Right />
          </span>
        </S.PageNum>
      </S.ListContainer>
    </S.Wrapper>
  );
};

export default List;
