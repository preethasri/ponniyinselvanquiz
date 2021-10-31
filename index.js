const readline=require("readline")
const project = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const quiz=[
  {
    question :`who is nicknamed as ponniyin selvan
  a.vandiyathevan
  b.arulmozhivarman
  c.aditya karikalan\n`,
   answer:"b" 
  },
  {
    question :`who is the main character in ponniyin selvan
  a.nandhini
  b.vallavaraiyan vandiyathevan
  c.aditya karikalan\n`,
   answer:"b"
  },
  {
    question :`who is potraited as most beautiful and poisonous women in ponniyin selvan
  a.nandhini
  b.kundavai
  c.vaanathi\n`,
    answer:"a"  
  },
  {
    question :`arulmozhivarman marries
  a.poonkhuzali
  b.vaanathi
  c.manimeghalai\n`,
    answer:"b" 
    
  },
]
let questionindex=0
console.log("welcome to preetha's quiz about ponniyin selvan " );
function book()
{
  project.question(quiz[questionindex].question,(answer)=>{
  console.log(`you answered:${answer}`)
  if(answer.toLowerCase()== quiz[questionindex].answer.toLowerCase())
    {
    console.log("right answer")
    questionindex++
    serve()
    }
  else{
    console.log("wrong answer")
    console.log("try again")
    book();
  }
}) 
}
function serve()
{
  if(isend())
  {
    console.log("thanks for playing")
    project.close()

  }
    else{
     project.question("press e to exit or any other key to continue",
     (choice)=>{
       console.log(`you selected ${choice}`)
    if(choice.toLowerCase()!="e")
      {
         book()
      }
    else
      {
        console.log("thanks for playing.....")
        project.close()
      }
    });
  }
}
function 
    isend()
{
  if(quiz.length==questionindex)
  {
    return true;

  }
}
serve()
