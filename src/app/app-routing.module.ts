import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { UserComponent } from "./users/user/user.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'users/:id/:name', component: UserComponent },
    { path: 'servers', canActivate:[AuthGuard], component: ServerComponent },
    { path: 'servers/:id/edit', canActivate:[AuthGuard], component: EditServerComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}