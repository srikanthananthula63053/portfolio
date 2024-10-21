function updateTimestamp() {
    const currentTimestamp = new Date().toISOString(); 

    
    const timeElement = document.getElementById('timestamp');

    
    timeElement.setAttribute('datetime', currentTimestamp);
    timeElement.textContent = currentTimestamp;
}


updateTimestamp();


setInterval(updateTimestamp, 1000); 

function portfolio(){
    let image = document.getElementById('myImage');
   
    if (image.style.display === 'none') {
        image.style.display = 'block';  // You can also use 'inline' or 'inline-block'
    } else {
        image.style.display = 'none';
    }
}