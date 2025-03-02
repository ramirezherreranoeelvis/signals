import { Component, computed, effect, input, model } from '@angular/core';

@Component({
        selector: 'use-card',
        imports: [],
        templateUrl: './use-card.component.html',
        styleUrl: './use-card.component.scss'
})
export class UseCardComponent {

        nombre = input<string>();
        apellidos = input('', {
                alias: 'surname',
                transform: (value: string) => value.toUpperCase()
        });
        email = input.required<string>();

        nombreCompleto = computed(() => `${this.nombre()} ${this.apellidos()}`);

        constructor() {
                effect(() => {
                        console.log(`Valor para el nombre ${this.nombre()}`);
                });
        }

        active = model(false);
        onClick() {
                this.active.update(value => !value)
        }
}
