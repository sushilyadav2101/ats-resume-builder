function getValue(id) {
  return document.getElementById(id).value || "";
}

function generateResume() {

  document.getElementById("previewName").innerText = getValue("name");
  document.getElementById("previewEmail").innerText = getValue("email");
  document.getElementById("previewLocation").innerText = getValue("location");
  document.getElementById("previewUniversity").innerText = getValue("university");

  document.getElementById("previewDegree").innerText = getValue("degree");
  document.getElementById("previewInstitute").innerText = getValue("institute");
  document.getElementById("previewEduYear").innerText = getValue("eduYear");
  document.getElementById("previewCgpa").innerText = getValue("cgpa");
  document.getElementById("previewPercentage").innerText = getValue("percentage");

  document.getElementById("previewCompany").innerText = getValue("company");
  document.getElementById("previewAchievement").innerText = getValue("achievement");

  // PHOTO
  const photo = document.getElementById("photo");
  const previewPhoto = document.getElementById("previewPhoto");

  if (photo.files && photo.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewPhoto.src = e.target.result;
      previewPhoto.style.display = "block";
    };
    reader.readAsDataURL(photo.files[0]);
  } else {
    previewPhoto.style.display = "none";
  }
}

function downloadPDF() {
  const resume = document.getElementById("resume");

  const options = {
    margin: 0.5,
    filename: 'My_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(resume).save();
}


