import { Component, OnInit, Input } from '@angular/core';
import { Segment, ceilingOrFoundation } from './app.component';

@Component({
  selector: 'info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {


  @Input() set segment(segment : Segment | null){
    this.populateInfoPanel(segment);
  }
  domainName : string = "";
  description : string = "";
  citizenDescription : string = "";
  policymakerDescription : string = "";
  citizenAction : string = "";
  policymakerAction : string = "";
  innerOutter : ceilingOrFoundation | null = null;
  showCeiling : boolean = false;
  showFoundation : boolean = false;

  constructor() { }

  ngOnInit(): void {

    //console.log("--->>>> ", this.test);
  }

  populateInfoPanel(segment : Segment | null){
    console.log("Updated ", segment?.cssId);
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


}