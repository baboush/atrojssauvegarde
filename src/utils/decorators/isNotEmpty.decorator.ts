function isNotEmpty(target: any, key: string) {
  return console.log(`${target} : ${key}`);
}

export class Test {
  @isNotEmpty
  test: string = "";

  constructor(test: string) {
    this.test = test;
  }

  getName() {
    console.log(this.test);
  }
}

let test = new Test("salut");
test.getName();
