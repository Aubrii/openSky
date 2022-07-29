import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormAiportComponent} from "./pages/form-aiport/form-aiport.component";

const routes: Routes = [
  { path: "", component: FormAiportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
