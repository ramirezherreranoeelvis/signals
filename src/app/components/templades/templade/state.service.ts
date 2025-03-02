import { computed, Injectable, signal } from '@angular/core';

interface AppState {
        counter: number;
        user: {
                name: string,
                isAuthenticated: boolean
        }
}

@Injectable({ providedIn: 'root' })
export class StateService {

        private _sate = signal<AppState>({
                counter: 0,
                user: {
                        name: '',
                        isAuthenticated: false
                }
        });

        readonly counter = computed(() => this._sate().counter);
        readonly user = computed(() => this._sate().user);
        readonly isAuntheticated = computed(() => this._sate().user.isAuthenticated);
        
        incrementCounter(): void {
                this._sate.update(state => ({
                        ...state,
                        counter: state.counter + 1
                }))
        }

        setUser(): void {
                this._sate.update(state => ({
                        ...state,
                        user: {
                                ...state.user,
                                name: '',
                                isAuthenticated: true
                        }
                }))
        }

        logout(): void {
                this._sate.update(state => ({
                        ...state,
                        user: {
                                ...state.user,
                                name: '',
                                isAuthenticated: false
                        }
                }))
        }

}