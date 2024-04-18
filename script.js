//alert ("Deseja prosseguir?")
document.addEventListener('DOMContentLoaded', function(){
    const showVideoButton= document.getElementById('showVideoButton');
    const videoContainer= document.getElementById('videoContainer');
    const closeButton1= document.getElementById('closeButton1');
    const closeButton2= document.getElementById('closeButton2');
    const showAudioButton= document.getElementById('showAudioButton');
    const audioContainer= document.getElementById('audioContainer');
    const audio= document.getElementById('audio');
    const indiceCabeca= document.getElementById('indice_cabeca');
    
    /*indiceCabeca.addEventListener('mouseenter', function(){
    videoContainer.classList.remove('hidden');
    videoContainer.style.display='block';
    
    });*/
    
    closeButton1.addEventListener('click', function(){
        audioContainer.style.display='none';
        audioContainer.classList.add('hidden');
        
        if(audio){
        audio.pause();
        audio.currentTime= 0;       
        }
        
    });
    
    showVideoButton.addEventListener('click', function(){
        videoContainer.classList.remove('hidden');
        videoContainer.style.display= 'inline-block';
    
    });
    
    closeButton2.addEventListener('click', function(){
        videoContainer.style.display='none';
        videoContainer.classList.add('hidden');
    
    
    });
    
    showAudioButton.addEventListener('click', function(){
        audioContainer.classList.remove('hidden');
        audioContainer.style.display='inline-block';
    }
    );
    
    });
    
    
    
    