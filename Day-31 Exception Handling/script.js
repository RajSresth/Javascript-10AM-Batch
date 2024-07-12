// let a=1;
// let b=2;
// let c=3;
// let e=4;
// let f=5;

// try {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// } catch (err) {
//     console.log(err.name)
//     console.log(err.message)
// }finally{
//     console.log(e)
//     console.log(f)
// }


try {
 
    const num = +prompt("Enter a number");
    if (isNaN(num)) {
      throw new Error("Invalid number");
    }
    console.log("You entered the number " + num);
  } catch (err) {

  
    console.error("An error occurred: "+err.message);
  } finally {  
    console.log("Execution complete");
  }