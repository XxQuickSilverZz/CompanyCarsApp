import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { CreateVehicleModalComponent } from './modals/create-vehicle/create-vehicle-modal.component';
import { SharedModule } from '../shared.module';
import { MonthYearDateFormatAdapterDirective } from './directives/month-year-date-format-adapter.directive';
import { NormalDateFormatAdapterDirective } from './directives/normal-date-format-adapter.directive';
import { reducer, vehicleFeatureKey } from './store/vehicle/store/reducer/vehicle.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    VehicleOverviewComponent,
    CreateVehicleModalComponent,
    MonthYearDateFormatAdapterDirective,
    NormalDateFormatAdapterDirective
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    MatButtonModule,
    SharedModule,
    StoreModule.forFeature(vehicleFeatureKey, reducer),
  ]
})
export class VehicleModule { }
