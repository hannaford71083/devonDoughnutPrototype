declare var Snap: any;


// export enum powerLevel {
//     higher,
//     high,
//     above,
//     below,
//     lower
// };

export enum powerLevel {
  up5,
  up4,
  up3,
  up2,
  up1,
  threshold,
  down1,
  down2,
  down3,
  down4,
  down5
  };



  
export enum SegmentEnum {
    GreenhouseGasEmissions,
    CoastAndMarineHealth,
    WaterbodyHealth,
    HabitatHealth,
    SoilHealth,
    PlasticPollution,
    LandUseChange,
    Biodiversity,
    AirQuality,
    Waste,
  
    WaterQuality,
    Food,
    AccessToNature,
    HealthAndWellbeing,
    Education,
    IncomeAndWork,
    PoliticalVoice,
    Safety,
    EquityAndEquality,
    Community,
    Housing,
    Energy
};
  
  
  export enum ceilingOrFoundation {
    ceiling,
    foundation
  }
  
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

  
  // export enum colourClass {
  //   red = "cls-11",
  //   green = "cls-9", //
  //   lightGrey = "cls-10",
  //   lightRed = "cls-8",
  //   greyOut = "grey-out"
  // }
  
  export enum colourClass {
    red = "cls-5",
    green = "cls-7",
    orange = "cls-8",
    lightGrey = "cls-4",
    lightRed = "cls-6",
    // greyOut = "grey-out",
    highlightColour = "highlight-colour"
  }

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

  export enum BreakpointEnum {
    XSmall = 'XSmall',
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
    XLarge = 'XLarge',
    Unknown = 'Unknown',
  }

