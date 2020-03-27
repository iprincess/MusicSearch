export const queryUtil = {
  getQueryFromUrlParam: (urlParam) => {
    // query will have '-' instead of spaces
    if (urlParam) {
      return urlParam.replace(/-/gi, ' ');
    }

    return '';
  },
  getUrlParamFromQuery: (query) => {
    // add '-' instead of spaces
    if (query) {
      return query.replace(/ /gi, '-');
    }
    return '';
  }
}