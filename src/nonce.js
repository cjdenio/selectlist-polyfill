export const nonce = () =>
  document.querySelector('meta[name="csp-nonce"]').getAttribute("content");
