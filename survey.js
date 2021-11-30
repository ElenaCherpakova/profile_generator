const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? (Nicknames are also acceptable? :)" , (answer) => {
  profile.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    profile.acitivity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      profile.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        profile.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.dish = answer;
          rl.question("How about sport? What is your absolute favourite? ", (answer) => {
            profile.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              profile.superpower = answer;
              console.log(`Your name (Nickname) is ${profile.name}. You like  ${profile.acitivity}.  While doing that you listen ${profile.music}. 
              Your favourite (eg: dinner, brunch, etc.) is  ${profile.meal}. Your favourite thing to eat for meal is ${profile.dish}.
              Your favourite sport is ${profile.sport}. Your superpower is ${profile.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

console.log(profile);


