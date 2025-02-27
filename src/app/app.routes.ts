import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgifComponent } from './components/directives/ngif/ngif.component';
import { NgforComponent } from './components/directives/ngfor/ngfor.component';
import { NgClassComponent } from './components/directives/ng-class/ng-class.component';
import { NgStyleComponent } from './components/directives/ng-style/ng-style.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { InteractAPIComponent } from './components/interact-api/interact-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

export const routes: Routes = [
  // below is default route, full means complete route and prefix is only routing value
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'ngIf', component: NgifComponent },
  { path: 'ngFor', component: NgforComponent },
  { path: 'ngClass', component: NgClassComponent },
  { path: 'ngStyle', component: NgStyleComponent },
  { path: 'controlFlow', component: ControlFlowComponent },
  { path: 'Signal', component: SignalComponent },
  { path: 'LinkedSignal', component: LinkedSignalComponent },
  { path: 'TemplateForm', component: TemplateFormComponent },
  { path: 'ReactiveForm', component: ReactiveFormComponent },
  { path: 'APIIntegration', component: InteractAPIComponent },
  { path: 'ResourceAPI', component: ResourceApiComponent },
  { path: 'LifeCycle', component: LifeCycleComponent },
];
