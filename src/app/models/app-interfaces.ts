import { ceilingOrFoundation, powerLevel, SegmentEnum } from "./app-enums";

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