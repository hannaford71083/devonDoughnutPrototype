import { Component, Input, Output, EventEmitter } from '@angular/core';
import {  colourClass, ceilingOrFoundation, SegmentEnum, powerLevel, ISegment } from './shared-classes-interfaces';

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


enum ZoomEnum {
  zoomIn = 'zoomIn',
  zoomOut = 'zoomOut'
} 

export  class SvgSegment implements ISegment {
  segmentEnum : SegmentEnum;
  innerOrOuter : ceilingOrFoundation | null;
  level : powerLevel;
  cssId : string;
  callback: any = () => {
    this.componentReference.clickSegment(this.segmentEnum);
  };
  mouseoverCallback: any = () => {
    this.componentReference.svgHighlightSegment(this.segmentEnum);
    this.componentReference.highlightSegment(this.segmentEnum);
  };
  mouseOutCallback: any = () => {
    this.componentReference.svgHighlightSegment(null);
    this.componentReference.highlightSegment(null);
  };
  componentReference: any;

  constructor( segmentEnum : SegmentEnum,   innerOrOuter : ceilingOrFoundation | null, level : powerLevel, cssId : string ){
    this.segmentEnum = segmentEnum;
    this.innerOrOuter = innerOrOuter;
    this.level = level;    
    this.cssId = cssId;
  }

  bindCallback(){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    s.select(`#${segment}`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
  }

  setLevel(level : powerLevel){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    let outer = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.red : colourClass.green;
    let inner = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.green : colourClass.red;  

    try{
      if(this.level == powerLevel.up1){
        s.select(`#${segment} .up-1`).addClass(outer);
      }
      else if(level == powerLevel.up2){
        s.select(`#${segment} .up-1`).addClass(outer);
        s.select(`#${segment} .up-2`).addClass(outer);
      }
      else if(level == powerLevel.up3){
        s.select(`#${segment} .up-1`).addClass(outer);
        s.select(`#${segment} .up-2`).addClass(outer);
        s.select(`#${segment} .up-3`).addClass(outer);
      }
      else if(level == powerLevel.up4){
        s.select(`#${segment} .up-1`).addClass(outer);
        s.select(`#${segment} .up-2`).addClass(outer);
        s.select(`#${segment} .up-3`).addClass(outer);
        s.select(`#${segment} .up-4`).addClass(outer);
      }
      else if(level == powerLevel.up5){
        s.select(`#${segment} .up-1`).addClass(outer);
        s.select(`#${segment} .up-2`).addClass(outer);
        s.select(`#${segment} .up-3`).addClass(outer);
        s.select(`#${segment} .up-4`).addClass(outer);
        s.select(`#${segment} .up-5`).addClass(outer);
      }
      else if(level == powerLevel.threshold){
        s.select(`#${segment} .threshold`).addClass(colourClass.orange);
      }
      else if(level == powerLevel.down1){
        s.select(`#${segment} .down-1`).addClass(inner);
      }
      else if(level == powerLevel.down2){
        s.select(`#${segment} .down-1`).addClass(inner);
        s.select(`#${segment} .down-2`).addClass(inner);
      }
      else if(level == powerLevel.down3){
        s.select(`#${segment} .down-1`).addClass(inner);
        s.select(`#${segment} .down-2`).addClass(inner);
        s.select(`#${segment} .down-3`).addClass(inner);
      }
      else if(level == powerLevel.down4){
        s.select(`#${segment} .down-1`).addClass(inner);
        s.select(`#${segment} .down-2`).addClass(inner);
        s.select(`#${segment} .down-3`).addClass(inner);
        s.select(`#${segment} .down-4`).addClass(inner);
      }
      else if(level == powerLevel.down5){
        s.select(`#${segment} .down-1`).addClass(inner);
        s.select(`#${segment} .down-2`).addClass(inner);
        s.select(`#${segment} .down-3`).addClass(inner);
        s.select(`#${segment} .down-4`).addClass(inner);
        s.select(`#${segment} .down-5`).addClass(inner);
      }

    }
    catch(e){
      console.log(e);
    }
  }

  

}


