const demoData = {
  demo1: {
    claimNo:"20042047", worker:"Madeleine Willson", appId:"712041",
    submitted:"March 19, 2024 19:21", reportDate:"March 15, 2024",
    returnStatus:"returned", returnDate:"March 15, 2024",
    workStatus:"modifiedReduced", workOther:"",
    returnComment:"Terrible. Testing Testing", expectedReturn:"",
    concerns:"", employerContact:"", employerContactDate:"",
    recovered:"yes", recoveryComments:"",
    pain:4, medicalTreatment:"continuing", providerType:"Physiotherapist",
    lastTreatmentDate:"March 10, 2024", lastProvider:"Dr. Best",
    nextTreatmentDate:"March 25, 2024", nextProvider:"Dr. Best",
    therapyFrequency:"Twice weekly", medication:"taking", medicationName:"Naproxen",
    homeExercises:"doing", exercises:"Stretching and light strengthening exercises.",
    additionalInfo:"No info Testing Testing"
  },
  demo2: {
    claimNo:"20098765", worker:"Alex Johnson", appId:"880144",
    submitted:"August 19, 2026 16:30", reportDate:"August 19, 2026",
    returnStatus:"notReturned", returnDate:"",
    workStatus:"fullRegular", workOther:"",
    returnComment:"Recovery is progressing well.", expectedReturn:"September 5, 2026",
    concerns:"I am concerned about lifting heavy items during the first week back.",
    employerContact:"Sarah Brown", employerContactDate:"August 18, 2026",
    recovered:"no", recoveryComments:"Still attending follow-up appointments.",
    pain:7, medicalTreatment:"notContinuing", providerType:"",
    lastTreatmentDate:"August 15, 2026", lastProvider:"City Clinic",
    nextTreatmentDate:"August 25, 2026", nextProvider:"City Clinic",
    therapyFrequency:"Once weekly", medication:"notTaking", medicationName:"",
    homeExercises:"notDoing", exercises:"",
    additionalInfo:"No additional information."
  }
};

let data = structuredClone(demoData.demo1);

const check = (ok) => `<span class="box ${ok?'checked':''}"></span>`;
const field = (v, cls="") => `<span class="line ${cls}">${v||""}</span>`;
const footer = (n) => `<div class="footer"><span>Worker App ID: ${data.appId}</span><span>Submitted: ${data.submitted}<br>Page ${n} of 3</span></div>`;
const header = () => `
<div class="header">
  <img class="logo" src="assets/wcb-logo.png" alt="Workers Compensation Board of Manitoba">
  <div class="contact">333 Broadway<br>Winnipeg, MB R3C 4W3<br>Phone: (204) 954-4321<br>Toll Free: 1-855-954-4321<br>wcb.mb.ca</div>
  <div class="titlebox"><div class="report-title">Worker Progress Report</div><div class="claim">Claim No. ${data.claimNo}</div></div>
</div>`;

function page1(){
return `<section class="page">${header()}
<div class="intro"><span class="blue">${data.worker}</span> provided the following updates in relation to their claim:</div>
<h2>Return to Work</h2>
<div class="section"><div class="section-title">Select one:</div>
<div class="grid grid-3">
<div class="check">${check(data.returnStatus==="notMissed")} I have not missed<br>time from work</div>
<div class="check">${check(data.returnStatus==="notReturned")} I have not returned<br>to work</div>
<div class="check">${check(data.returnStatus==="returned")} I returned to work on: ${field(data.returnDate)}<div class="label">Date</div></div>
</div></div>
<div class="section"><div class="section-title">I am working:</div>
<div class="grid grid-4">
<div class="check">${check(data.workStatus==="fullRegular")} Full duties, regular<br>hours</div>
<div class="check">${check(data.workStatus==="fullReduced")} Full duties, reduced<br>hours</div>
<div class="check">${check(data.workStatus==="modifiedRegular")} Modified duties,<br>regular hours</div>
<div class="check">${check(data.workStatus==="modifiedReduced")} Modified duties,<br>reduced hours</div>
</div>
<div class="check" style="margin-top:8px">${check(data.workStatus==="other")} Other: ${field(data.workOther,"long")}</div>
</div>
<div class="section"><div class="section-title">My return to work is going:</div><div class="blue">${data.returnComment}</div></div>
<div class="inline-field" style="margin:10px 0 15px">I expect to return to work on: ${field(data.expectedReturn,"long")}<div class="label">Date</div></div>
<div class="section bigbox"><div class="section-title">I have the following concerns about returning to work:</div>${data.concerns}</div>
<div class="inline-field" style="margin:16px 4px">I was most recently in contact with: ${field(data.employerContact,"long")} on ${field(data.employerContactDate,"long")}</div>
<h2>Recovery</h2>
<div class="section"><div class="section-title">Select one:</div>
<div class="grid grid-2">
<div class="check">${check(data.recovered==="no")} I have not fully recovered from my workplace<br>injury.</div>
<div class="check">${check(data.recovered==="yes")} I have fully recovered from my workplace<br>injury.</div>
</div></div>
<div class="section bigbox"><div class="section-title">I have provided the following comments about my recovery:</div>${data.recoveryComments}</div>
${footer(1)}</section>`;
}

