const randomPassword = {
  length: 0,
  lower: "",
  upper: "",
  number: "",
  symbols: "",
  exchart: "",
  password: "",

  updataitem(res) {
    this.length = res["pwlength"];
    this.lower = res["pwlower"] === "on" ? "checked" : "";
    this.upper = res["pwupper"] === "on" ? "checked" : "";
    this.number = res["pwnumber"] === "on" ? "checked" : "";
    this.symbols = res["pwsymbols"] === "on" ? "checked" : "";
    this.exchart = res["pwexchart"];
    this.password = "";
    this.getpasword();
  },

  getpasword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const numbersCase = "1234567890";
    const symbolsCase = "`!@#$%^&*()-_+={}[]|;:<>,.?/*";

    let collection = [];

    //判斷密碼池
    if (this.lower === "checked") {
      collection = collection.concat(lowerCase.split(""));
    }
    if (this.upper === "checked") {
      collection = collection.concat(upperCase.split(""));
    }
    if (this.number === "checked") {
      collection = collection.concat(numbersCase.split(""));
    }
    if (this.symbols === "checked") {
      collection = collection.concat(symbolsCase.split(""));
    }

    //去掉不要密碼
    if (this.exchart) {
      collection = collection.filter((chr) => {
        if (this.exchart.includes(chr)) {
          return false;
        }
        return true;
      });
    }

    //生成密碼
    if (this.lower || this.upper || this.number || this.symbols) {
      for (let i = 1; i <= this.length; i++) {
        this.password +=
          collection[Math.floor(Math.random() * collection.length)];
      }
    } else {
      this.password = "You must select at least one character set";
    }
  },
};

module.exports = randomPassword;
