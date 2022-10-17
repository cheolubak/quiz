import { css } from '@emotion/css';
import React from 'react';

export default function Overlay() {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 10;
      `}
    />
  );
}
