import apple from './overig/img1.jpg'
import flightwidget from './overig/img2.webp'
import flappy from './overig/img3.jpg'
import doodleJump from './overig/img4.png'
import employe from './overig/img5.jpg'



export const projectList =[

    {   id: 0,
        Name: 'Flappy Bird',
        Image: flappy,
        Skills: 'Javascript, Html, Css',
        Github: function openGithubPage(){
            window.open('https://github.com/JuniorASP/Flappy-bird', '_blank');
            console.log('0')
          }
    },

    {   id: 1,
        Name: 'Doodle Jump',
        Image: doodleJump,
        Skills: 'Javascript, Html, Css',
        Github: function doodleGit(){
            window.open("https://github.com/JuniorASP/Doodle-Jump", '_blank');
            console.log('1')
          }
        
    },

    {   id: 2,
        Name: 'Employe Directory',
        Image: employe,
        Skills: 'Javascript, Html,Css',
        Github: function employeGit(){
            window.open("https://github.com/JuniorASP/Techproyect-8", '_blank');
            console.log('2')
          }

    },

    {
        id: 3,
        Name: ' Webshop',
        Image: apple,
        Skills: 'React,Javascript, Html,Css',
        Github: function appleGit(){
            window.open("https://github.com/JuniorASP/my-webshop-react", '_blank');
            console.log('3')
          }
    },

    {
        id: 4,
        Name: 'Flight Widget',
        Image: flightwidget,
        Skills: 'Javascript,Css',
        Github: function flightwidgetGit(){
            window.open("https://github.com/JuniorASP/flight-widget", '_blank');
            console.log('4')}



    }





]