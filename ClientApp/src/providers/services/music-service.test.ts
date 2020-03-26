import * as musicService from './music-service';
import { METHOD_GET } from './methods';
import * as serviceBase from './service-base';

jest.mock('./service-base');
const serviceBaseMock = serviceBase as jest.Mocked<typeof serviceBase>;

describe("music-service", () => {
	beforeEach(() => {
		serviceBaseMock.apiRequest.mockReset();
	});

	test("get should return api response.data on success", () => {
		const apiResponse= {
			status: 200, 
			statusText: "ok", 
			headers: [], 
			config: {},
			data:"unicorn"};
		serviceBaseMock.apiRequest.mockResolvedValue(apiResponse);

		return musicService.get(METHOD_GET, {})
			.then(response => {
				expect(response).toEqual(apiResponse.data);
				expect(serviceBaseMock.apiRequest).toHaveBeenCalledTimes(1);
			})
	});

	test("get should return null on non-200 status", () => {
		const apiResponse= {
			status: 400, 
			statusText: "ok", 
			headers: [], 
			config: {},
			data:"unicorn"};
		serviceBaseMock.apiRequest.mockResolvedValue(apiResponse);

		return musicService.get(METHOD_GET, {})
			.then(response => {
				expect(response).toEqual(null);
				expect(serviceBaseMock.apiRequest).toHaveBeenCalledTimes(1);
			})
	});

	test("get should return null on rejection", () => {
		const apiResponse= {
			status: 200, 
			statusText: "ok", 
			headers: [], 
			config: {},
			data:"unicorn"};
		serviceBaseMock.apiRequest.mockRejectedValue(apiResponse);

		return musicService.get(METHOD_GET, {})
			.then(response => {
				expect(response).toEqual(null);
				expect(serviceBaseMock.apiRequest).toHaveBeenCalledTimes(1);
			})
	});
});