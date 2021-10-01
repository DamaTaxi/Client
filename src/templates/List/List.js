import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { requestWithAccessToken } from '../../lib/axios';
import * as S from './styles';

const List = ({ getListModal, title, pageNum }) => {
  const [reportPageIndex, setReportPageIndex] = useState(0);
  const [reportData, setReportData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    requestWithAccessToken('GET', `/error-report?size=5&page=${reportPageIndex}`)
      .then((res) => {
        setReportData(res.content);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reportPageIndex]);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ListContainer>
        {reportData.map((ele) => (
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
              if (reportPageIndex > 0) {
                setReportPageIndex(reportPageIndex - 1);
              } else {
                setReportPageIndex(0);
              }
            }}
          >
            <S.Left />
          </span>
          {pageNum.map((ele, index) => (
            <span
              onClick={() => {
                setReportPageIndex(index);
              }}
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
              if (reportPageIndex < totalPage - 1) {
                setReportPageIndex(reportPageIndex + 1);
              } else {
                setReportPageIndex(totalPage - 1);
              }
            }}
          >
            <S.Right />
          </span>
          <span
            onClick={() => {
              setReportPageIndex(totalPage - 1);
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
