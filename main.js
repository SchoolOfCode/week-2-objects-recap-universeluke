const myCat = {
    color: "black",
    name: "Tony",
    lovesCuddles: true,
  };


let myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2,
    garden: true,
    energy_efficiency_rating: "D",
};


let myCar = {
    colour: "red",
    wheels: 4,
    power_steering: true,
    seats: 2,
    miles_per_gallon: 20,
};


let myFavouriteFilm = {
    title: "The Dark Knight",
    released: 2008,
    lead_actor: "Christian Bale",
}


let person = {
    name: "Ben",
    likesChocolate: true,
  };

if (person.name === "Ben" && person.likesChocolate === true){
        console.log ("Ben loves chocolate")
    }
    else{
        console.log ("Ben hates chocolate")
    }



let desiredPleasantry = "farewell";

let bensPhrases = {
      greeting: "Well hello there!",
      farewell: "See you in another life, brother",
      smallTalk: "Warm today, isn't it...",
    };

console.log(bensPhrases["smallTalk"])

console.log(bensPhrases[desiredPleasantry])


let me = {
    firstName: "Luke",
    lastName: "Davies",
    isBootcamper: false,
  };

me.isBootcamper = true

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

let comms = communication.payload.message.text

if (communication.payload.message.priority === "URGENT"){
    console.log (comms)
}
else (null)