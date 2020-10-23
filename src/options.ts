import { ActionOptions } from '@gluecode-it/scheduler';

export interface RequestActionHandlerOptions extends ActionOptions {
	url: string;
	method: 'GET' | 'POST';
	data: string;
}
