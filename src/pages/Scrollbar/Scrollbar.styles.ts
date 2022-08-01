import styled from 'styled-components';

export const StyledScrollbar = styled.main`
  padding: 40px;

  .shadow-scrollbar-ctn {
    width: 200px;
    max-height: 200px;
    overflow: hidden auto;
    border: 1px solid #888;
    /* -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch; */
    background:
    /* Shadow Cover TOP */ linear-gradient(white 30%, rgba(255, 255, 255, 0)) center top,
      /* Shadow Cover BOTTOM */ linear-gradient(rgba(255, 255, 255, 0), white 70%) center bottom,
      /* Shadow TOP */ radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center top,
      /* Shadow BOTTOM */ radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) center bottom;

    background-repeat: no-repeat;
    background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
    background-attachment: local, local, scroll, scroll;
    --scrollbarBG: transparent;
    --thumbBG: #90a4ae;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: var(--scrollbarBG);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--thumbBG);
      border-radius: 6px;
      border: 3px solid var(--scrollbarBG);
    }

    .shadow-scrollbar-content {
      width: 100%;
      height: 800px;
    }
  }
`;
