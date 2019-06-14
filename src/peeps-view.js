(function (exports) {
  function PeepsView() {}

  PeepsView.prototype.wrapInHTML = function (peeps) {
    // console.log("hello")
    var peeps_text = [];
    var i = 0;
    for (i; i < peeps.length; i++) {
      peeps_text.push("<p>" + peeps[i].body + "</p><br>");
    }
    return "<p>" + peeps_text.join("") + "</p><br>";
  };

  exports.PeepsView = PeepsView;
})(this);
