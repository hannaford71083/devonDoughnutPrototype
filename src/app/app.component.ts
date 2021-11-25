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

  ngOnInit(){
    // const s = Snap('#doughnut');
    // const elem = s.select("#ghg_1");
    // elem.attr({
    //   // fill: "#ff0000",
    //   stroke: "#ff0000",
    //   strokeWidth: 5
    // });


    this.startDoughnut();
    // this.endDoughnut();
  }


  startDoughnut(){
    // ecological ceiling
    this.SetLevel(powerLevel.above,  segment.GreenhouseGasEmissions, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below,  segment.CoastAndMarineHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.higher, segment.WaterbodyHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.high,   segment.HabitatHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.above, segment.SoilHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below,  segment.PlasticPollution, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.above,  segment.LandUseChange, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.higher, segment.Biodiversity, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.high,   segment.AirQuality, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.above,  segment.Waste, ceilingOrFoundation.ceiling);
    // social foundation
    this.SetLevel(powerLevel.lower,  segment.WaterQuality, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,  segment.Food, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below, segment.AccessToNature, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,   segment.HealthAndWellbeing, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above, segment.Education, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.lower,  segment.IncomeAndWork, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,  segment.PoliticalVoice, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.high, segment.Safety, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.lower,   segment.EquityAndEquality, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above,  segment.Coummunity, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,   segment.Housing, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,  segment.Energy, ceilingOrFoundation.foundation);
  }

  endDoughnut(){
    // ecological ceiling
    this.SetLevel(powerLevel.below,  segment.GreenhouseGasEmissions, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below,  segment.CoastAndMarineHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.lower, segment.WaterbodyHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below,   segment.HabitatHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.above, segment.SoilHealth, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below,  segment.PlasticPollution, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.above,  segment.LandUseChange, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below, segment.Biodiversity, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.lower,   segment.AirQuality, ceilingOrFoundation.ceiling);
    this.SetLevel(powerLevel.below,  segment.Waste, ceilingOrFoundation.ceiling);
    // social foundation
    this.SetLevel(powerLevel.above,  segment.WaterQuality, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above,  segment.Food, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above, segment.AccessToNature, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,   segment.HealthAndWellbeing, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.higher, segment.Education, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above,  segment.IncomeAndWork, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.below,  segment.PoliticalVoice, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.high, segment.Safety, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above,   segment.EquityAndEquality, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.higher,  segment.Coummunity, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.high,   segment.Housing, ceilingOrFoundation.foundation);
    this.SetLevel(powerLevel.above,  segment.Energy, ceilingOrFoundation.foundation);
  }


  SetLevel(level : powerLevel, segment : segment,  innerOuter : ceilingOrFoundation){
    const s = Snap('#doughnut');
    const outer = innerOuter == ceilingOrFoundation.ceiling ? colourClass.green : colourClass.red;
    const inner = innerOuter == ceilingOrFoundation.ceiling ? colourClass.red : colourClass.green;
    try{
      if(level == powerLevel.higher){
        s.select(`#${segment}_1`).addClass(outer);
        s.select(`#${segment}_2`).addClass(outer);
        if(innerOuter == ceilingOrFoundation.ceiling){
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


  // TODO
  resetSegment(segment : segment){
    const s = Snap('#doughnut');
    s.select(`#${segment}_1`).removeClass("cls-11");
    s.select(`#${segment}_2`).removeClass("cls-11");
    s.select(`#${segment}_3`).removeClass("cls-11");
    s.select(`#${segment}_-1`).removeClass("cls-9");
    s.select(`#${segment}_-2`).removeClass("cls-9");

    s.select(`#${segment}_1`).addClass("cls-10");
    s.select(`#${segment}_2`).addClass("cls-10");
    s.select(`#${segment}_3`).addClass("cls-10");
    s.select(`#${segment}_-1`).addClass("cls-8");
    s.select(`#${segment}_-2`).addClass("cls-8");
    
  }



}



enum powerLevel {
  higher,
  high,
  above,
  below,
  lower
};

enum segment {
  GreenhouseGasEmissions = "ghg",
  CoastAndMarineHealth = "coast",
  WaterbodyHealth = "water",
  HabitatHealth = "habitat",
  SoilHealth = "soil",
  PlasticPollution = "plastic",
  LandUseChange = "land",
  Biodiversity = "bio",
  AirQuality = "air",
  Waste = "waste",

  WaterQuality = "water_inner",
  Food = "food",
  AccessToNature = "nature",
  HealthAndWellbeing = "health",
  Education = "education",
  IncomeAndWork = "income",
  PoliticalVoice = "political",
  Safety = "safety",
  EquityAndEquality = "equity",
  Coummunity = "community",
  Housing = "housing",
  Energy = "energy"
};

enum colourClass {
  red = "cls-9",
  green = "cls-11"
}

enum ceilingOrFoundation {
  ceiling,
  foundation
}

/*

#ghg_3
#ghg_2
#ghg_1
#ghg_-1
#ghg_-2

*/


