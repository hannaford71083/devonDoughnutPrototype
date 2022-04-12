import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ceilingOrFoundation } from '../models/app-enums';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Segment } from '../models/shared-classes-interfaces';


@Component({
  selector: 'info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class InfoPanelComponent {

  @ViewChild('stepper') private myStepper : any;

  @Output() backToDiagramChanged = new EventEmitter<boolean>();

  @Input() set segment(segment : Segment | null){
    if(!this.domainLock){
      if(this.myStepper){
        this.myStepper.reset();
        this.resetTrigger = !this.resetTrigger;
      }
      let that = this;
      this.fadeOut = true;
      setTimeout(function(){
        that.populateInfoPanel(segment);
      }, 300);
    }
  }
  @Input() set onSegmentSelect(visibility : boolean | null ){
    this.domainLock = true;
    let that = this;
    setTimeout(function(){
      that.domainLock = false;
    }, 3000);
  }
  @Input() set mobileMode(mob : boolean | undefined){
    if(mob){
      this._mobileMode = mob;
    }
  }

  visible : boolean = false;
  _mobileMode : boolean = false;
  resetTrigger : boolean = false;
  fadeOut : boolean = false;
  domainLock : boolean = false;
  domainName : string = "";
  description : string = "";
  citizenDescription : string = "";
  policymakerDescription : string = "";
  citizenAction : string = "";
  policymakerAction : string = "";
  innerOutter : ceilingOrFoundation | null = null;
  showCeiling : boolean = false;
  showFoundation : boolean = false;
  isLinear = false;

  constructor() { 
    
  }

  onIndexSelected(index : number){
    this.myStepper.selectedIndex = index;
  }

  populateInfoPanel(segment : Segment | null){
    this.fadeOut = false;
    this.visible = true;

    if(segment !== null){
      this.domainName = segment.label;
      this.description = segment.description;
      this.innerOutter = segment.innerOrOuter;
      this.showCeiling = this.innerOutter == ceilingOrFoundation.ceiling ? true : false;
      this.showFoundation = this.innerOutter == ceilingOrFoundation.foundation ? true : false;
      if(segment.citizen){
        this.citizenDescription  = segment.citizen.description;
        this.citizenAction  = segment.citizen.action;
      }
      if(segment.policyMaker){
        this.policymakerDescription  = segment.policyMaker.description;
        this.policymakerAction  = segment.policyMaker.action;
      }
    }
  }

  backToDiagram(){
    this.visible = false;
    this.backToDiagramChanged.emit(this.visible);
  }


}