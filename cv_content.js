
const fullName = "Martin de Valois";
const jobTitle = "Software developer";
const linkedIn = "linkedin.com/in/martindevalois";
const website = "martindev.nl"
const websiteURL = "https://www.martindev.nl";
const address = "Leiden";
const dateOfBirth = "08-11-1991"
const email = "martin_de_v@hotmail.com"
const phone = typeof phoneNumber !== 'undefined' ? phoneNumber : null;

const languages = [
    { name: "Nederlands", proficiency: 5 },
    { name: "Engels", proficiency: 5 },
    { name: "Duits", proficiency: 3 },
    { name: "Spaans", proficiency: 2 },
    { name: "Frans", proficiency: 2 },
];

const skills = ["Java, Springboot", "HTML/CSS", "Javascript, React, Node.js", "Python, Flask", "SQL", "MongoDB", "Git", "Azure"];
// const skills = ["Java", "HTML/CSS/Javascript", "Python", "Springboot", "React", "SQL", "MongoDB", "Git", "Azure DevOps"];

const certificates = ["Java OCA", "Scrum"];

const workExperience = [
    { title: "Software development trainee", company: "Youngcapital Next", date: "2023 - 2024", description: ["Ontwikkelen van technische skills voor het maken van fullstack applicaties."] },
    { title: "Sabbatical", date: "2020 - 2022", description: ["Skileraar, reizen, studie psychologie, ontwikkelen development skills."] },
    { title: "Senior data science consultant", company: "RiskQuest", date: "2017 - 2019", description: ["Leaseplanbank: Validatie van de credit risk modellen zodat deze voldoen aan wet- en regelgeving.", "Rabobank: Implementeren en testen van modellen en de maandelijkse risicocijfers berekenen en rapporteren.", "Rabobank: Data verzamelen en verwerken voor de credit risk modellen."] },
    { title: "Risk manager", company: "De Nederlandsche Bank", date: "2014 - 2017", description: ["Ontwikkeling en validatie van risico modellen. ", "Kwartaalrapportages voor management maken om inzicht te geven in het krediet- en marktrisico van de bank."] },
];

const education_english = [
    { degree: "Bachelor psychology (parttime)", school: "Open University", date: "2020 - 2024" },
    { degree: "Master physics and science based business", school: "Leiden University", date: "2012 - 2014" },
    { degree: "Bachelor physics", school: "Leiden University", date: "2009 - 2012" },
    { degree: "Bachelor astronomy", school: "Leiden University", date: "2009 - 2012" },
    { degree: "VWO Gymnasium (combination year 5/6 VWO) ", school: "Luzac College Rotterdam", date: "2008 - 2009" },
    { degree: "VWO Gymnasium (bilingual) ", school: "Jacob van Liesveldt", date: "2004 - 2008" },
];

const education = [
    { degree: "Bachelor psychologie (parttime)", school: "Open Universiteit", date: "2020 - 2024" },
    { degree: "Master physics and science based business", school: "Universiteit Leiden", date: "2012 - 2014" },
    { degree: "Bachelor natuurkunde", school: "Universiteit Leiden", date: "2009 - 2012" },
    { degree: "Bachelor sterrenkunde", school: "Universiteit Leiden", date: "2009 - 2012" },
    // { degree: "VWO Gymnasium (combinatiejaar 5/6 VWO) ", school: "Luzac College Rotterdam", date: "2008 - 2009" },
    // { degree: "VWO Gymnasium (tweetalig onderwijs) ", school: "Jacob van Liesveldt", date: "2004 - 2008" },

];


function updateCVContent() {
    // console.log(phoneNumber)
    document.getElementById("name").textContent = fullName;
    document.getElementById("jobTitle").textContent = jobTitle;
    document.getElementById("email").textContent = email;
    document.getElementById("linkedIn").textContent = linkedIn;
    document.getElementById("website").textContent = website;
    document.getElementById("address").textContent = address;
    document.getElementById("dateOfBirth").textContent = dateOfBirth;

    document.getElementById("website").href = websiteURL;

    if (phone != undefined) {
        document.getElementById("phone").textContent = phone;
        document.getElementById("phoneNumberItem").style.display = 'block';
    }
    // languages.forEach(language => {
    //     const li = document.createElement("li");
    //     li.textContent = language;
    //     document.getElementById("languages").appendChild(li);
    // });

    const ul = document.getElementById("languages");
    languages.forEach(language => {
        const li = document.createElement("li");
        let proficiencyBullets = '';
        for (let i = 1; i <= 5; i++) {
            // Check proficiency level and style the bullets accordingly
            proficiencyBullets += `<i class="fas fa-circle" style="color: ${i <= language.proficiency ? 'black' : 'gray'};"></i>`;
        }
        li.innerHTML = `${language.name}: <span class="bullets">${proficiencyBullets}</span>`;
        ul.appendChild(li);
    });

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        document.getElementById("skills").appendChild(li);
    });

    certificates.forEach(certificate => {
        const li = document.createElement("li");
        li.textContent = certificate;
        document.getElementById("certificates").appendChild(li);
    });

    workExperience.forEach(job => {
        const li = document.createElement("li");
        const descriptionList = job.description.map(point => `<li><div style="line-height: 1;">${point}</div></li>`).join('');
        let companyInfo = '';
        if (job.company) {
            companyInfo = `, ${job.company}`;
        }
        li.innerHTML = `<span style="font-weight: 900">${job.title}</span>${companyInfo}<br><em>${job.date}</em><br><ul class="disc">${descriptionList}</ul>`;
        document.getElementById("work-experience").appendChild(li);
    });

    education.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `<span style="font-weight: 900">${edu.degree}</span><br><em>  ${edu.school}, ${edu.date}</em>`;
        document.getElementById("education").appendChild(li);
    });

    document.getElementById("projects").innerHTML = projects;
    document.getElementById("jsGames").innerHTML = jsGames;
    document.getElementById("pythonGames").innerHTML = pythonGames;
    document.getElementById("fullstack").innerHTML = fullstack;
    document.getElementById("hosting").innerHTML = hosting;

    const divs = document.querySelectorAll('.side-content > div');
    for (let i = 0; i < divs.length; i++) {
        if (i < divs.length - 1) {
            divs[i].style.marginBottom = '20px';
        }
    }
}

updateCVContent();