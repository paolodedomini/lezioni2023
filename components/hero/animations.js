function boxWine(position) {
  const boxWine = {
    hidden: {
      opacity: 0,
      left: position.x,
      top: position.y,
    },
    visible: {
      opacity: 1,
      left: [position.x, position.postitionBox + position.postitionBox / 2],
      top: position.y,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return boxWine;
}

const boxText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 1 },
  },
  exit: { opacity: 0 },
};
const header = {
  initial: { opacity: 0, top: 10 },
  animate: {
    opacity: 1,
    top: 0,
    transition: { delay: 3, duration: 1 },
  },
  exit: { opacity: 0 },
};

const headerP = {
  initial: { opacity: 0, top: 10 },
  animate: {
    opacity: 1,
    top: 0,
    transition: { delay: 3.5, duration: 1 },
  },
  exit: { opacity: 0 },
};

export { boxWine, boxText, header, headerP };
