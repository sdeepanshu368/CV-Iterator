// console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'John',
        age: 18,
        city: 'London',
        language: 'Go',
        framework: 'Go',
        image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },

    {
        name: 'Peter',
        age: 28,
        city: 'Tokyo',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },

    {
        name: 'Camella',
        age: 18,
        city: 'Tel Aviv',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Emma',
        age: 45,
        city: 'New York City',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Dev',
        age: 20,
        city: 'Silicon Valley',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name: ${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
                                <li class="list-group-item">Use ${currentCandidate.framework} framework</li>
                            </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}