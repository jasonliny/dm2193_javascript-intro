function yearStatus(credits) {
  console.log(credits);
  if (credits >= 96) {
    console.log("senior");
  }
  else if (credits >= 64) {
    console.log("junior");
  }
  else if (credits >= 32) {
    console.log("sophomore");
  }
  else if (credits >= 0) {
    console.log("first-year");
  }
  else {
    console.log("must enter a non-negative number of credits");
  }
}
yearStatus(97);
yearStatus(96);
yearStatus(95);
yearStatus(64);
yearStatus(63);
yearStatus(32);
yearStatus(31);
yearStatus(0);
yearStatus(-1);
