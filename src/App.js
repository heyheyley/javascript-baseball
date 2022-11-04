const MissionUtils = require("@woowacourse/mission-utils");
class App {
  print(message) {
    MissionUtils.Console.print(message);
  }
  createRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    const RANDOM_NUMBER = this.createRandomNumber();
  }
}

const app = new App();
console.log(app.play());

module.exports = App;
