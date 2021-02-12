function multiplyNumeric(obj) {
    for (const key in obj) {
        const element = obj[key];
        if(typeof(element) === "number"){
            obj[key] = element * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
multiplyNumeric(menu)
console.log(menu);