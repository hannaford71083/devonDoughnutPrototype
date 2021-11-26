import { HighContrastMode } from '@angular/cdk/a11y';
import { Component } from '@angular/core';

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

  ngOnInit(){
    // const s = Snap('#doughnut');
    // const elem = s.select("#ghg_1");
    // elem.attr({
    //   // fill: "#ff0000",
    //   stroke: "#ff0000",
    //   strokeWidth: 5
    // });
    this.populateSegmentList();
    console.log(this.segments);
    this.initAllSegments();
    this.bindAllCallbacks();
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

  resetAllSegments(){
    for(let i in this.segments){
      this.segments[i].resetSegment();
    }
  }

  doughnutHighlightSegment(segmentIn : SegmentEnum | null ){
    this.highlightedSegment = segmentIn;
    for(let i in this.segments){
      let segment = this.segments[i].cssId;
      const s = Snap('#doughnut');
      s.select(`#${segment}_1`).removeClass(colourClass.greyOut);
      s.select(`#${segment}_2`).removeClass(colourClass.greyOut);
      if(this.segments[i].innerOrOuter == ceilingOrFoundation.ceiling ){
        s.select(`#${segment}_3`).removeClass(colourClass.greyOut);
      }
      s.select(`#${segment}_-1`).removeClass(colourClass.greyOut);
      s.select(`#${segment}_-2`).removeClass(colourClass.greyOut);

      if(this.segments[i].segmentEnum == segmentIn){
        // console.log("SELECTED ",this.segments[i].cssId);
      }
      else if(segmentIn !== null) {
        s.select(`#${segment}_1`).addClass(colourClass.greyOut);
        s.select(`#${segment}_2`).addClass(colourClass.greyOut);
        if(this.segments[i].innerOrOuter == ceilingOrFoundation.ceiling ){
          s.select(`#${segment}_3`).addClass(colourClass.greyOut);
        }
        s.select(`#${segment}_-1`).addClass(colourClass.greyOut);
        s.select(`#${segment}_-2`).addClass(colourClass.greyOut);
      }
    }
  }

  populateSegmentList() {

    this.segments = [
      new Segment( 
        "Greenhouse Gas Emissions",
        SegmentEnum.GreenhouseGasEmissions,   
        ceilingOrFoundation.ceiling, 
        powerLevel.high,
        "ghg",
        "Proportion of sectors/ companies/groups/ individuals in Devon demonstrating commitment to achieving net zero Greenhouse Gas Emissions",
        { 
          description: "Number of non-essential journeys made by train vs. plane from Devon from/to places in the UK", 
          action:"Number of Devon citizens who sign up to the Flight Free UK Take Action pledge not to fly.", 
          data: null
        },
        { 
          description: "Proportion of businesses, representative bodies and/or sectors with a published commitment (pathways and reporting) to achieving net zero GGE", 
          action:"DCC, PCC, TC and LEP seek written commitment to GGE reduction and divestment from fossil fuels  from all sectors, including core Devon industries", 
          data: null
        },
      ),
      new Segment( 
        "Coast And Marine Health",
        SegmentEnum.CoastAndMarineHealth,   
        ceilingOrFoundation.ceiling, 
        powerLevel.above,
        "coast",
        "Proportion of sectors/ companies/groups/ individuals in Devon demonstrating commitment to reducing plastic pollution",
        { 
          description: "Proportion of primary schools who teach children about the 5 Rs: ‘refuse, reduce, reuse, recycle, rot’ ", 
          action:"People responsible for doing household shopping make a determined decision to either buy unpackaged fruit and veg, or take containers to shops, or unwrap cellophane wrapped fruit and veg in supermarkets and leave the packaging behind", 
          data: null
        },
        { 
          description: "Proportion of Devon’s shops (e.g. supermarkets, chemists and corner shops) who are no longer selling obviously problematic products like wet wipes and other single-use plastics  but offering non-plastic alternatives", 
          action:"Waste management companies, business leaders, community organizations and policy makers partner to provide a free seminar series to review Devon’s waste system with the public, including an update on progress of the 'UK Plastics Pact' and promote compliance for the implementation of the Plastic Tax in April 2022", 
          data: null
        },
      ),
      new Segment(
        "Waterbody Health",
        SegmentEnum.WaterbodyHealth, 
        ceilingOrFoundation.ceiling, 
        powerLevel.higher,
        "water",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment(
        "Habitat Health", 
        SegmentEnum.HabitatHealth,   
        ceilingOrFoundation.ceiling, 
        powerLevel.below,
        "habitat",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),    
      new Segment( 
        "Soil Health",
        SegmentEnum.SoilHealth,   
        ceilingOrFoundation.ceiling, 
        powerLevel.lower,
        "soil",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Plastic Pollution",
        SegmentEnum.PlasticPollution,  
        ceilingOrFoundation.ceiling, 
        powerLevel.above,
        "plastic",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Land Use Change",
        SegmentEnum.LandUseChange,   
        ceilingOrFoundation.ceiling, 
        powerLevel.above,
        "land",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Biodiversity",
        SegmentEnum.Biodiversity,   
        ceilingOrFoundation.ceiling, 
        powerLevel.above,
        "bio",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Air Quality",
        SegmentEnum.AirQuality,   
        ceilingOrFoundation.ceiling, 
        powerLevel.above,
        "air",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Waste",
        SegmentEnum.Waste,   
        ceilingOrFoundation.ceiling, 
        powerLevel.above,
        "waste",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),



      new Segment( 
        "Water Quality",
        SegmentEnum.WaterQuality,   
        ceilingOrFoundation.foundation, 
        powerLevel.high,
        "water_inner",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Food",
        SegmentEnum.Food,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "food",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Access To Nature",
        SegmentEnum.AccessToNature,   
        ceilingOrFoundation.foundation, 
        powerLevel.higher,
        "nature",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Health And Wellbeing",
        SegmentEnum.HealthAndWellbeing,   
        ceilingOrFoundation.foundation, 
        powerLevel.below,
        "health",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Education",
        SegmentEnum.Education,   
        ceilingOrFoundation.foundation, 
        powerLevel.lower,
        "education",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Income And Work",
        SegmentEnum.IncomeAndWork,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "income",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Political Voice",
        SegmentEnum.PoliticalVoice,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "political",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Safety",
        SegmentEnum.Safety,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "safety",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Equity And Equality",
        SegmentEnum.EquityAndEquality,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "equity",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Community",
        SegmentEnum.Community,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "community",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Housing",
        SegmentEnum.Housing,   
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "housing",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
      new Segment( 
        "Energy",
        SegmentEnum.Energy,  
        ceilingOrFoundation.foundation, 
        powerLevel.above,
        "energy",
        "",
        { description: "", action:"", data: null},
        { description: "", action:"", data: null},
      ),
    ];

    for(let i in this.segments){
      this.segments[i].componentReference = this;
    }
  }


  populateInfoPanel(segment : Segment){
    this.selectedSegment = segment;
    console.log("INFO: ", segment);
  }



}

enum powerLevel {
  higher,
  high,
  above,
  below,
  lower
};


enum SegmentEnum {
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


export  class Segment {
  label: string;
  segmentEnum : SegmentEnum;
  innerOrOuter : ceilingOrFoundation | null;
  level : powerLevel;
  cssId : string;
  description : string = "";
  citizen : IGenericUserInfo | null  = null;
  policyMaker : IGenericUserInfo | null  = null;
  callback: any = () => {
    this.componentReference.populateInfoPanel(this);
  };
  mouseoverCallback: any = () => {
    this.componentReference.doughnutHighlightSegment(this.segmentEnum);
  };
  mouseOutCallback: any = () => {
    this.componentReference.doughnutHighlightSegment(null);
  };
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

  bindCallback(){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    // s.select(`#${segment}_group`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
    s.select(`#${segment}_1`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
    s.select(`#${segment}_2`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
    if(this.innerOrOuter == ceilingOrFoundation.ceiling){
      s.select(`#${segment}_3`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
    }
    s.select(`#${segment}_-1`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
    s.select(`#${segment}_-2`).click(this.callback).mouseover(this.mouseoverCallback).mouseout(this.mouseOutCallback);
  }

  setLevel(level : powerLevel){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    const outer = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.red : colourClass.green;
    const inner = this.innerOrOuter == ceilingOrFoundation.ceiling ? colourClass.green : colourClass.red;

    try{
      if(this.level == powerLevel.higher){
        s.select(`#${segment}_1`).addClass(outer);
        s.select(`#${segment}_2`).addClass(outer);
        if(this.innerOrOuter == ceilingOrFoundation.ceiling){
          s.select(`#${segment}_3`).addClass(outer);
        }
      }
      else if(level == powerLevel.high){
        s.select(`#${segment}_1`).addClass(outer);
        s.select(`#${segment}_2`).addClass(outer);
      }
      else if(level == powerLevel.above){
        s.select(`#${segment}_1`).addClass(outer);
      }
      else if(level == powerLevel.below){
        s.select(`#${segment}_-1`).addClass(inner);
      }
      else if(level == powerLevel.lower){
        s.select(`#${segment}_-1`).addClass(inner);
        s.select(`#${segment}_-2`).addClass(inner);
      }
    }
    catch(e){
      console.log(e);
    }
  }

  resetSegment(){
    let segment = this.cssId;
    const s = Snap('#doughnut');
    if(this.innerOrOuter == ceilingOrFoundation.ceiling){
      s.select(`#${segment}_1`).removeClass(colourClass.red);
      s.select(`#${segment}_2`).removeClass(colourClass.red);
      s.select(`#${segment}_3`).removeClass(colourClass.red);
      s.select(`#${segment}_-1`).removeClass(colourClass.green);
      s.select(`#${segment}_-2`).removeClass(colourClass.green);
    }
    else if(this.innerOrOuter == ceilingOrFoundation.foundation){
      s.select(`#${segment}_1`).removeClass(colourClass.green);
      s.select(`#${segment}_2`).removeClass(colourClass.green);
      s.select(`#${segment}_-1`).removeClass(colourClass.red);
      s.select(`#${segment}_-2`).removeClass(colourClass.red);   
    }
  }
  

}

enum colourClass {
  red = "cls-11",
  green = "cls-9", //
  lightGrey = "cls-10",
  lightRed = "cls-8",
  greyOut = "grey-out"
}

export interface IGenericUserInfo  {
  description : string;
  action : string;
  data : number | null;
}


