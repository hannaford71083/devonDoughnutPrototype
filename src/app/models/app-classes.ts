import { ceilingOrFoundation, colourClass, powerLevel, SegmentEnum } from "./app-enums";
import { IGenericUserInfo, ISegment } from "./app-interfaces";

declare var Snap: any;

export  class Segment implements ISegment {
  label: string;
  segmentEnum : SegmentEnum;
  innerOrOuter : ceilingOrFoundation | null;
  level : powerLevel;
  cssId : string;
  description : string = "";
  citizen : IGenericUserInfo | null  = null;
  policyMaker : IGenericUserInfo | null  = null;
  componentReference: any;

  constructor( label : string, segmentEnum : SegmentEnum,   innerOrOuter : ceilingOrFoundation, level : powerLevel, cssId : string, description : string, citizen : IGenericUserInfo, policyMaker : IGenericUserInfo ){
    this.label = label;
    this.segmentEnum = segmentEnum;
    this.innerOrOuter = innerOrOuter;
    this.level = level;    
    this.cssId = cssId;
    this.description = description;
    this.citizen = citizen;
    this.policyMaker  = policyMaker;
  }
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