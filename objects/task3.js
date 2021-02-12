let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for (const key in salaries) {
        const salary = salaries[key];
        sum += salary;
}
console.log(sum);