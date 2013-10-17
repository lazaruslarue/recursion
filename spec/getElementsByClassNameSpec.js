var htmlStrings = [
  "<p class='targetClassName'></p>",
  "<p class='otherClassName targetClassName'></p>",
  "<p><p class='targetClassName'></p></p>",
  "<p><p class='targetClassName'><p class='targetClassName'></p></p></p>",
  "<p><p></p><p><p class='targetClassName'></p></p></p>",
  "<p><p class='targetClassName'></p><p class='targetClassName'></p></p>",
  "<p><div class='somediv'><div class='innerdiv'><span class='targetClassName'></span></div></div></p>"
];

describe("getElementsByClassName", function(){

  it("should match the results of calling the built-in function", function(){
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $("body").append($rootElement);

      var resultNodeList = getElementsByClassName("targetClassName");
      var resultNodes = _.toArray(resultNodeList);
      var $expectedNodes = $(".targetClassName");
      var expectedNodes = _.toArray($expectedNodes);
      // var test = document.getElementsByClassName("targetClassName")
      // console.log(test)
      expect(resultNodes).toEqual(expectedNodes);
      $rootElement.remove();
    });
  });
});