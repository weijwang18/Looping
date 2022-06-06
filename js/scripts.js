$(document).ready(function () {
  const flavors = ["strawberry", "peach", "apple", "lemon"];
  flavors.forEach(function (flavor) {
    $("ul#flavors").prepend("<li>" + flavor + "</li>");
  });
});
