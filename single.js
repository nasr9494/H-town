var links;


links = ['https://www.netlify.com/', 'https://www.linkedin.com/', 'https://github.com/', 'https://codeyourfuture.io/', 'https://www.youtube.com/'];


document.getElementById('button').addEventListener('click', (event) => {
  links.forEach((links) => {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li'); 
    let new_a = document.createElement('a');
    new_a.innerText = links;

    new_li.appendChild(new_a);

    element_list.appendChild(new_li);
  });

});

