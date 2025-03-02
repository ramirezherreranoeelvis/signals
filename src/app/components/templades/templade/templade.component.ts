import { Component, inject } from '@angular/core';
import { StateService } from './state.service';

@Component({
	selector: 'app-templade',
	imports: [],
	templateUrl: './templade.component.html',
	styleUrl: './templade.component.scss'
})
export class TempladeComponent {
	title = 'store'
	stateService = inject(StateService);

}
