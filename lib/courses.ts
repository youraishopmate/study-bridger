export type Course={slug:string;name:string;institution:string;level:string;stream:string;country:string;continent:string;duration:string;budget:string}
export const courses:Course[]=[
{slug:'msc-data-science',name:'MSc Data Science',institution:'Technical University of Munich',level:"Master's",stream:'STEM',country:'Germany',continent:'europe',duration:'2 years',budget:'$30,000–$50,000'},
{slug:'ba-journalism',name:'BA Journalism',institution:'University of Leeds',level:"Bachelor's",stream:'Arts & Humanities',country:'UK',continent:'europe',duration:'3 years',budget:'$30,000–$50,000'},
{slug:'foundation-business',name:'Foundation Year in Business',institution:'Monash College',level:'Foundation',stream:'Commerce & Business',country:'Australia',continent:'oceania',duration:'1 year',budget:'$30,000–$50,000'},
{slug:'diploma-sports-coaching',name:'Diploma in Sports Coaching',institution:'University of Alberta',level:'Vocational & Technical',stream:'Sports Science',country:'Canada',continent:'north-america',duration:'2 years',budget:'$15,000–$30,000'},
{slug:'bsc-computer-science',name:'BSc Computer Science',institution:'University of Toronto',level:"Bachelor's",stream:'STEM',country:'Canada',continent:'north-america',duration:'4 years',budget:'$30,000–$50,000'},
{slug:'ma-international-relations',name:'MA International Relations',institution:'Leiden University',level:"Master's",stream:'Arts & Humanities',country:'Netherlands',continent:'europe',duration:'1 year',budget:'$30,000–$50,000'},
{slug:'phd-renewable-energy',name:'PhD Renewable Energy',institution:'University of Melbourne',level:'Doctorate',stream:'STEM',country:'Australia',continent:'oceania',duration:'4 years',budget:'$50,000+',},
{slug:'msc-finance',name:'MSc Finance',institution:'National University of Singapore',level:"Master's",stream:'Commerce & Business',country:'Singapore',continent:'asia',duration:'1 year',budget:'$30,000–$50,000'},
{slug:'language-mandarin',name:'Mandarin Language Program',institution:'Peking University',level:'Language Program',stream:'Arts & Humanities',country:'China',continent:'asia',duration:'6 months',budget:'Under $15,000'},
{slug:'doctorate-public-health',name:'Doctorate of Public Health',institution:'University of São Paulo',level:'Doctorate',stream:'STEM',country:'Brazil',continent:'south-america',duration:'4 years',budget:'Under $15,000'},
{slug:'vocational-design',name:'Diploma in Digital Design',institution:'Cape Peninsula University',level:'Vocational & Technical',stream:'Arts & Humanities',country:'South Africa',continent:'africa',duration:'2 years',budget:'Under $15,000'},
{slug:'postdoc-ai',name:'Postdoctoral AI Research',institution:'University of Auckland',level:'Postdoctoral',stream:'STEM',country:'New Zealand',continent:'oceania',duration:'2 years',budget:'$50,000+'},
{slug:'mba-entrepreneurship',name:'MBA Entrepreneurship',institution:'Tecnológico de Monterrey',level:"Master's",stream:'Commerce & Business',country:'Mexico',continent:'north-america',duration:'2 years',budget:'$15,000–$30,000'}]
export const levels=['Foundation',"Bachelor's", "Master's",'Doctorate','Postdoctoral','Language Program']
export const streams=['Arts & Humanities','STEM','Commerce & Business','Sports Science','Vocational & Technical']
export const continents=['europe','asia','north-america','oceania','africa','south-america']
export const label=(s:string)=>s.split('-').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ')
export const budgetRank=(b:string)=>['Under $15,000','$15,000–$30,000','$30,000–$50,000','$50,000+','Not sure yet'].indexOf(b)

