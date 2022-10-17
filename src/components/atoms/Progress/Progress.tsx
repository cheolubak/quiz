import { css } from '@emotion/css';
import React from 'react';
import { ProgressProps } from './ProgressProps';
import {
  ProgressAvtiveStyled,
  ProgressIndexStyled,
  ProgressStyled,
} from './ProgressStyled';

export default function Progress({ current, total, ...props }: ProgressProps) {
  return (
    <ProgressStyled>
      <ProgressAvtiveStyled
        className={css`
          width: ${(current / total) * 100}%;
        `}
      />
      <ProgressIndexStyled>
        {current}/{total}
      </ProgressIndexStyled>
    </ProgressStyled>
  );
}
