import 'reflect-metadata';
import { RequestActionHandler } from './handler';

describe(RequestActionHandler.name, () => {
	it('should be defined', () => {
		expect(
			new RequestActionHandler({
				url: 'https://example.com',
				method: 'GET',
				data: '',
			})
		).toBeInstanceOf(RequestActionHandler);
	});

	describe('do()', () => {
		it('should call callback', async () => {
			const handler = new RequestActionHandler({
				url: 'https://example.com',
				method: 'GET',
				data: '',
			});
			await expect(handler.do()).resolves.toBeDefined();
		});
	});
});
