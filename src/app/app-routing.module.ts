import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CreateNotificationComponent } from "./create-notification/create-notification.component";
import { KnowlageComponent } from "./knowlage/knowlage.component";
import { NotificationComponent } from "./notification/notification.component";
import { RepositoryComponent } from "./repository/repository.component";

const appRoutes: Routes = [
    {path: '', redirectTo: "/notification", pathMatch: 'full'},
    {path: 'notification', component: NotificationComponent},
    {path: 'knowlage', component: KnowlageComponent},
    {path: 'repository', component: RepositoryComponent},
    {path: 'addNotification', component: CreateNotificationComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }