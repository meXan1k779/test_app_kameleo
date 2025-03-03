
export function getRandom1To3() {
  return Math.ceil(Math.random() * 3);
}

export const getBorderColor = (num: number) => {
    switch (num) {
      case 1: {
        return 'border-red '
      };
      case 2: {
        return 'border-puprle'
      };
      case 3: {
      return 'border-light-purple'
      }
    }
}