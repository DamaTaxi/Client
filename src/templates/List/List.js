import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { requestWithAccessToken } from '../../lib/axios';
import * as S from './styles';

const List = ({ getListModal, title, type }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageData, setPageData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [pageDepth, setPageDepth] = useState(0);
  const FinalPage = [];
  const pageLengthArray = [];

  useEffect(() => {
    requestWithAccessToken('GET', `/${type}?size=5&page=${pageIndex}`)
      .then((res) => {
        setPageData(res.content);
        setTotalPage(res.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageIndex]);

  for (let i = 0; i < totalPage; i++) {
    pageLengthArray.push(i + 1);
  }
  for (let i = 0; i < pageLengthArray.length; i += 5) {
    FinalPage.push(pageLengthArray.slice(i, i + 5));
  }

  const nextPage = () => {
    if (pageIndex >= totalPage) {
      return;
    } else {
      setPageIndex(pageIndex + 1);
    }
  };

  const pageClick = (e) => {
    setPageIndex(e.target.innerHTML - 1);
  };

  const prevPage = () => {
    if (pageIndex < 1) {
      return;
    } else {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ListContainer>
        {pageData.map((ele) => (
          <S.List
            onClick={() => {
              getListModal(ele.id, type);
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
              setPageIndex(0);
            }}
          >
            <S.Left />
            <S.Left />
          </span>
          <span onClick={prevPage}>
            <S.Left />
          </span>
          {FinalPage[0] &&
            FinalPage[pageDepth].map((ele, index) => {
              if (pageIndex >= Math.max(...FinalPage[pageDepth])) {
                setPageDepth(pageDepth + 1);
              } else if (pageIndex + 1 < Math.min(...FinalPage[pageDepth]) && pageDepth !== 0) {
                setPageDepth(pageDepth - 1);
              }
              return (
                <span
                  onClick={pageClick}
                  key={index}
                  style={
                    index + pageDepth * 5 === pageIndex
                      ? { backgroundColor: '#FFC044', color: 'white' }
                      : { backgroundColor: 'white', color: '#080606' }
                  }
                >
                  {ele}
                </span>
              );
            })}
          <span onClick={nextPage}>
            <S.Right />
          </span>
          <span
            onClick={() => {
              setPageIndex(totalPage - 1);
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
