// closure
function test() {
  return function demo() {
    return "somthing";
  };
}

// callback
const timoutFun = () => {
  console.log("500ms called");
};

setTimeout(timoutFun, 500);

// Express-API
app.get("/post", (req, res) => {
  res.send("hsldk;ska");
});
