const skills = {
    languages: ["Python", "JavaScript", "Java"],
    frontend: ["HTML", "CSS", "React", "Angular", "Tailwind CSS"],
    backend: ["Django", "Node.js", "Flask"],
    ml: ["TensorFlow", "PyTorch", "Scikit-learn"],
    tools: ["Streamlit", "Kivy", "YOLO"]
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
        // Add a comma and space after each skill (except the last)
        if (textIndex < textArray.length - 1) {
          element.textContent += ", ";
        }
        textIndex++;
        charIndex = 0;

        // Move to next text in the array or stop
        if (textIndex < textArray.length) {
          setTimeout(typeChar, 300); // Adjust delay between words
        }
      }
    }

    typeChar();
  }

  // Trigger typing for each section
  typeEffect("languages", skills.languages);
  typeEffect("frontend", skills.frontend);
  typeEffect("backend", skills.backend);
  typeEffect("ml", skills.ml);
  typeEffect("tools", skills.tools);