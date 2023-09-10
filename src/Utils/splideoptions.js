let splideOptions = {
  rewind: true,
  type: "loop",
  drag: "free",
  heightRatio: 0.5,
  pagination: false,
  speed: 500,
  arrows: false,
  autoScroll: {
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
    speed: 2,
  },
  cover: true,
  padding: "15vw",
  breakpoints: {
    640: {
      heightRatio: 0.54,
      arrows: false,
      pagination: true,
      padding: "0",
    },
  },
};

export default splideOptions;
