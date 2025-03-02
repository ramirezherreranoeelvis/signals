import { Component } from '@angular/core';
import { UseCardComponent } from '../../molecules/use-card/use-card.component';
@Component({
        selector: 'app-templade-user',
        imports: [
                UseCardComponent
        ],
        templateUrl: './templade-user.component.html',
        styleUrl: './templade-user.component.scss'
})
export class TempladeUserComponent {
        currentDate: string = '';
        userActvo: boolean = false;
        constructor() {
                // if (typeof window !== 'undefined' && window) {
                //         window.setInterval(() => {
                //                 this.currentDate = (new Date()).toISOString();
                //         }, 10000);
                // }
        }

        onChange() {
                console.log('Se modiica la propiedad activo');

        }
}
