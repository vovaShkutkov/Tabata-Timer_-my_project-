selectScreenSetting();




function selectScreenSetting(){
    window.onload = function( event ) {
        let windowInnerWidth = window.innerWidth;
        let windowInnerHeight = window.innerHeight;
        let blockSize=document.querySelector('.general');

        console.log(windowInnerHeight);

        let svgBlock=document.getElementById('base-timer__svg');
        let buttonM=document.getElementsByClassName('buttonM');

        let koefScreen=window.innerWidth/window.innerHeight;
        let soundBlock=document.getElementById('soundTimeBlock');
        let soundBlock2=document.getElementById('soundTimeBlock2');

        let startButton=document.getElementById('startButton');
        
        console.log(koefScreen);

        //высчитал пропорцию соотношения высоты и ширина экрана при котором норм отображение
        // svg блока= 1,7777

        if(windowInnerHeight<760){
            if(koefScreen>1.777){
                soundBlock.style.float='left';
                soundBlock.style.flexDirection= 'column';
                soundBlock.style.flexWrap='wrap';

                soundBlock2.style.float='left';
                soundBlock2.style.flexDirection= 'column';
                soundBlock2.style.flexWrap='wrap';

                startButton.style.float='left';
                


            }else{
                soundBlock.style.float='none';
                soundBlock.style.flexDirection= 'row';
                soundBlock.style.flexWrap='nowrap';

                soundBlock2.style.float='none';
                soundBlock2.style.flexDirection= 'row';
                soundBlock2.style.flexWrap='nowrap';

                startButton.style.float='none';
                


            }
        }


    
    };
}

window.onresize = function( event ) {
    let windowInnerWidth = window.innerWidth;
    let windowInnerHeight = window.innerHeight;
    let blockSize=document.querySelector('.general');

    console.log(windowInnerHeight);

    let svgBlock=document.getElementById('base-timer__svg');
    let buttonM=document.getElementsByClassName('buttonM');

    let koefScreen=window.innerWidth/window.innerHeight;
    let soundBlock=document.getElementById('soundTimeBlock');
    let startButton=document.getElementById('startButton');
    
    console.log(koefScreen);

    //высчитал пропорцию соотношения высоты и ширина экрана при котором норм отображение
    // svg блока= 1,7777

    if(windowInnerHeight<760){
        if(koefScreen>1.777){
            soundBlock.style.float='left';
            soundBlock.style.flexDirection= 'column';
            soundBlock.style.flexWrap='wrap';
            startButton.style.float='left';
            startButton.style.marginLeft='2em';
            


        }else{
            soundBlock.style.float='none';
            soundBlock.style.flexDirection= 'row';
            soundBlock.style.flexWrap='nowrap';
            startButton.style.float='none';
            startButton.style.marginLeft='0';
            


        }
    }



};


function hideDescription(){

    let windowInnerHeight = window.innerHeight;
    if(windowInnerHeight<890){
    
    let hidenMobtxt=document.getElementById('hidenMobtxt');
    let hidenMobtxt2=document.getElementById('hidenMobtxt2');

    console.log(hidenMobtxt);
    hidenMobtxt.style.display='none';
    hidenMobtxt2.style.display='none';
    }
   
    
}

function showDescription(){
    let windowInnerHeight = window.innerHeight;
    if(windowInnerHeight<760){
    
    let hidenMobtxt=document.getElementById('hidenMobtxt');
    let hidenMobtxt2=document.getElementById('hidenMobtxt2');

    console.log(hidenMobtxt);
    hidenMobtxt.style.display='block';
    hidenMobtxt2.style.display='block';
}
   
    
}