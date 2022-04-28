import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllVideosPageComponent } from "./all-videos-page/all-videos-page.component";
import { PlayerComponent } from "./player/player.component";


const appRoutes: Routes = [
    {path: 'player', component: PlayerComponent},
    {path: '', component: AllVideosPageComponent}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}