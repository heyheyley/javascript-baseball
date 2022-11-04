const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  startMessage() {
    this.print("숫자 야구 게임을 시작합니다.");
    this.print("숫자를 입력해주세요");
  }
  createRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  createUserNumber() {
    let userNumber;
    MissionUtils.Console.readLine("", (answer) => {
      if (this.checkUserNumber(answer)) {
        userNumber = answer;
        this.print(`${userNumber}`);
        this.print("숫자를 입력하시오");
      } else {
        throw "중복되지 않는 1~9사이의 숫자 3자리를 입력해주세요";
      }
    });
    return userNumber;
  }
  checkUserNumber(answer) {
    if (answer.length !== 3) return false;
    if (answer.includes(0)) return false;
    if (isNaN(parseInt(answer))) return false;
    if (new Set(answer).size !== 3) return false;
    return true;
  }
  play() {
    this.startMessage();
    const RANDOM_NUMBER = this.createRandomNumber();
    const USER_NUMBER = this.createUserNumber();
  }
}

const app = new App();
console.log(app.play());

module.exports = App;
