const demoData = {
demo1:{
 claimNo:"20042047", worker:"Madeleine Willson", appId:"712041", submitted:"March 28, 2024 20:43",
 prescription:[["Naproxen","February 28, 2024","February 29, 2024","Dr. Best","$20.00"]],
 otc:[["Advil","March 28, 2024","$8.00","Shoppers Drug Mart","Pain"]],
 supplies:[["Tensor","February 28, 2024","Yes","Dr. Best","$10.00","Shoppers DrugMart"]],
 parking:[["333 St Mary Ave, Winnipeg MB R3C4A5, Canada","March 28, 2024","$10.00","yes","12245"]],
 mileage:[["March 28, 2024","HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada","WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada","20 km"]],
 fares:[["March 28, 2024","","HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada","Bus","$3.00"],
        ["March 27, 2024","25 Furby St, Winnipeg MB R3C2A2, Canada","440 Edmonton St, Winnipeg MB R3B 2M4, Canada","Taxi","$15.00"]]
},
demo2:{
 claimNo:"20123456", worker:"Alex Johnson", appId:"880144", submitted:"August 19, 2026 16:45",
 prescription:[
 ["Ibuprofen","August 1, 2026","August 2, 2026","Dr. Smith","$18.00"],
 ["Acetaminophen","August 5, 2026","August 5, 2026","Dr. Smith","$12.00"],
 ["Naproxen","August 8, 2026","August 9, 2026","Dr. Lee","$24.00"]
 ],
 otc:[
 ["Band-Aid","August 3, 2026","$6.50","Local Pharmacy","Wound care"],
 ["Advil","August 9, 2026","$9.25","Shoppers Drug Mart","Pain"]
 ],
 supplies:[
 ["Wrist Brace","August 4, 2026","Yes","Dr. Lee","$35.00","Medical Store"],
 ["Ice Pack","August 6, 2026","No","Local Pharmacy","$8.00","Local Pharmacy"]
 ],
 parking:[
 ["100 Main St, Winnipeg MB","August 5, 2026","$12.00","yes","A-8832"],
 ["250 Portage Ave, Winnipeg MB","August 10, 2026","$7.50","yes","B-1244"]
 ],
 mileage:[
 ["August 5, 2026","City Hospital, Winnipeg MB","WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada","18 km"],
 ["August 10, 2026","North Clinic, Winnipeg MB","WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada","26 km"]
 ],
 fares:[
 ["August 11, 2026","10 Main St, Winnipeg MB","City Hospital, Winnipeg MB","Bus","$4.00"]
 ]
}
};
let data=structuredClone(demoData.demo1);

const head = (title) => `<h2>${title}</h2>`;
const table=(headers,rows)=>`<div class="table-wrap"><table><thead><tr>${headers.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(v=>`<td class="data">${v||""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const footer=(n)=>`<div class="footer"><span>Worker App ID: ${data.appId}</span><span>Submitted: ${data.submitted}<br>Page ${n} of 2</span></div>`;
const header=()=>`<div class="header">
<img class="logo" src="assets/wcb-logo.png" alt="Workers Compensation Board of Manitoba">
<div class="contact">333 Broadway<br>Winnipeg, MB R3C 4W3<br>Phone: (204) 954-4321<br>Toll Free: 1-855-954-4321<br>wcb.mb.ca</div>
<div class="titlebox"><strong class="expense-title">Medical & Travel Expense<br>Request</strong><div class="claim">Claim No. ${data.claimNo}</div></div>
</div>`;

function page1(){
return `<section class="page">${header()}
<div class="intro"><span class="blue">${data.worker}</span> requested reimbursement for the following medical and/or travel expenses:</div>
${head("Prescription Drugs")}
${table(["Drug Name","Prescription Date","Date Purchased","Healthcare Provider Name","Paid Amount"],data.prescription)}
${head("Over-the-Counter Drugs")}
${table(["Drug Name","Date Purchased","Paid Amount","Seller's Name","Reason for Purchasing"],data.otc)}
${head("Bandages, Braces or Other Medical Supplies")}
${table(["Item Purchased","Date Purchased","Was this Prescribed?","Healthcare Provider Name","Paid Amount","Seller's Name"],data.supplies)}
${head("Parking for Medical Appointments")}
${table(["Address of Healthcare Provider/Medical Facility","Date","Paid Amount","Meter Used?","Meter Number"],data.parking)}
${head("Mileage to Medical Appointments")}
<p class="note">The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.</p>
${table(["Appointment Date","Address of Healthcare Provider/Medical Facility","Address of Workplace","Number of km (Round Trip)"],data.mileage)}
${footer(1)}</section>`;
}
function page2(){
return `<section class="page">${head("Bus or Taxi Fare for Medical Appointments*")}
<p class="note">*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).</p>
${table(["Appointment Date","Address of Starting Point","Address of Healthcare Provider/Medical Facility","Bus or Taxi (indicate one)","Total Fare Paid"],data.fares)}
<p class="signature-text" style="margin-top:25px">I understand that the Privacy Notice applies to the personal information collected in this document.</p>
${footer(2)}</section>`;
}
function render(){document.getElementById("app").innerHTML=page1()+page2();}
function loadDemo(name){data=structuredClone(demoData[name]);render();}
function addExpense(){
 data.prescription.push(["New Drug","August 19, 2026","August 19, 2026","Demo Provider","$10.00"]);
 render();
}
render();
