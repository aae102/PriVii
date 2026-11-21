/* Completely fictional records. No PHI. */
window.PriViiSeed={
version:2,
practice:{name:'Willow Creek Family Practice',specialty:'Primary Care',location:'Summit, NJ',size:'2–5 clinicians',email:'demo@willow.example',admin:'Alex Morgan',code:'PRIMARY-2027',integration:{ehr:'Not Connected',billing:'Not Connected',clearinghouse:'Not Connected',pm:'Not Connected'}},
session:{name:'Taylor Reed, FNP-C',role:'FNP',authenticated:false},
team:[{name:'Taylor Reed',role:'FNP',status:'Active'},{name:'Alex Morgan',role:'Practice Administrator',status:'Active'},{name:'Sam Rivera',role:'Medical Assistant',status:'Invited'},{name:'Casey Brooks',role:'Billing Specialist',status:'Invited'}],
patients:[
{id:'PT-1042',name:'Jordan Ellis',age:52,pronouns:'They/them',specialty:'Primary Care',coverage:'Fictional commercial plan',visit:'Hypertension follow-up + fatigue',appointment:'Dec 16, 2026 · 9:30 AM',status:'Awaiting intake',intake:false,readings:[],symptoms:'',medications:'Amlodipine 5 mg daily (patient-reported; not verified)',questions:'',documents:[],photos:[],brief:{text:'',state:'Not generated',reviewedBy:''}},
{id:'PT-1043',name:'Maya Lin',age:34,pronouns:'She/her',specialty:'Dermatology',coverage:'Fictional commercial PPO',visit:'Changing upper-back spot + facial dryness',appointment:'Dec 17, 2026 · 1:15 PM',status:'Awaiting intake',intake:false,readings:[],symptoms:'',medications:'',questions:'',documents:[],photos:[],brief:{text:'',state:'Not generated',reviewedBy:''}}
],
tasks:[{id:'T-201',patientId:'PT-1042',title:'Confirm home BP cuff technique and readings',owner:'Sam Rivera',role:'Medical Assistant',state:'Open',source:'Simulated workflow',created:'Nov 21, 2026'}],
alerts:[
{id:'A-101',specialty:'Primary Care',title:'Documentation review before billing',type:'Simulated practice rule',effective:'Demonstration only',source:'Synthetic PriVii demonstration rule',verification:'Simulated',body:'Review encounter documentation completeness and payer-specific requirements before claim preparation. This does not represent a verified payer policy.',impact:'No financial estimate applied',reviewed:false},
{id:'A-102',specialty:'Dermatology',title:'2027 Medicare Physician Fee Schedule watch item',type:'Policy monitoring placeholder',effective:'2027 policy: verification required',source:'CMS Physician Fee Schedule official hub — https://www.cms.gov/medicare/payment/fee-schedules/physician',verification:'Not yet verified for 2027',body:'Check the official CMS final rule, addenda, and effective dates before communicating any 2027 rate or documentation change. No specific change is asserted in this offline demonstration.',impact:'Modeled financial impact intentionally withheld until official rule, code mix, and locality are verified. Does not apply to Maya’s fictional commercial PPO.',reviewed:false}
],
activity:[{text:'Fictional practice workspace prepared',at:'Demo seed'}]};