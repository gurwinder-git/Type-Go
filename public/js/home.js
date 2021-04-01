document.getElementById('nickName').addEventListener('blur', ()=>{
    console.log('inside blur');
    let name = document.getElementById('nickName').value;
    localStorage.setItem('nickName', JSON.stringify(name));
})

document.getElementById('roomName').addEventListener('blur', ()=>{
    let room = document.getElementById('roomName').value;
    localStorage.setItem('roomName', JSON.stringify(room));
})

document.getElementById('nickNameOfJoinUser').addEventListener('blur', ()=>{
    let nickNameOfJoinUser = document.getElementById('nickNameOfJoinUser').value;
    localStorage.setItem('nickNameOfJoinUser', JSON.stringify(nickNameOfJoinUser));
})

document.getElementById('roomNameOfJoinUser').addEventListener('blur', ()=>{
    let roomNameOfJoinUser = document.getElementById('roomNameOfJoinUser').value;
    localStorage.setItem('roomNameOfJoinUser', JSON.stringify(roomNameOfJoinUser));
})


