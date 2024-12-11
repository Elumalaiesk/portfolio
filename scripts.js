const skills = {
  languages: ["Python", "Dart", "Javascripts","C#"],
  Markup_Languages: ["HTML", "CSS","Tailwind CSS", "Bootstrap"],
  framework: ["Django","Flask","Angular","Flutter"],
  ml: ["TensorFlow","Scikit-learn","Random Forest","Decision Tree","SVM","XGBoost"],
  deep_learning:["CNN","LSTM","YOLO"],
  tools: ["Streamlit","Git","Jupyter Notebook","VS Code","Android Studio"],
  Cloud_Technologies: ["AWS","Docker"],
  hosting_Technologies: ["Vercel","Netlify","github","Hostinger"],
  Operating_Systems: ["Windows", "Linux","Linux server"]
};

// Typing effect function
function typeEffect(elementId, textArray) {
  const element = document.getElementById(elementId);
  let textIndex = 0;
  let charIndex = 0;

  function typeChar() {
    if (charIndex < textArray[textIndex].length) {
      element.textContent += textArray[textIndex][charIndex];
      charIndex++;
      setTimeout(typeChar, 100); // Adjust typing speed
    } else {
      if (textIndex < textArray.length - 1) {
        element.textContent += ", ";
      }
      textIndex++;
      charIndex = 0;

      if (textIndex < textArray.length) {
        setTimeout(typeChar, 300); // Adjust delay between words
      }
    }
  }

  typeChar();
}

// Trigger typing effect when section is visible
const skillsSection = document.getElementById("skills-section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Start the typing animation
      typeEffect("languages", skills.languages);
      typeEffect("mplanguage", skills.Markup_Languages);
      typeEffect("framework", skills.framework);
      typeEffect("ml", skills.ml);
      typeEffect("tools", skills.tools);
      typeEffect("deep_learning", skills.deep_learning);
      typeEffect("Cloud_Technologies", skills.Cloud_Technologies);
      typeEffect("hosting_Technologies", skills.hosting_Technologies);
      typeEffect("Operating_Systems", skills.Operating_Systems);
      // Add visible class for fade-in effect
      skillsSection.classList.add("visible");
      // Disconnect observer to prevent re-triggering
      observer.disconnect();
    }
  });
});

observer.observe(skillsSection);

document.addEventListener("scroll", () => {
const skills = document.querySelectorAll(".skill div[class^='color']");
const triggerPoint = window.innerHeight;

skills.forEach((skill, index) => {
  const skillTop = skill.getBoundingClientRect().top;

  if (skillTop < triggerPoint) {
    skill.style.width = `${(index + 1) * 20}%`; // Customize widths
  }
});
});