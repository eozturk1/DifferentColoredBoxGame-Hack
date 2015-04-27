var gameDiv = document.getElementById('kuku-kube');
if (gameDiv.children.length == 0) {
  alert('Start the game before running the code.');
} else {
  while (true) {
    var boxes = gameDiv.children;
    var different = null;
    var box1 = boxes[0];
    var box2 = boxes[1];
    var box3 = boxes[2];
    // if first or second is different, use 3rd box to determine which one.
    if (box1.style.backgroundColor != box2.style.backgroundColor) {
      if (box1.style.backgroundColor == box3.style.backgroundColor) {
        different = box2;
      } else {
        different = box1;
      }
    } else {
      // one of them is different from the rest.
      var colorShouldBe = box1.style.backgroundColor;
      for (var i = 2; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != colorShouldBe) {
          different = boxes[i];
          break;
        }
      }
    }
    if (different == null) {
      alert('There is no color difference between the boxes. Cheater alert!');
      break;
    } else {
      different.click();
    }
  }
}