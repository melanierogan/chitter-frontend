describe('PeepsView', function() {
  describe('.wrapInHTML', function () {
    it('returns the text of given Peeps wrapped in HTML', function() {
      var peepsView = new PeepsView();
      var peeps = [{"body": "test one"}, {"body": "test two"}];
      expect(peepsView.wrapInHTML(peeps)).toEqual(
        "<p><p>test one</p><br><p>test two</p><br></p><br>"
      );
    });
  });
});
