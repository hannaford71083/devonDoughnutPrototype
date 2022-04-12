import { Component } from '@angular/core';
import {  SegmentEnum } from './models/app-enums';
import { GeneralService } from './services/general.service';
import { Segment } from './models/shared-classes-interfaces';

declare var Snap: any;
declare var mina: any;    // if you want to use animations of course

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialTest';
  checked = true;
  segments : Segment[] = [];
  highlightedSegment : SegmentEnum | null = null;
  selectedSegment : Segment | null = null;
  segmentSelectTrigger : boolean | null = null;
  introScreenMode = true;
  generalService : GeneralService;
  mobileMode = false;
  breakpointCheckToggle : boolean = false;
  showInfoPanel : boolean = true;


  constructor(generalService : GeneralService){ 
    this.generalService = generalService;
  }

  ngOnInit(){
    this.populateSegmentList();
    if(this.mobileMode){
      this.introScreenMode = false;
    }
  }

  populateSegmentList() {
    this.segments = this.generalService.getSegments(); 
  }

  populateInfoPanel(segment : Segment){
    this.selectedSegment = segment;
    this.introScreenMode = false;
    this.showInfoPanel = true;
  }

  onClickSegment(segmentEnum : SegmentEnum) {
    let selectedSegment = this.segments.find((seg)=>{ return seg.segmentEnum == segmentEnum; })
    if(selectedSegment){
      this.populateInfoPanel(selectedSegment);
    }
  }

  onBreakpointChanged(breakpoint: string){
    if (breakpoint == 'Small' || breakpoint == 'XSmall'){
      this.mobileMode = true;
    }
    else{
      this.mobileMode = false;
    }
  }

  onBackToDiagramChanged(visibility : boolean){ 
    this.showInfoPanel = false;
  }



}



