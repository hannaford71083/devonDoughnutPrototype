import { Component, Input, Output, EventEmitter } from '@angular/core';
import {  colourClass, ceilingOrFoundation, SegmentEnum, powerLevel } from '../models/app-enums';
import { ISegment } from '../models/app-interfaces';
import { ZoomEnum } from '../models/app-enums'
import { SvgSegment } from '../models/app-classes';

declare var Snap: any;

@Component({
  selector: 'doughnut-diagram',
  templateUrl: './doughnut-diagram.component.html',
  styleUrls: ['./doughnut-diagram.component.scss']
})
export class DoughnutDiagramComponent {
  
  segments : SvgSegment[] = [];
  highlightedSegment : SegmentEnum | null = null;
  viewBoxOut : string = "700 400 800 800";
  viewBoxIn : string = "890 550 500 460";
  viewBox : string = this.viewBoxOut;
  zoomLevel : ZoomEnum = ZoomEnum.zoomOut;

  @Input() set initSegments(segments : ISegment[] | null){
    if(segments !== null){
      this.segments = this.svgSegmentFactory(segments);
      this.initAllSegments();
      this.bindAllCallbacks();
      this.bindComponentRef();
    }
  }
  @Output() segmentClicked = new EventEmitter<SegmentEnum>();
  @Output() segmentHighlighted = new EventEmitter<SegmentEnum | null>();
    

  constructor() { 
    const s = Snap('#doughnut');    
  }

  zoomIn(){
    const s = Snap('#doughnut');   
    s.attr({viewBox: this.viewBoxIn});
    this.zoomLevel = ZoomEnum.zoomIn;
  }
  zoomOut(){
    const s = Snap('#doughnut');   
    s.attr({viewBox: this.viewBoxOut});
    this.zoomLevel = ZoomEnum.zoomOut;
  }

  highlightSegment(segmentIn : SegmentEnum | null){
    this.segmentHighlighted.emit(segmentIn);
  }

  clickSegment(segmentIn : SegmentEnum): void {
    if(segmentIn != null){
      this.segmentClicked.emit(segmentIn);
    }
  }

  svgSegmentFactory(iSegments : ISegment[]) : SvgSegment[] {
    let svgSegments : SvgSegment[] = [];
    for(let iSegment of iSegments){
      let svgSegment : SvgSegment = new SvgSegment(iSegment.segmentEnum, iSegment.innerOrOuter, iSegment.level, iSegment.cssId );
      svgSegments.push(svgSegment);
    }
    return svgSegments;
  }

  initAllSegments(){
    for(let i in this.segments){
      this.segments[i].setLevel(this.segments[i].level);
    }
  }

  bindAllCallbacks(){
    for(let i in this.segments){
      this.segments[i].bindCallback();
    }
  }

  bindComponentRef(){
    for(let i in this.segments){
      this.segments[i].componentReference = this;
    }
  }

  svgHighlightSegment(segmentIn : SegmentEnum | null ){
    this.highlightedSegment = segmentIn;
    for(let i in this.segments){
      let segment = this.segments[i].cssId;
      const s = Snap('#doughnut');
      //remove all grey outs
      s.select(`#${segment}`).removeClass(colourClass.highlightColour);

      if(this.segments[i].segmentEnum == segmentIn){
        s.select(`#${segment}`).addClass(colourClass.highlightColour);
      }
    }
  }

}