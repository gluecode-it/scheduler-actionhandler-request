import Axios from 'axios';
import { ActionHandlerInterface, ActionOptions } from '@gluecode-it/scheduler';

export class RequestActionHandler implements ActionHandlerInterface {
	constructor(private options: ActionOptions) {}
	async do() {
		return Axios(this.options);
	}
}
