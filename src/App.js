const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  createRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  createUserNumber() {
    let userNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      userNumber = answer;
      console.log(`숫자를 입력해주세요 : ${answer}`);
    });
    return userNumber;
  }
  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    const RANDOM_NUMBER = this.createRandomNumber();
    const USER_NUMBER = this.createUserNumber();
  }
}

const app = new App();
console.log(app.play());

module.exports = App;
