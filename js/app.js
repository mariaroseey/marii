import {image} from "./img.js"
import {info} from "./info.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "My portfolio",
    para : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia fugit vero ex quae. Repellendus itaque facere ipsa. Eaque culpa maxime blanditiis voluptatum nam odio perspiciatis porro eligendi eos ab?",
    btn : "About me",
    myimg : "mari.jpg"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "ha.jpg",
    dis1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia fugit vero ex quae. Repellendus itaque facere ipsa. Eaque culpa maxime blanditiis voluptatum nam odio perspiciatis porro eligendi eos ab?",
    btn1 : "Learn More",

    img2 : "ha.jpg",
    dis2 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia fugit vero ex quae. Repellendus itaque facere ipsa. Eaque culpa maxime blanditiis voluptatum nam odio perspiciatis porro eligendi eos ab?",
    btn2 : "Learn More",

    img3 : "ha.jpg",
    dis3 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quia fugit vero ex quae. Repellendus itaque facere ipsa. Eaque culpa maxime blanditiis voluptatum nam odio perspiciatis porro eligendi eos ab?",
    btn3 : "Learn More"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,para,btn,myimg} = myObj1;

const {comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3} = myObj2;

sectionOne.append(info(title,para,btn))
sectionOne.append(image(myimg))  

sectionTwo.append(cards(comp,img1,dis1,btn1,img2,dis2,btn2,img3,dis3,btn3))



