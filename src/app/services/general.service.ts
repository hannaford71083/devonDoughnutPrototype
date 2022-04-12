import { Injectable } from '@angular/core';
import { ceilingOrFoundation, powerLevel, SegmentEnum } from '../models/app-enums';
import { Segment } from '../models/shared-classes-interfaces';

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
          powerLevel.up5,
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
          "Proportion of seabed in Devon managed for ecosystem health, biodiversity, and local marine livelihoods",
          { 
            description: "Number of Devon volunteers actively involved in looking after sea life, with particular reference to sea grass, kelp and sand eels", 
            action:"Citizens join a Community Supported Fishery (e.g. Sole of Discretion) to support the livelihoods of local fishers and in their monitoring the health of inshore marine ecosystems", 
            data: null
          },
          { 
            description: "Proportion of Devon’s seabed in a designated HPMA where no fishing is allowed", 
            action:"Devon IFCA becomes involved, as do South Devon and Channel Shellfishermen, the Brixham and Torbay harbourmaster, with marine research institutions such as Plymouth Marine Lab, in determining how to achieve increase in HPMAs", 
            data: null
          },
        ),
        new Segment(
          "Waterbody Health",
          SegmentEnum.WaterbodyHealth, 
          ceilingOrFoundation.ceiling, 
          powerLevel.up5,
          "water",
          "Proportion of the freshwater environment in Devon managed for waterbody health, biodiversity, and livelihoods",
          { 
            description: "Abundance and diversity of wildlife in and around Devon’s rivers", 
            action:"Working with partners like WRT, citizens monitor water quality and  biodiversity across Devon’s rivers and streams and form a Citizens’ Observatory", 
            data: null
          },
          { 
            description: "Ratio between pollution incidents reported and those prosecuted", 
            action:"With encouragement from bodies like Defra, DTI, OFWAT and the NFU, polluters self report incidents and become citizen scientists", 
            data: null
          },
        ),
        new Segment(
          "Habitat Health", 
          SegmentEnum.HabitatHealth,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up2,
          "habitat",
          "Proportion of land in Devon managed for habitat health, biodiversity, and livelihoods",
          { 
            description: "Miles of Devon’s iconic hedges managed by communities as wildlife corridors", 
            action:"Communities create and manage patches of natural habitat and increase wildlife corridors so that habitat networks remain healthy", 
            data: null
          },
          { 
            description: "Square miles of landscape-scale management for carbon sequestration and healthy ecosystems", 
            action:"LNP maps the land set aside for rewilding in verges, churchyards,  woodlands and wildflower meadows in order to manage strategy to connect it all up into a habitat recovery network", 
            data: null
          },
        ),    
        new Segment( 
          "Soil Health",
          SegmentEnum.SoilHealth,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up4,
          "soil",
          "Proportion of land in Devon managed for soil health, biodiversity, and livelihoods",
          { 
            description: "Abundance and diversity  of microorganisms in soil as measured by schools in Devon", 
            action:"Devon and Cornwall Soil Association produces a pack for schools with training in citizen science on how to measure the density of microorganisms in soils", 
            data: null
          },
          { 
            description: "Proportion of land farmed regeneratively for soil health (no till, grazing animals, diversity of crops, organic matter in the soil) in Devon",
            action:"Councils ban the use of chemicals on their land and farms (glyphosate, neonicotinoids, metaldehyde, methiocarb and others) in insecticides, pesticides and herbicides. ", 
            data: null
          },
        ),
        new Segment( 
          "Plastic Pollution",
          SegmentEnum.PlasticPollution,  
          ceilingOrFoundation.ceiling, 
          powerLevel.threshold,
          "plastic",
          "Proportion of sectors/ companies/groups/ individuals in Devon demonstrating commitment to reducing plastic pollution",
          { 
            description: "Proportion of primary schools who teach children about the 5 Rs: ‘refuse, reduce, reuse, recycle, rot’", 
            action:"People responsible for doing household shopping make a determined decision to either buy unpackaged fruit and veg, or take containers to shops, or unwrap cellophane wrapped fruit and veg in supermarkets and leave the packaging behind", 
            data: null
          },
          { 
            description: "Proportion of Devon’s shops (e.g. supermarkets, chemists and corner shops) who are no longer selling obviously problematic products like wet wipes and other single-use plastics  but offering non-plastic alternatives", 
            action:"Waste management companies, business leaders, community organizations and policy makers partner to provide a free seminar series to review Devon's waste system with the public, including an update on progress of the 'UK Plastics Pact' and promote compliance for the implementation of the Plastic Tax in April 2022", 
            data: null
          },
        ),
        new Segment( 
          "Land Use Change",
          SegmentEnum.LandUseChange,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up3,
          "land",
          "Proportion of sectors/ companies/groups/ individuals in Devon demonstrating commitment to managing land for nature",
          { description: "Proportion of houses in residential areas maintaining permeable areas i.e. not opting for tarmac or paving", action:"Community groups work with big estates in Devon to cluster small woods together for linked-up ecosystem health with support from the WT and FC", data: null},
          { description: "Proportion of farmland lost to house building, development and urban encroachment year on year", action:"Landowners work together to develop a new model for multiple uses for land including woodland and agroecology, whilst navigating national / local planning rules", data: null},
        ),
        new Segment( 
          "Biodiversity",
          SegmentEnum.Biodiversity,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up2,
          "bio",
          "Proportion of land in Devon managed for biodiversity increase",
          { description: "Proportion of gardens in Devon that use no chemicals and are havens for biodiversity", 
            action:"Church congregations lobby their diocese and CWGC to stop use altogether of biocides, herbicides and pesticides within their churchyard and graveyards", data: null},
          { description: "Proportion of Devon verges and field edges left to re-wild for biodiversity", 
            action:"Regenerative Agriculture and  Agroecology farmers/researchers/ policymakers  in Devon demonstrate the gains of managing farmland for biodiversity to DEFRA and other agricultural bodies", data: null},
        ),
        new Segment( 
          "Air Quality",
          SegmentEnum.AirQuality,   
          ceilingOrFoundation.ceiling, 
          powerLevel.down2,
          "air",
          "Proportion of sectors/ companies/groups/ individuals in Devon demonstrating commitment to improving air quality",
          { 
            description: "Proportion of journeys made by private cars vs. public transport for school runs and work commute", 
            action:"Community groups work with DCC to design and implement a subsidised transport scheme for Devon ensuring connectivity to all areas (and not  just reserved for those with a means to choose) utilizing low emission solutions that are accessible to all, e.g. more electric buses and boats", 
            data: null
          },
          { 
            description: "Number of Environmental Permits in Devon granted by councils year on year in proximity to residential neighbourhoods", 
            action:"DCC installs large-scale, realtime signage giving air pollution readings on a significant number of road overpasses throughout Devon", 
            data: null
          },
        ),
        new Segment( 
          "Waste",
          SegmentEnum.Waste,   
          ceilingOrFoundation.ceiling, 
          powerLevel.up2,
          "waste",
          "Proportion of sectors/ companies/groups/ individuals in Devon demonstrating commitment to addressing waste",
          { 
            description: "Proportion of organic waste that is sent to composting and then returned to the land in Devon ", 
            action:"Food growers, allotment holders, gardeners and concerned households in Devon communities take matters into their own hands to solve the lack of large-scale composting options and link up to join emerging community composting schemes", 
            data: null
          },
          { 
            description: "Proportion of Devon’s household waste in general that is reduced year on year in absolute terms and not sent to landfill or incinerators", 
            action:"District Councils in Devon who are unable to collect food and garden waste for composting or have over complex schemes for recycling, pool ideas and resources in order to solve HGV driver shortages and support local community composting", 
            data: null
          },
        ),
        new Segment( 
          "Water Quality",
          SegmentEnum.WaterQuality,   
          ceilingOrFoundation.foundation, 
          powerLevel.down3,
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
          powerLevel.up4,
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
          "Frequency of moments when people–particularly young people–in Devon experience guided interaction with nature",
          { 
            description: "Amount of guided interaction in nature offered by schools  in order to improve student mental health", 
            action:"Parents advocate, and Devon teachers and pupils devise, extra- curricular ways to get into nature in order to build a case for its importance", 
            data: null
          },
          { 
            description: "Proportion of young people of school age prescribed by the NHS with time in nature at no/low cost", 
            action:"Nature-based groups get together with DCC, PCC and TC and deliver a an ‘Access to Nature Strategy’ to the Board of Education and the NHS in order to demonstrate multiple gains", 
            data: null
          },
        ),
        new Segment( 
          "Health And Wellbeing",
          SegmentEnum.HealthAndWellbeing,   
          ceilingOrFoundation.foundation, 
          powerLevel.down2,
          "health",
          "Prevalence of access to open-ended, low-cost mental health support in Devon",
          { 
            description: "Number of organisations (social enterprise/other) in Devon offering open-ended, low-cost mental health support", 
            action:"An employee-led, anonymous ‘Wellbeing Review System’ is established to capture stories that reveal more subtle aspects of what’s going on directly from 1) staff under pressure and 2) those experiencing life on the margins in order for a more accurate story to be told. For example: number of patients per hour, number of hospital admissions for infant asthma, number of visits to A&E (because deprived families often don’t attend GP’s surgeries)", 
            data: null
          },
          { 
            description: "Proportion of adults in Devon with mental health problems who are being cared for to their satisfaction", 
            action:"DCC, PCC and TC fund a consortia of social prescribing groups (arts, sports, dance, gardening, for example)  in order to co-design a new product and service delivery system in support of open-ended, low-cost mental health support", 
            data: null
          },
        ),
        new Segment( 
          "Education",
          SegmentEnum.Education,   
          ceilingOrFoundation.foundation, 
          powerLevel.threshold,
          "education",
          "Proportion of people  who feel equipped to tackle today’s issues with a healthy body and mind",
          { 
            description: "Proportion of parents, teachers and students advocating for a more relevant curriculum that meets the challenges of the 21st century", 
            action:"Parents of students, and teachers across Devon integrate the teaching of real world problem solving (relevant to current issues)  into the curriculum", 
            data: null
          },
          { 
            description: "Number of opportunities created by DfE-appointed Children’s Services Adviser and sector-led ‘improvement partner’ to co-develop with the public ways to improve children’s social care services", 
            action:"The DfE runs a Devon-wide pilot that makes changes to the curriculum across all subjects bringing more relevance and less pressure associated with testing", 
            data: null
          },
        ),
        new Segment( 
          "Income And Work",
          SegmentEnum.IncomeAndWork,   
          ceilingOrFoundation.foundation, 
          powerLevel.down2,
          "income",
          "Proportion of people gainfully employed on a living wage",
          { 
            description: "Number of people in Devon  who have found local opportunities for satisfying careers and livelihoods", 
            action:"Participation increases in lifelong learning programmes  in Devon to advance the knowledge of digital technology and innovation in order to boost employability", 
            data: null
          },
          { 
            description: "Number of investments by Government, business and academia in jointly  enabling and resourcing clean green enterprises in the Devon economy ", 
            action:"The Federation of Small Businesses, Devon County Council, South West Business Council, District Councils, the LEP, Chamber of Commerce and Confederation of British Industry, Plymouth and Exeter Universities work together to Increase investment year on year in digital infrastructure and world-leading technology skills that attract higher-paid jobs to Devon", 
            data: null
          },
        ),
        new Segment( 
          "Political Voice",
          SegmentEnum.PoliticalVoice,   
          ceilingOrFoundation.foundation, 
          powerLevel.down2,
          "political",
          "Proportion of people who know that when they speak out about what matters most to them about our society and world they are being heard",
          { 
            description: "Number of communities that actively involve young people in local decision-making so that young people experience the power of their own voices", 
            action:"Working with the Devon Youth Parliament, Climate Action Networks in Devon give young adults a role in making decisions about how to achieve climate resilience.", 
            data: null
          },
          { 
            description: "Number of learning programmes in Devon (including schools) that are actively linked into their local communities and thus give students active experience of how to make change happen through dialogue and collective action", 
            action:"Devon’s regional councils learn from Scotland about how to  embrace participatory budgeting. ‘Citizen Voice’ groups are set up to debate the allocation of funding in order to resource local initiatives and groups to carry out worthwhile projects.", 
            data: null
          },
        ),
        new Segment( 
          "Safety",
          SegmentEnum.Safety,   
          ceilingOrFoundation.foundation, 
          powerLevel.up1,
          "safety",
          "Level of people feeling safe in daily life (in both urban and rural settings)–in relation to harassment and other forms of violence in public spaces",
          { 
            description: "Number of women and girls who feel sufficiently confident to report incidences of harassment and violence to the police that are then logged ", 
            action:"Within organizations, human resource departments maintain safety as a priority, by offering bystander intervention training, having clear zero-tolerance policies on sexual harassment and consistently responding to complaints", 
            data: null
          },
          { 
            description: "Ratio between incidents reported and prosecutions in Devon", 
            action:"Charities are resourced to collaborate with the Ministry of Justice to implement a live 24/7 rape and sexual assault helpline in Devon", 
            data: null
          },
        ),
        new Segment( 
          "Equity And Equality",
          SegmentEnum.EquityAndEquality,   
          ceilingOrFoundation.foundation, 
          powerLevel.threshold,
          "equity",
          "Percentage of people who enjoy social justice and don’t suffer from discrimination",
          { 
            description: "Proportion of civil society groups and organisations in Devon actively engaged in anti- discrimination efforts", 
            action:"Organisations learn from businesses to address Equality Diversity and Inclusivity in order to explore issues that divide, such as economic inequality, immigration, structural racism and gender bias", 
            data: null
          },
          { 
            description: "Ratio between hate incidents reported and those acted upon by the police (finding ways to include non- criminal offences like social media bullying or verbal comments)", 
            action:"Sector leaders step up and work against discrimination in housing, employment, education and in situations affecting those with disabilities", 
            data: null
          },
        ),
        new Segment( 
          "Community",
          SegmentEnum.Community,   
          ceilingOrFoundation.foundation, 
          powerLevel.up2,
          "community",
          "Percentage of communities in Devon that are building resilience through community-organized networks, digital connectivity and local economic activity",
          { 
            description: "Proportion of households who know their neighbours and know where they can go to get help (from an organisation or an individual)", 
            action:"Communities actively network their groups (such as the rugby club, playgroups, work hubs and WI) together in order to build resilience, knowing that the more connections exist in a community the more ready it is to respond proactively and collaborate when the need arises", 
            data: null
          },
          { 
            description: "Proportion of internet service companies providing affordable  solutions for households and businesses who currently have inadequate access to the internet", 
            action:"In order to boost the social resilience of Devon’s communities, local councils and institutions commit to maintaining public spaces and communal facilities where people gather (e.g. village halls, leisure centres, open spaces, benches)", 
            data: null
          },
        ),
        new Segment( 
          "Housing",
          SegmentEnum.Housing,   
          ceilingOrFoundation.foundation, 
          powerLevel.down3,
          "housing",
          "Proportion of adults in Devon who are able to buy/rent affordable housing of a minimum acceptable standard",
          { 
            description: "Number of mortgage providers, employers  and landlords who actively support young adults to buy/rent affordable housing as first homes", 
            action:"Communities collect evidence of impact of loss of young talent to the local area, or young adults subsisting on inadequate wages and in low-skilled jobs unable to get decent housing in order to demonstrate this underlying and chronic problem and to  influence policy", 
            data: null
          },
          { 
            description: "Number of regional councils who promote policies that actively support adults buying or renting affordable housing of a minimum acceptable standard", 
            action:"Devon MPs work with government at national, county and regional level to take action on rising house prices due to second home owners and buy-to-let taking over the property market in Devon. Action is taken on rent control with priority given to young adults", 
            data: null
          },
        ),
        new Segment( 
          "Energy",
          SegmentEnum.Energy,  
          ceilingOrFoundation.foundation, 
          powerLevel.down1,
          "energy",
          "Proportion of energy consumed in Devon that comes from renewable sources",
          { 
            description: "Proportion of households signed up to a renewable energy tariff", 
            action:"Communities reduce their energy consumption by adopting schemes such as  the Transition Streets programme",
            data: null
          },
          { 
            description: "Number of councils actively funding local green energy storage and distribution networks", 
            action:"Western Power upgrades the grid to accept more renewable energy from Devon", 
            data: null
          },
        ),
      ];
  }
}
