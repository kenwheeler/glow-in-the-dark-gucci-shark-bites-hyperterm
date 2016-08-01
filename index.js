use strict';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor: '#fff',
    backgroundColor: '#1a1a1a',
    borderColor: '#0f0f0f',
    css: `
      .tab_tab.tab_active::before {
        border-bottom-width: 2px;
        border-bottom-color: #F856B5;
      }
    `,
    padding: '12px 14px',
    colors: {
      black: '#000000', // black
      red: '#FF5C58', // red
      green: '#56F856', // green
      yellow: '#FFFE58', // yelloww
      blue: '#5EB2F2', // blue
      magenta: '#F856B5', // magenta
      cyan: '#54F4B4', // cyan
      white: '#d0d0d0', // white
      lightBlack: '#000000', // black
      lightRed: '#FF5C58', // red
      lightGreen: '#56F856', // green
      lightYellow: '#FFFE58', // yellow
      lightBlue: '#5EB2F2', // blue
      lightMagenta: '#F856B5', // magenta
      lightCyan: '#54F4B4', // cyan
      lightWhite: '#d0d0d0', // white
    }
  });
};
