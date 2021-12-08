import { Injectable } from '@angular/core';
import { ceilingOrFoundation, powerLevel, SegmentEnum } from './shared-classes-interfaces';
import { Segment } from './shared-classes-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  getSegments(){
    return [
        new Segment( 
          "Greenhouse Gas Emissions",
          SegmentEnum.GreenhouseGasEmissions,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up4,
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
          powerLevel.up2,
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
          powerLevel.up5,
          "water",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment(
          "Habitat Health", 
          SegmentEnum.HabitatHealth,   
          ceilingOrFoundation.ceiling, 
          powerLevel.down2,
          "habitat",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),    
        new Segment( 
          "Soil Health",
          SegmentEnum.SoilHealth,   
          ceilingOrFoundation.ceiling, 
          powerLevel.down4,
          "soil",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Plastic Pollution",
          SegmentEnum.PlasticPollution,  
          ceilingOrFoundation.ceiling, 
          powerLevel.up2,
          "plastic",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Land Use Change",
          SegmentEnum.LandUseChange,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up2,
          "land",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Biodiversity",
          SegmentEnum.Biodiversity,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up1,
          "bio",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Air Quality",
          SegmentEnum.AirQuality,   
          ceilingOrFoundation.ceiling, 
          powerLevel.threshold,
          "air",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Waste",
          SegmentEnum.Waste,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up2,
          "waste",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
    
    
    
        new Segment( 
          "Water Quality",
          SegmentEnum.WaterQuality,   
          ceilingOrFoundation.foundation, 
          powerLevel.up5,
          "water_inner",
          "Number of sources where Devon citizens can easily access data and information about the quality and quantity of water in Devon",
          { 
            description: "Proportion of households in Devon with water metres that are taking action on saving water", 
            action:"Communities in Devon actively measure and log their water quality, trained by WRT in citizen science", 
            data: null
          },
          { 
            description: "Quantity of water consumed per head in Devon per day", 
            action:"SWW puts loggers on DMAs, repairs leaks, and provides communities with regular data on water use as well as information on why saving water is important in the context of climate change", 
            data: null
          },
        ),
        new Segment( 
          "Food",
          SegmentEnum.Food,   
          ceilingOrFoundation.foundation, 
          powerLevel.up1,
          "food",
          "Frequency of ‘touch points’ at every level where the link between regional  producer and consumer is enabled and reinforced ",
          { 
            description: "Proportion of household income spent on fresh, regional food as opposed to imported food", 
            action:"Parents request that schools purchase meals from local producers and chefs in Devon ", 
            data: null
          },
          { 
            description: "Proportion of supermarkets who undertake to source more food from local/ regional growers /producers", 
            action:"Food hubs, aggregation of purchasing by anchor institutions, networks of organic/regenerative producers. In other words, collaboration at all scales across food webs via partnerships and networks, enabled by policy makers.", 
            data: null
          },
        ),
        new Segment( 
          "Access To Nature",
          SegmentEnum.AccessToNature,   
          ceilingOrFoundation.foundation, 
          powerLevel.up3,
          "nature",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Health And Wellbeing",
          SegmentEnum.HealthAndWellbeing,   
          ceilingOrFoundation.foundation, 
          powerLevel.up2,
          "health",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Education",
          SegmentEnum.Education,   
          ceilingOrFoundation.foundation, 
          powerLevel.down2,
          "education",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Income And Work",
          SegmentEnum.IncomeAndWork,   
          ceilingOrFoundation.foundation, 
          powerLevel.down3,
          "income",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Political Voice",
          SegmentEnum.PoliticalVoice,   
          ceilingOrFoundation.foundation, 
          powerLevel.down2,
          "political",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Safety",
          SegmentEnum.Safety,   
          ceilingOrFoundation.foundation, 
          powerLevel.up1,
          "safety",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Equity And Equality",
          SegmentEnum.EquityAndEquality,   
          ceilingOrFoundation.foundation, 
          powerLevel.up3,
          "equity",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Community",
          SegmentEnum.Community,   
          ceilingOrFoundation.foundation, 
          powerLevel.up2,
          "community",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Housing",
          SegmentEnum.Housing,   
          ceilingOrFoundation.foundation, 
          powerLevel.up1,
          "housing",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
        new Segment( 
          "Energy",
          SegmentEnum.Energy,  
          ceilingOrFoundation.foundation, 
          powerLevel.up3,
          "energy",
          "",
          { description: "", action:"", data: null},
          { description: "", action:"", data: null},
        ),
      ];
  }
}
