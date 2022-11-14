let data = [
    {
        img: 'resource/72dpi/arc01.jpg',
        filename: 'arc01.jpg',
        name: 'The Parliament Buildings',
        type: '1',
        date: '2022 May',
        location: 'Victoria, BC, Canada'
    },
    {
        img: 'resource/72dpi/arc02.jpg',
        filename: 'arc02.jpg',
        name: 'The Parliament Buildings',
        type: "1",
        date: '2022 May',
        location: 'Victoria, BC, Canada'
    },
    {
        img: 'resource/72dpi/arc03.jpg',
        filename: 'arc03.jpg',
        name: 'The Parliament Buildings',
        type: '1',
        date: '2022 May',
        location: 'Victoria, BC, Canada'
    }
]

let cards = "";

data.forEach((item)=>{
    cards += '<div className="col-md-3">'+
    '<div className="card my-3">'+
    '<img src="${item.img}" className="img-fluid" alt="thumbnail"/>'+
    '<div className="card-body">'+
    '<h4 className="card-title">${item.name}</h4>'+
    '<p className="card-text">${item.date}</p>'+
    '<p className="card-text">${item.location}</p>'+
    '</div></div> </div>';


});

const pannel = document.getElementById("panel");
pannel.innerHTML = cards;
const profileCard =document.getElementById("profile");