function page2(){
return `<section class="page">
<div class="rating" style="margin-top:0">${Array.from({length:10},(_,i)=>`<div class="check">${check(data.pain===i+1)} ${i+1}</div>`).join("")}</div>
<p style="font-size:15px;margin-top:-24px;margin-right:430px">I rate my current pain/discomfort on a scale of 1-10, where 1 is no pain and 10 is severe pain out of 10.</p>
<div class="section"><div class="section-title">Select one:</div>
<div class="grid grid-3">
<div class="check">${check(data.medicalTreatment==="notContinuing")} I am not continuing to<br>receive medical treatment for<br>my workplace injury.</div>
<div class="check">${check(data.medicalTreatment==="continuing")} I am continuing to receive<br>medical treatment for my<br>workplace injury from:</div>
<div>${field(data.providerType,"long")}<div class="label">(Medical Provider Type)</div></div>
</div></div>
<div class="inline-field" style="margin:25px 4px">My last medical treatment was ${field(data.lastTreatmentDate,"long")} from ${field(data.lastProvider,"long")}</div>
<div class="inline-field" style="margin:25px 4px">My next medical treatment is ${field(data.nextTreatmentDate,"long")} from ${field(data.nextProvider,"long")}</div>
<div class="inline-field" style="margin:25px 4px">I am attending a Chiropractor or Physiotherapist ${field(data.therapyFrequency,"long")}</div>
<div class="section"><div class="section-title">Select one:</div>
<div class="grid grid-2">
<div class="check">${check(data.medication==="notTaking")} I am not taking medication<br>for my workplace injury.</div>
<div class="check">${check(data.medication==="taking")} I am taking medication for my<br>workplace injury: ${field(data.medicationName,"long")}<div class="label">(Name of prescribed medication)</div></div>
</div></div>
<div class="section"><div class="section-title">Select one:</div>
<div class="grid grid-2">
<div class="check">${check(data.homeExercises==="notDoing")} I am not doing home exercises for my workplace<br>injury.</div>
<div class="check">${check(data.homeExercises==="doing")} I am doing home exercises for my workplace<br>injury.</div>
</div></div>
<div class="section bigbox"><div class="section-title">List the exercises you are doing:</div>${data.exercises}</div>
<h2>Other Information</h2>
<div class="section"><div class="section-title">I would like to provide the following additional information about my claim/injury:</div><span class="blue">${data.additionalInfo}</span></div>
${footer(2)}</section>`;
}

function page3(){
return `<section class="page">
<p class="signature-text">I certify that the information given on this form is true, correct and complete to the best of my knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I return to any form of work and/or employment. I understand that it is an offence to knowingly make a false statement to the WCB. I also understand that it is an offence to withhold information from WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or follow my treatment, may result in the WCB reducing or suspending my benefits.</p>
<p class="signature-text">I understand that the Privacy Notice applies to the personal information collected in this document.</p>
${footer(3)}</section>`;
}

function render(){ document.getElementById("app").innerHTML = page1()+page2()+page3(); }
function loadDemo(name){ data = structuredClone(demoData[name]); render(); }
render();
