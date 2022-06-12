import {makeday,makenight} from './js/module.js'
let inputs = document.querySelector('#get')
let day = document.querySelector('#day')
 let night = document.querySelector('#night')
 let checkacc = document.querySelector('#find')
 let imgs = document.querySelector('#userphoto')
 let names = document.querySelector('#namecount')
 let loc = document.querySelector('#location')
 let company = document.querySelector('#company')
 let folowers = document.querySelector('#folow')
 let login = document.querySelector('#login')
 let reposit = document.querySelector('#pub') 
 let tabels = document.querySelector('.repos')

console.log(day)
/// get API_1
async function  finder(){
   
    let url = `https://api.github.com/users/${inputs.value}`;

    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            document.querySelector('main').style.display ='none'
            document.querySelector('.first__try').style.display = 'none';
            
        }
    })

    .then(data => {
        if(data == undefined){
            document.querySelector('main').style.display ='none'
            document.querySelector('.first__try').style.display = 'none';
        }else{
            document.querySelector('.first__try').style.display = 'none';
            document.querySelector('.disp').style.display = 'flex'
            aboutAcc(data)

        }

    })

}
//Work with API_1
function aboutAcc(jsonsi){
    
    function results(){
        let schedule =new Date(jsonsi.created_at);
        document.querySelector('#aboutidcreat').textContent = `Result: id: ${jsonsi.id}, created in: ${schedule.getDay()}.${schedule.getMonth()}.${schedule.getFullYear()}`;
    }
    console.log(jsonsi)
   function aboutuser(){
        imgs.src =  `${jsonsi.avatar_url}`;
        names.textContent =(jsonsi.name == null)?"Name: value not found": `Name: ${jsonsi.name}`;
        login.textContent = `Login: ${jsonsi.login}`
        loc.textContent = (jsonsi.location == null)? `Location: Ibiza`: `Location: ${jsonsi.location}`;
        company.textContent = (jsonsi.company == null)? 'Work: value not found': `Work: ${jsonsi.company}`
        document.querySelector('#checkacc').href = `${jsonsi.html_url}`;
    }
    function folAndRep(){
        console.log(jsonsi.folowers)
        folowers.textContent = (jsonsi.followers == null)? `Followers : 0`:`Followers : ${jsonsi.followers}`;
        reposit.textContent = (jsonsi.public_repos == null)?`Public Repositories : 0`:`Public Repositories : ${jsonsi.public_repos}`
    }
    /// get API_2
    if(jsonsi.public_repos == 0){
        document.querySelector(".tab__repos").innerHTML += `<td class='notfound'>Value not found</td>`
    }else{
        async function getReposStats(){
            let leng_rp = await fetch(jsonsi.repos_url);
                if(leng_rp.ok){
                    var json = await leng_rp.json()
                }else{
                    alert('Error' + leng_rp.status)
                }
            tabels.textContent = ''
            json.forEach(element => {
                let time = new Date(element.created_at)
                time = `${time.getDay()}.${time.getMonth()}.${time.getFullYear()}`
                let homepage =() =>{
                    if(element.homepage == null){
                        return "Not found"
                    }else{
                        return `<a class ='links' href='${element.homepage}'>Have</a>`;
                    
                }
            }
                let language =()=>{
                    if(element.language == null){
                        return 'Not found'
                    }else{
                        return `${element.language}`
                    }
                }

                tabels.innerHTML +=
                    `<tr class ='tabels'>
                    <td data-label="Name"><a href='${element.html_url}' class ='links'>${element.name}</a></td>
                    <td data-label="Page">${homepage()}</td>
                    <td data-label="Created">${time}</td>
                    <td data-label="Most Using">${language()}</td>
                    </tr>
                    `
                
                
            });
            
            
        }
        getReposStats()
    }
     //GET API_2
    folAndRep()
    results()
    aboutuser()
}



checkacc.addEventListener('click', finder)
/// Make day and night buttons
night.addEventListener('click', makenight)
day.addEventListener('click', makeday);


//burger
