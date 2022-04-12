import { ceilingOrFoundation, powerLevel, SegmentEnum } from "./app-enums";

declare var Snap: any;


// ----- ----- Classes ----- ----- 
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

// ----- ----- Interfaces ----- ----- 
export interface ISegment{
  segmentEnum : SegmentEnum; 
  innerOrOuter : ceilingOrFoundation | null;
  level : powerLevel; 
  cssId : string;
}
export interface IGenericUserInfo  {
  description : string;
  action : string;
  data : number | null;
}
