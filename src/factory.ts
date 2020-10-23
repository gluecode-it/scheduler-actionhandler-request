import { RequestActionHandler } from './handler';
import { ActionHandlerFactory } from '@gluecode-it/scheduler';
import { RequestActionHandlerOptions } from './options';

export class RequestActionHandlerFactory extends ActionHandlerFactory {
	create(options: RequestActionHandlerOptions): RequestActionHandler {
		return new RequestActionHandler(options);
	}
	suits(type: string) {
		return type.toLowerCase() === 'request';
	}
}
