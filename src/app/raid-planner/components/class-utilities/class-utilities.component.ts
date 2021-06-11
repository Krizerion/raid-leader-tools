import { Component } from '@angular/core';
import { ClassUtilitiesData } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { getClassUtilities } from '@app/store/raid-leader-tools';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'rlt-class-utilities',
  templateUrl: './class-utilities.component.html',
  styleUrls: ['./class-utilities.component.scss']
})
export class ClassUtilitiesComponent {
  public utilitiesData$: Observable<ClassUtilitiesData> = this.store.pipe(select(getClassUtilities));
  constructor(private store: Store<AppState>) {}
}
