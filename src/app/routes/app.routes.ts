import { Routes } from '@angular/router';
import { TempladeComponent } from '../components/templades/templade/templade.component';
import { TempladeUserComponent } from '../components/templades/templade-user/templade-user.component';
import { SwapyComponent } from '../components/templades/swapy/swapy.component';

export const routes: Routes = [
        {
                path: '',
                redirectTo: 'swapy',
                pathMatch: 'full'
        },
        {
                path: "templade",
                title: "xd",
                component: TempladeComponent
        },
        {
                path: 't2',
                title: "xd",
                component: TempladeUserComponent
        },
        {
                path: 'swapy',
                title: "test-swapy",
                component: SwapyComponent
        }
];
