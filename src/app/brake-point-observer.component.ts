import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'brake-point-observer',
  templateUrl: './brake-point-observer.component.html',
  styleUrls: ['./brake-point-observer.component.scss']
})
export class BrakePointObserverComponent implements OnDestroy {
  @Output() breakpointChanged = new EventEmitter<string>();
  @Input() set breakpointRetreive(breakToggle : any){
    this.breakpointChanged.emit(this.currentScreenSize);
  }
  destroyed = new Subject<void>();
  currentScreenSize: string = "";

  //create map to display breakpoint names for display purposes
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) { 
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for(const query of Object.keys(result.breakpoints)){
          if(result.breakpoints[query]){
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            this.breakpointChanged.emit(this.currentScreenSize);
          }
        }
      });
  }

  ngOnDestroy(): void {
      this.destroyed.next();
      this.destroyed.complete();
  }


}
