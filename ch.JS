var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["About_me <span class='emoji'> &#128129;</span>","Services <span class='emoji'> &#128187;</span>"]
    },
    about_me: {
        title:["Please select category"],
        options:['Education','Skills','Projects','Others'],
        url : {
            
        }
    },
    services: {
        title:["Thanks for your response","Welcome to services zone <span class='emoji'> &#128187;</span>","Please select one of the below options to proceed further"],
        options:['Website_Development','Graphic_Design','UI_UX_Designer','Android_APP_Development'],
        url : {
            
        }
    },
    website_development: {
        title:["Thanks for your response","Here are some Website types for you","Click on it to know more"],
        options:['E-Commerce website','Portfolio website','Gaming website','Blog website','News website'],
        url : {
            more:"https://www.youtube.com/embed/Y_I-ie88pt8?si=uZmPKDHSCXGkn4sB",
            link:["#","#","#","#","#"]
        }
    },
    graphic_design: {
        title:["Thanks for your response","This are some of my work","Click on it to know more"],
        options:['logos','Banners','Visual Assets','ad','Social Media Posts'],
        url : {
            more:"#",
            link:["#","#","#","#"]
        }
    },
    ui_ux_designer: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile UI','Website UI-UX','App Designs','Anamations'],
        url : {
            more:"https://www.figma.com/@atharvagurav",
            link:["#","#","#","#"]
        }
    },
    android_aPP_development: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Common Skin Disease Diagnosis and Prediction App','Furniture Booking App'],
        url : {
            more:"https://www.youtube.com/embed/03A6Ps6r2D4?si=8F7T7B9lh_unzehe",
            link:["#","#","#","#","#"]
        }
    },
    education: {
        title: ["Thanks for your response","Academics:-"],
        options: ["Bachelor of Engineering Vidya Pratishthan’skamalnayan BajajInstitute of Engineering & TechnologyBaramati. Pursuing:2019-2023 CGPA: 7.27 | Senior Secondary (XII) KSK science college, Bhigwan, Pune. Percentage: 62.31%. (2018-19) | Secondary (X) Vidya Pratishthan’s English Medium School (CBSE), Baramati. Percentage: 65.67% (2016-2017)"],
        url: {
            more:"#",
            link:["#","#","#","#","#"]
        }
    },
    skills: {
        title: ["Thanks for your response","Here are some Skils which I Know Like Technical & Non-Technical "],
        options: ["Python","java","Web-Development & Design","App-Development & Design","UI-UX Design","Front-End For App & Website","project Management","Leadership","Time management","etc.."],
        url: {
            more:"https://www.youtube.com/embed/Y_I-ie88pt8?si=uZmPKDHSCXGkn4sB",
            link:["https://www.figma.com/@atharvagurav"]
        }
    },
    projects: {
        title: ["Thanks for your response","Here are some genre based projects"],
        options: ["Common Skin Disease Diagnosis and Prediction-App","E-Commerce Website for fabrication Company","E-Commerce Website Design for ASUS","Website for Book Store","Music App Design","Furniture Booking App Design","etc.."],
        url: {
            more:"https://www.youtube.com/embed/03A6Ps6r2D4?si=8F7T7B9lh_unzehe",
            link:["https://www.figma.com/@atharvagurav"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Figma"],
        url: {
            more:"",
            link:["https://www.youtube.com/channel/UCxB7GtVIBPTOrN8Ve-IdiXg","https://www.figma.com/@atharvagurav"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}