"use strict";

const data = [
    {
        name : 'John Doe',
        age : 32,
        gender : 'male',
        lookingfor :'female',
        location : 'Boston MA',
        image : 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name : 'Jehn Smith',
        age : 20,
        gender : 'female',
        lookingfor :'female',
        location : 'Washington DC',
        image : 'https://randomuser.me/api/portraits/women/70.jpg'
    },
    {
        name : 'William Johnson',
        age : 38,
        gender : 'male',
        lookingfor :'female',
        location : 'Lynn MA',
        image : 'https://randomuser.me/api/portraits/men/69.jpg'
    }
];

const profiles = profileIterator(data);

//Call first Profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile display
function nextProfile(){

    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){

        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name : ${currentProfile.name}</li>
            <li class="list-group-item">Age : ${currentProfile.age}</li>
            <li class="list-group-item">Location : ${currentProfile.location}</li>
            <li class="list-group-item">Preference : ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
        <img class="img-fluid" src="${currentProfile.image}" />
        `;

    }else{
        window.location.reload();
    }
}

//Profile Iterator

function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done : false} : 
            {done : true}
        }
    };
}