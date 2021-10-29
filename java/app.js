

let user = [
  { 
    username: "larry",
    email: "larry@foo.com",
    yearsExperience:22.1, 
    favoriteLanguage:[
      "Perl","Java","C++"
    ], 
    favouriteEditor: "Vim",
    hobbies: ["Fishing","Sailing","Hiking"],
    hometown: {
      city: "San Francisco",
      State: "CA"
    }
  }, 

  {
    username: "jane",
    email: "jane@test.com",
    yearsExperience:33.9,
    favoriteLanguage:[
      "Haskell","Clojure","PHP"
    ],
    favoriteLanguage:"Emacs",
    hobbies:[
      "Swimming","Biking","Hiking"
    ],
    hometown:{ 
       city:"New York",
      state: "NY"
    }  
  }, 

  {
    username: "sam",
    email: "sam@test.com",
    yearsExperience:8.2,
    favoriteLanguage:["javascript","Ruby","Python"],
    favouriteEditor:"Atom",
    hobbies:["Golf","Cooking","Archery"],
    hometown:{
      city:"Fargo",
      state:"SD"
    }
  },


  {
    username: "anne",
    email: "anne@test.com",
    yearsExperience:4,
    favoriteLanguage:["C#","C++","F#"],
    favouriteEditor:"Visual Studio Code",
    hobbies:["Tennis","Biking","Archery"],
    hometown:{ 
      city:"Albany",
      state:"NY"
    }
  },


  {
    username: "david",
    email: "david@test.com",
    yearsExperience:12.5,
    favoriteLanguage:["javascript","C#","Swift"],
    favouriteEditor:"VS Code",
    hobbies:["Volunteering","Biking","Coding"], 
    hometown:{ 
      city:"Los Angeles",
      state:"CA"
    },
  }

]
for(let i = 0;i < user.length; i++){
  console.log(user[i].email);
}
