  export function concatClassName(className: string, additional: string) {
    return additional ? className + " " + additional : className;  
  }