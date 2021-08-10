import React, { useState } from 'react';
import * as S from './styles';

const List = ({ showModal, title, list, pageNum }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ListContainer>
        {list.map((ele) => (
          <S.List
            onClick={() => {
              showModal(ele.id);
            }}
            key={ele.id}
          >
            <span>{ele.id}</span>
            <span>{ele.title}</span>
          </S.List>
        ))}
        <S.PageNum>
          <span>
            <S.Left />
            <S.Left />
          </span>
          <span>
            <S.Left />
          </span>
          {pageNum.map((ele) => (
            <span>{ele}</span>
          ))}
          <span>
            <S.Right />
          </span>
          <span>
            <S.Right />
            <S.Right />
          </span>
        </S.PageNum>
      </S.ListContainer>
    </S.Wrapper>
  );
};

export default List;
