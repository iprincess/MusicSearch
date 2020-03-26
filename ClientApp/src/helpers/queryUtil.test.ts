import { queryUtil } from './queryUtil';

describe("queryUtil", () =>{

  beforeAll( () => {

  });

  describe('getQueryFromUrlParam returns query', () => {
    const cases = [
      ["jack-johnson", "jack johnson"],
      ["madonna", "madonna"],
      ["the-beastie-boys", "the beastie boys"],
    ];
    test.each(cases)(`(%s)`, (a:string, expected) => {
      expect(queryUtil.getQueryFromUrlParam(a)).toBe(expected); 
    })
	});
	
	describe('getUrlParamFromQuery returns query', () => {
    const cases = [
      ["jack johnson", "jack-johnson"],
      ["madonna", "madonna"],
      ["the beastie boys", "the-beastie-boys"],
    ];
    test.each(cases)(`(%s)`, (a:string, expected) => {
      expect(queryUtil.getUrlParamFromQuery(a)).toBe(expected); 
    })
  });
});
