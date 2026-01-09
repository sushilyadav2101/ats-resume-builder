function generateResume() {

  // PERSONAL
  previewName.innerText = name.value;
  previewEmail.innerText = "Email: " + email.value;
  previewLocation.innerText = "Location: " + location.value;
  previewUniversity.innerText = "University: " + university.value;

  // EDUCATION
  previewDegree.innerText = degree.value;
  previewInstitute.innerText = institute.value;
  previewEduYear.innerText = eduYear.value;

  previewCgpa.innerText = cgpa.value ? cgpa.value : "—";
  previewPercentage.innerText = percentage.value ? percentage.value + "%" : "—";

  // EXPERIENCE
  previewCompany.innerText = company.value;
  previewAchievement.innerText = achievement.value;
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;

  doc.setFontSize(16);
  doc.text(previewName.innerText, 10, y); y += 8;

  doc.setFontSize(11);
  doc.text(previewEmail.innerText, 10, y); y += 6;
  doc.text(previewLocation.innerText, 10, y); y += 6;
  doc.text(previewUniversity.innerText, 10, y); y += 10;

  doc.setFontSize(14);
  doc.text("Education", 10, y); y += 8;

  doc.setFontSize(11);
  doc.text("Degree: " + previewDegree.innerText, 10, y); y += 6;
  doc.text("Institute: " + previewInstitute.innerText, 10, y); y += 6;
  doc.text("Year: " + previewEduYear.innerText, 10, y); y += 6;
  doc.text("CGPA: " + previewCgpa.innerText, 10, y); y += 6;
  doc.text("Percentage: " + previewPercentage.innerText, 10, y); y += 10;

  doc.setFontSize(14);
  doc.text("Experience", 10, y); y += 8;

  doc.setFontSize(11);
  doc.text("Company: " + previewCompany.innerText, 10, y); y += 6;
  doc.text("Achievements:", 10, y); y += 6;

  doc.text(previewAchievement.innerText, 10, y, { maxWidth: 180 });

  doc.save("ATS_Resume.pdf");
}



