console.log('I am here')
// alert('Ma is Coming')

const maComing = () => {
    alert('Mother is coming. Open the Book')
}
const askPicnic = () => {
    const response = confirm('Are you willing to got a Picnic')
    console.log(response); 
    if (response === true) {
        alert('ameke fee ta bkash kore de')
    }
    else {
        console.log('DGM!!! door a giyea mor')
    }
}

const askName = () => {
    const name = prompt('What is your name');
    if (name) {
        console.log(name)
    }
}