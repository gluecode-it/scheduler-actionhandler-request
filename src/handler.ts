import Axios from 'axios';
import { ActionHandlerInterface } from '@gluecode-it/scheduler';
import { RequestActionHandlerOptions } from './options';

export class RequestActionHandler implements ActionHandlerInterface {
	constructor(private options: RequestActionHandlerOptions) {}
	async do() {
		return Axios(this.options);
	}
}
