import {
        Component,
        ElementRef,
        OnInit,
        viewChild
} from '@angular/core';
import { createSwapy } from 'swapy';

@Component({
        selector: 'componente-2',
        template: `<p>I am A component</p>`,
        styles: `
                p{
                        background:#fff
                }
        `
})
export class AComponent { }

@Component({
        selector: 'b-comp',
        template: `
            <p>I am B component</p>
        `,
})
export class BComponent { }

@Component({
        selector: 'app-swapy',
        imports: [AComponent],
        templateUrl: './swapy.component.html',
        styleUrl: './swapy.component.scss'
})
export class SwapyComponent implements OnInit {

        ngOnInit(): void {
                this.sw();
        }
        mainHTML = viewChild.required<ElementRef<HTMLElement>>('main');

        sw() {
                const mainElement = this.mainHTML().nativeElement;
                const swapy = createSwapy(mainElement, {
                        animation: 'dynamic'
                })
                swapy.enable(true)
        }

}
