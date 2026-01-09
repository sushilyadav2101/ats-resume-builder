// function addExperience() {
//   const container = document.getElementById("experience-container");

//   const div = document.createElement("div");
//   div.style.border = "1px solid #ddd";
//   div.style.padding = "10px";
//   div.style.marginTop = "10px";

//   div.innerHTML = `
//     <label>Job Title</label>
//     <input type="text">

//     <label>Company</label>
//     <input type="text">

//     <label>Description</label>
//     <textarea rows="3" style="width:100%"></textarea>
//   `;

//   container.appendChild(div);
// }

// STEP 2 GOING

// function addExperience() {
//   const container = document.getElementById("experience-container");

//   const div = document.createElement("div");
//   div.className = "card";

//   div.innerHTML = `
//     <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✖</button>

//     <label>Job Title</label>
//     <input type="text" oninput="updatePreview()">

//     <label>Company</label>
//     <input type="text" oninput="updatePreview()">

//     <label>Description</label>
//     <textarea rows="3" oninput="updatePreview()"></textarea>
//   `;

//   container.appendChild(div);
// }

// STEP 4 GOING


// EXPERIENCE
// function addExperience() {
//   const container = document.getElementById("experience-container");
//   const div = document.createElement("div");
//   div.className = "card";

//   div.innerHTML = `
//     <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✖</button>
//     <label>Job Title</label>
//     <input type="text" oninput="updatePreview()">
//     <label>Company</label>
//     <input type="text" oninput="updatePreview()">
//     <label>Description</label>
//     <textarea rows="3" oninput="updatePreview()"></textarea>
//   `;

//   container.appendChild(div);
// }

// // EDUCATION
// function addEducation() {
//   const container = document.getElementById("education-container");
//   const div = document.createElement("div");
//   div.className = "card";

//   div.innerHTML = `
//     <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✖</button>
//     <label>Degree</label>
//     <input type="text" oninput="updatePreview()">
//     <label>Institute</label>
//     <input type="text" oninput="updatePreview()">
//     <label>Year</label>
//     <input type="text" oninput="updatePreview()">
//   `;

//   container.appendChild(div);
// }

// PHOTO (OPTIONAL)
// function loadPhoto(event) {
//   const img = document.getElementById("preview-photo");
//   if (event.target.files.length > 0) {
//     img.src = URL.createObjectURL(event.target.files[0]);
//     img.style.display = "block";
//   }
// }

// // LIVE PREVIEW
// function updatePreview() {
//   const inputs = document.querySelectorAll("input, textarea");
//   let html = "";

//   inputs.forEach(input => {
//     if (input.type !== "file" && input.value) {
//       html += `<p>${input.value}</p>`;
//     }
//   });

//   document.getElementById("preview-content").innerHTML = html;
// }

// // TEMPLATE SWITCH
// function changeTemplate(template) {
//   const preview = document.querySelector(".preview-section");

//   if (template === "template2") {
//     preview.style.fontFamily = "Georgia, serif";
//     preview.style.borderLeft = "5px solid #2b6cb0";
//   } else {
//     preview.style.fontFamily = "Arial, sans-serif";
//     preview.style.borderLeft = "none";
//   }
// }

// // SAVE DATA
// function saveResume() {
//   const inputs = document.querySelectorAll("input, textarea");
//   const data = [];

//   inputs.forEach(input => {
//     if (input.type !== "file") {
//       data.push(input.value);
//     }
//   });

//   localStorage.setItem("resumeData", JSON.stringify(data));
//   alert("Resume saved successfully!");
// }

// // LOAD SAVED DATA
// window.onload = function () {
//   const saved = JSON.parse(localStorage.getItem("resumeData"));
//   if (saved) {
//     const inputs = document.querySelectorAll("input, textarea");
//     inputs.forEach((input, index) => {
//       if (saved[index]) {
//         input.value = saved[index];
//       }
//     });
//     updatePreview();
//   }
// };

// // DOWNLOAD PDF
// function downloadPDF() {
//   const element = document.querySelector(".preview-section");
//   html2pdf().from(element).save();
// }

// STEP 5 GOING 


function updatePreview() {
  document.getElementById("p-name").innerText =
    document.getElementById("name").value || "Your Name";

  document.getElementById("p-contact").innerText =
    `${document.getElementById("email").value} | ${document.getElementById("phone").value} | ${document.getElementById("location").value}`;

  document.getElementById("p-summary").innerText =
    document.getElementById("summary").value;
}

// EXPERIENCE
function addExperience() {
  const container = document.getElementById("experience-container");

  const div = document.createElement("div");

  div.innerHTML = `
    <input placeholder="Job Title" oninput="updateExperiencePreview()">
    <input placeholder="Company Name">
    <textarea rows="2" placeholder="Achievement / Responsibility"></textarea>
  `;

  container.appendChild(div);
}

function updateExperiencePreview() {
  const list = document.getElementById("p-experience");
  list.innerHTML = "";

  document.querySelectorAll("#experience-container input").forEach(input => {
    if (input.value) {
      const li = document.createElement("li");
      li.innerText = input.value;
      list.appendChild(li);
    }
  });
}

// EDUCATION
function addEducation() {
  const container = document.getElementById("education-container");

  const div = document.createElement("div");

  div.innerHTML = `
    <input placeholder="Degree">
    <input placeholder="Institute">
    <input placeholder="Year">
  `;

  container.appendChild(div);
}

// DOWNLOAD PDF
function downloadPDF() {
  const element = document.getElementById("resume-preview");
  html2pdf().from(element).save("ATS_Resume.pdf");
}

