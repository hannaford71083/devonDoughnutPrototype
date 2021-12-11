import { HighContrastMode } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import {  SegmentEnum, colourClass, ceilingOrFoundation, powerLevel } from './shared-classes-interfaces';
import { GeneralService } from './general.service';
import { Segment } from './shared-classes-interfaces';

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
  introScreenVisibility = true;
  generalService : GeneralService;

  constructor(generalService : GeneralService){ 
    this.generalService = generalService;
  }

  ngOnInit(){
    this.populateSegmentList();
  }

  populateSegmentList() {
    this.segments = this.generalService.getSegments(); 
  }

  populateInfoPanel(segment : Segment){
    this.selectedSegment = segment;
    this.introScreenVisibility = false;
  }

  onClickSegment(segmentEnum : SegmentEnum) {
    // console.log('parent seg click: ' + segmentEnum);
    // this.segmentSelectTrigger = !this.segmentSelectTrigger;
    let selectedSegment = this.segments.find((seg)=>{ return seg.segmentEnum == segmentEnum; })
    if(selectedSegment){
      this.populateInfoPanel(selectedSegment);
    }
  }

  // onHighlightSegment(segmentEnum : SegmentEnum | null){
  //   let selectedSegment = this.segments.find((seg)=>{ return seg.segmentEnum == segmentEnum; })
  //   if(selectedSegment){
  //     this.populateInfoPanel(selectedSegment);
  //   }
  // }

}



