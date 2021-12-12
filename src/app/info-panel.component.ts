import { Component, Input, ViewChild } from '@angular/core';
import { ceilingOrFoundation } from './shared-classes-interfaces';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Segment } from './shared-classes-interfaces';
// import { MatStepper } from '@angular/material';


@Component({
  selector: 'info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false },
    },
  ],
})
export class InfoPanelComponent {

  @ViewChild('stepper') private myStepper : any;

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
    // this.segmentSelected(visibility);
    this.domainLock = true;
    let that = this;
    setTimeout(function(){
      that.domainLock = false;
    }, 3000);
  }

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
    //alert("index : "+ index);
  }



  populateInfoPanel(segment : Segment | null){
    this.fadeOut = false;
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



  // showHowWereDoing(){
  //   this.dataSectionVisible = true;
  //   this.showHowWereDoingButtonVisibility = false;
  // }

  // showPathwaystoAction(){
  //   console.log("showPathwaystoAction");
  //   // this.citizenActionVisible = true;
  //   // this.policymakerActionVisible = true;
    
  //   // this.pathwayForActionButtonVisibility = false;
  //   // this.showHowWereDoingButtonVisibility = true;
  // }

  // setTwinTrackIndicatorVisibility(visibility : boolean | null){
  //   // if(visibility != null){
  //   //   console.log("setTwinTrackIndicatorVisibility");
  //   //   this.policymakerDescriptionVisible = visibility;
  //   //   this.citizenDescriptionVisible = visibility;
  //   //   if(visibility == true){
  //   //     this.domainIndicatorMessageVisibility = false;
  //   //     this.pathwayForActionButtonVisibility = true;
  //   //   }
  //   //   else{
  //   //     this.domainIndicatorMessageVisibility = true;
  //   //     this.pathwayForActionButtonVisibility = false;
  //   //     this.citizenActionVisible = false;
  //   //   }
  //   // }
  // }

  // segmentHighlighted(visibility : boolean | null){

  // }




}