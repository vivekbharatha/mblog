roast.it('Is valid blog route', function isValidBlogRoute () {
   var req = {
       method: 'GET',
       url: 'http://localhost:4545/blog/simple-blog-test'
   };
   var route = new BlogRoute({req: req});
   
   return route.isValidRoute();
});

roast.it('Read raw post with path', function readRawPostWithPath () {
   var messageMock = new MessageMock();
   var req = {
      method: 'GET',
      url: 'http://localhost:4545/blog/simple-blog-test'
   };
   
   var route = new BlogRoute({ message: messageMock, req: req });
   route.route();
});