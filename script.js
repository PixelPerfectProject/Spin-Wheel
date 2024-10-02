
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const result = document.getElementById("result");

const segments = 6;
const segmentDegree = 360 / segments;

spinBtn.addEventListener("click", () => {
  const randomSpin = Math.floor(Math.random() * 5000 + 2000); 

  wheel.style.transform = `rotate(${randomSpin}deg)`;

  setTimeout(() => {
    const finalSpin = randomSpin % 360; 
    const selectedSegment = Math.ceil((360 - finalSpin) / segmentDegree); 
    result.innerText = selectedSegment;
  }, 4000); 
});
