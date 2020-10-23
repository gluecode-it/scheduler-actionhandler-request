import { ActionOptions } from '@gluecode-it/scheduler';

export interface WebhookActionOptions extends ActionOptions {
	url: string;
	method: 'GET' | 'POST';
	data: string;
}
