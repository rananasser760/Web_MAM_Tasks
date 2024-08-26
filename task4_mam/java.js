let Ask = true; 
let container = [];

while (Ask) { 
    let Name = prompt("Enter your Name");
    let Age = prompt("Enter your Age");
    let Address = prompt("Enter your Address");

    console.log("Captured Data:", { Name, Age, Address }); 
    if (!Name || !Age || !Address) { 
    console.log("Incomplete Data, Please Enter all fields.");
    continue; 
}


    let obj = {
        Name: Name,
        Age: Age,
        Address: Address
    };
    container.push(obj);

    Ask = confirm("Do You Want To Continue?");
}

if (container.length) {
    console.log("Entered Data:");
    for (let i = 0; i < container.length; i++) {
        console.log("Student Number " + (i + 1) + " :");
        console.log("Name : " + container[i].Name);
        console.log("Age : " + container[i].Age);
        console.log("Address : " + container[i].Address);
    }
}
