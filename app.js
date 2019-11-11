$(document).ready(function(){
    $.getJSON('data/studentsData.json', function(data){
        var temp = ''

        $.each(data, function(key, value){
            temp += '<tr>'
            temp += '<td>' + value.accountNo + '</td>'
            temp += '<td>' + value.firstName + '</td>'
            temp += '<td>' + value.typeOfAccount + '</td>'
            temp += '</tr>'
        })
        
        $('#jsonData').append(temp)
        $('#jsonData').append(localStorage.getItem('ActNo'))

            
    })
})

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault()
    let stu = {}

    stu.ActNo = document.getElementById('accountNo').value
    stu.firstName = document.getElementById('name').value
     stu.typeOfAccount=document.getElementById('type').value
    let stucombo = stu.ActNo + ' ' + stu.firstName+''+stu.typeOfAccount
    
    if(stu.ActNo != "" && stu.firstName != ""){
        var temp = ''
        temp += '<tr>'
        temp += '<td>' + stu.ActNo + '</td>'
        temp += '<td>' + stu.firstName + '</td>'
        temp += '<td>' + stu.typeOfAccount + '</td>'
        temp += '</tr>'
    }
    localStorage.setItem('ActNo',temp)
    $('#jsonData').append(temp)
    document.querySelector('#accountNo').value = ''
    document.querySelector('#name').value = ''
    
    
})
