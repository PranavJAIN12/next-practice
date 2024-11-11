export const submitAction=async(e)=>{
    "use server"
    const fs = require("fs").promises;
    console.log(e.get("fname"), e.get("lname"))
    let a = await fs.writeFile("pj.txt", `heloooooooooooooooo name is ${e.get('fname')} ${e.get('lname')}`)
    console.log(a)
}