// this is the state of the application
const defaultState = {
  courses: [
    {
      name: 'Learning Angular',
      topic: 'Angular',
    },
    {
      name: 'Using Redux without Angular',
      topic: 'Redux',
    }
  ]
};

// Think about this as our poor man's view engine
function addView(viewFunc) {
  viewFunc(defaultState);
}

// We use this view engine to generate two views
addView((state) => {
  console.log(`There are ${state.courses.length} courses in the library`);
});

addView((state) => {
  console.log(`The latest course in the library: ${state.courses[state.courses.length -1].name}`);
});

// Adding the new course does not update the state of the two views
defaultState.courses.push({
  course: {
    name: 'Using Redux with Angular',
    topic: 'Redux With Angular',
  }
})



