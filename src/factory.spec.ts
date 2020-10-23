import 'reflect-metadata';
import { RequestActionHandlerFactory } from './factory';
import { RequestActionHandler } from './handler';

describe(RequestActionHandlerFactory.name, () => {
	describe('create()', () => {
		const validType = 'request';
		it(`should return true if type is "${validType}"`, () => {
			const handler = new RequestActionHandlerFactory();
			expect(handler.suits(validType)).toBeTruthy();
		});

		it(`should return false if type is not "${validType}"`, () => {
			const handler = new RequestActionHandlerFactory();
			expect(handler.suits(`not validType`)).toBeFalsy();
		});
	});

	describe('create()', () => {
		it('should return CronEventHandler', () => {
			const handler = new RequestActionHandlerFactory();
			expect(
				handler.create({
					url: 'https://exampel.com/',
					method: 'GET',
					data: '',
				})
			).toBeInstanceOf(RequestActionHandler);
		});
	});
});
