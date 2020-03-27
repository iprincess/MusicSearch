import * as serviceBase from './service-base';
import { METHOD_GET } from './methods';
import mockAxios from 'axios';

// have to do this to make TypeScript happy even though we have a mocked module
const axiosMock = mockAxios as jest.Mocked<typeof mockAxios>;

describe("service-base", () => {
	beforeAll( () => {

	});

	test("apiRequest should return request from apiInstance", () => {
		const mockData = {
			foo: "bar"
		};
		axiosMock.request.mockImplementationOnce(() =>
			Promise.resolve({ data: mockData }),
		);
		
		return serviceBase.apiRequest(METHOD_GET, "path")
			.then(response => {
				expect(response.data).toEqual(mockData);
				expect(mockAxios.request).toHaveBeenCalledWith({method: METHOD_GET, url: "path", params: {}});
			})
	});
});