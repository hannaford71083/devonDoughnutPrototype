import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  colourClass, ceilingOrFoundation, SegmentEnum, powerLevel, ISegment } from './shared-classes-interfaces';

declare var Snap: any;

@Component({
  selector: 'doughnut-diagram',
  templateUrl: './doughnut-diagram.component.html',
  styleUrls: ['./doughnut-diagram.component.scss']
})
export class DoughnutDiagramComponent implements OnInit {
  
  segments : SvgSegment[] = [];
  highlightedSegment : SegmentEnum | null = null;

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

  constructor() { 
    const s = Snap('#doughnut');    
  }

  ngOnInit(): void {

  }

  svgHighlightSegment(segmentIn : SegmentEnum | null ){
    this.highlightedSegment = segmentIn;
    for(let i in this.segments){
      let segment = this.segments[i].cssId;
      const s = Snap('#doughnut');
      //remove all grey outs
      s.select(`#${segment} .up-1`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .up-2`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .up-3`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .up-4`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .up-5`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .threshold`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .down-1`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .down-2`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .down-3`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .down-4`).removeClass(colourClass.greyOut);
      s.select(`#${segment} .down-5`).removeClass(colourClass.greyOut);

      if(this.segments[i].segmentEnum == segmentIn){
        // console.log("SELECTED ",this.segments[i].cssId);
      }
      else if(segmentIn !== null) {
        //this.segments[i].setLevel(this.segments[i].level, true);
        s.select(`#${segment} .up-5`).addClass(colourClass.greyOut);
        s.select(`#${segment} .up-4`).addClass(colourClass.greyOut);
        s.select(`#${segment} .up-3`).addClass(colourClass.greyOut);
        s.select(`#${segment} .up-2`).addClass(colourClass.greyOut);
        s.select(`#${segment} .up-1`).addClass(colourClass.greyOut);

        s.select(`#${segment} .threshold`).addClass(colourClass.greyOut);

        s.select(`#${segment} .down-1`).addClass(colourClass.greyOut);
        s.select(`#${segment} .down-2`).addClass(colourClass.greyOut);
        s.select(`#${segment} .down-3`).addClass(colourClass.greyOut);
        s.select(`#${segment} .down-4`).addClass(colourClass.greyOut);
        s.select(`#${segment} .down-5`).addClass(colourClass.greyOut);       
      }
    }
  }



}




// TODO: this should take most of fields out of here and extend ISegement
//   ISegement = segmentEnum,  innerOrOuter, level,  cssId  
//    ...remove rest of fields and keep callbacks as don't need other info  
export  class SvgSegment implements ISegment {
  // label: string;
  segmentEnum : SegmentEnum;
  innerOrOuter : ceilingOrFoundation | null;
  level : powerLevel;
  cssId : string;
  // description : string = "";
  // citizen : IGenericUserInfo | null  = null;
  // policyMaker : IGenericUserInfo | null  = null;
  callback: any = () => {
    // alert("callback to use component Output()");
    // this.componentReference.showTwinTrackIndicators();
    //if(this.segmentEnum != null){
    this.componentReference.clickSegment(this.segmentEnum);
    //}
  };
  mouseoverCallback: any = () => {
    // console.log("mouseoverCallback");
    this.componentReference.svgHighlightSegment(this.segmentEnum);
    this.componentReference.highlightSegment(this.segmentEnum);
    //this.componentReference.populateInfoPanel(this);
  };
  mouseOutCallback: any = () => {
    // console.log("mouseOutCallback");
    this.componentReference.svgHighlightSegment(null);
    this.componentReference.highlightSegment(null);
    //this.componentReference.populateInfoPanel(this);
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



  setLevel(level : powerLevel, greyOut : boolean = false){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    let outer, inner;
    if(!greyOut){
      outer = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.red : colourClass.green;
      inner = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.green : colourClass.red;  
    }
    else{
      outer = colourClass.greyOut;
      inner = colourClass.greyOut;  
    }

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


  resetSegment(){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    const outer = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.red : colourClass.green;
    const inner = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.green : colourClass.red;
    s.select(`#${segment} .up-1`).removeClass(outer);
    s.select(`#${segment} .up-2`).removeClass(outer);
    s.select(`#${segment} .up-3`).removeClass(outer);
    s.select(`#${segment} .up-4`).removeClass(outer);
    s.select(`#${segment} .up-5`).removeClass(outer);
    s.select(`#${segment} .threshold`).removeClass(colourClass.orange);   
    s.select(`#${segment} .down-1`).removeClass(inner);
    s.select(`#${segment} .down-2`).removeClass(inner);
    s.select(`#${segment} .down-3`).removeClass(inner);
    s.select(`#${segment} .down-4`).removeClass(inner);
    s.select(`#${segment} .down-5`).removeClass(inner);
  }
  

}


