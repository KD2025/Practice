// Example job data (later fetched from backend)
const jobs = [
  { title: "West Bengal Police Constable", qualification: "10th Pass", age: "18-27", deadline: "2026-03-15", type: "Sarkari" },
  { title: "Private IT Internship", qualification: "Diploma/Graduate", age: "18-25", deadline: "2026-02-28", type: "Non-Sarkari" }
];

function displayJobs() {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";
  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>Qualification: ${job.qualification}</p>
      <p>Age Limit: ${job.age}</p>
      <p>Deadline: ${job.deadline}</p>
      <p>Type: ${job.type}</p>
    `;
    jobList.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", displayJobs);