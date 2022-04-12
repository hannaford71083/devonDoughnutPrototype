import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'slide-nav-buttons',
  templateUrl: './slide-nav-buttons.component.html',
  styleUrls: ['./slide-nav-buttons.component.scss']
})
export class SlideNavButtonsComponent implements OnInit {

  @Output() indexSelected = new EventEmitter<number>();
  @Input() set reset(flag: boolean){
    this.index = 0;
  }
  index : number  = 0;
  constructor() { }

  ngOnInit(): void {

  }

  goTo(setIndex : number){
    this.index = setIndex;
    this.indexSelected.emit(setIndex);
  }

  raised(indexId: number){
    return indexId !== this.index;
  }

  disabled(indexId: number){
    return indexId == this.index; 
  }

}
