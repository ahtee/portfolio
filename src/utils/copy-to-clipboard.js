// https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/copy-to-clipboard.js

export const copyToClipboard = (str) => {
  const clipboard = window.navigator.clipboard;
  return clipboard.writeText(str);
};
