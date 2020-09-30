import { Component, OnInit } from '@angular/core';
import { ClassUtilitiesData } from '@app/shared/models/planner.models';
import { AppState } from '@app/store';
import { getClassUtilities } from '@app/store/raidview';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'rv-class-utilities',
  templateUrl: './class-utilities.component.html',
  styleUrls: ['./class-utilities.component.scss']
})
export class ClassUtilitiesComponent implements OnInit {
  public utilitiesData$: Observable<ClassUtilitiesData> = this.store.pipe(select(getClassUtilities));
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
