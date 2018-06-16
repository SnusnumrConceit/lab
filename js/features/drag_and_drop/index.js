const dragDiv = document.getElementsByClassName('drag-div')[0]
const dropDiv = document.getElementsByClassName('drop-div')[0];

new Promise((resolve, reject) => {
  const img = new Image();
  img.src = 'drag.png';
  img.width = 30;
  img.height = 30;
  img.onload = (e) => {
    console.log(e.path[0]);
    e.path[0].width = 30;
    e.path[0].height = 30;
    document.body.appendChild(img);
    resolve(img);
  }
}).then((img) => {
  dragDiv.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('string', 'biba');
    e.dataTransfer.setDragImage(img, 40, 50);
    e.dataTransfer.dropEffect = 'copy';
  });
});

dropDiv.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('string');
  console.log(data);
  e.target.appendChild(dragDiv);
});

dropDiv.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
});


