function ageCalculator(name, yearofBirth, currentYear) {
  const age = currentYear - yearofBirth;
  return name + " is " + age + " years old."
}

console.log(ageCalculator("Brady", 1997, 2023));