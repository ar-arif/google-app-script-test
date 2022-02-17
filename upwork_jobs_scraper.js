//https://www.upwork.com/nx/jobs/search/?q=%28web%20OR%20scraping%20OR%20google%20OR%20app%20OR%20script%20OR%20discord%20OR%20bot%20OR%20automation%29&sort=recency&user_location_match=2&t=0&client_hires=0&proposals=0-4&duration_v3=weeks&payment_verified=1
let jobs=[]
let title=$$("h4.job-tile-title > a").map(e=>e.innerText)
let description=$$('span[data-test="job-description-text"]').map(e=>e.innerText)
let posted=$$('span[data-test="posted-on"]').map(e=>e.innerText)
let price=$$('strong[data-test="job-type"]').map(e=>e.innerText)
let type=$$('span[data-test="contractor-tier"]').map(e=>e.innerText)
let duration=$$('span[data-test="duration"]').map(e=>e.innerText)
let url=$$("h4.job-tile-title > a").map(e=>e.href)
let proposal=$$('strong[data-test="proposals"]').map(e=>e.innerText)
let country=$$('small[data-test="client-country"] strong').map(e=>e.innerText)
let skills=[]
let skill_wrapper=$$('div.up-skill-wrapper')
for(let i=0;i<skill_wrapper.length;i++){children_skills=skill_wrapper[i].children
temp_skill=[]
for(let x=0;x<children_skills.length;x++){temp_skill.push(children_skills[x].innerText)}
skills.push(temp_skill)}
for(let i=0;i<title.length;i++){jobs.push({title:title[i],description:description[i],posted:posted[i],price:price[i],type:type[i],duration:duration[i],proposal:proposal[i],country:country[i],skills:skills[i],url:url[i]})}

let json_data = JSON.stringify(jobs)
console.log(json_data)
