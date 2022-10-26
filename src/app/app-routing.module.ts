import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AnatomyTranslationsComponent } from './anatomy-translations/anatomy-translations.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "anatomytranslations/:categoryId/:partId", component: AnatomyTranslationsComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
