// app.routes.ts
import { RouterModule, Routes } from '@angular/router';

const _routes: Routes = [
    // { path: '', component: HeroesComponent, terminal: true },
    // { path: 'detail/:id', component: HeroDetailComponent }

    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '',  pathMatch:'full',  redirectTo: 'nowo-api/call-function' },
    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    // { path: '', component: AppComponent, pathMatch: 'full' },
];

// Export for Main
// export const routingImports = RouterModule.forRoot(_routes, { enableTracing: true })
export const routingImports = RouterModule.forRoot(_routes);

function getRoutingDeclarations(routes?: Routes): any[] {
    if (!routes) {
        routes = _routes;
    }
    const arr = [];
    for (const route of routes) {
        if (route.component) {
            arr.push(route.component);
        }
        if (route.children) {
            arr.push(getRoutingDeclarations(route.children));
        }
    }
    return arr;
}

 export const routingDeclarations = getRoutingDeclarations();
