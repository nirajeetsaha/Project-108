dog = 0;
cat = 0;
cow = 0;
lion = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hByy-Ub73/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sound_class").innerHTML = 'Detected Voice is of - ' + results[0].label;
        document.getElementById("sound_class").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("number_of_times_detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('sound_heard');

        if (results[0].label == "barking") {
            img.src = 'white_dog.gif';
            dog = dog + 1;
        }

        else if (results[0].label == "meowing") {
            img.src = 'cute_kitty.gif';
            cat = cat + 1;
        }

        else if (results[0].label == "mooing") {
            img.src = 'cute_cow_gif.gif';
            cow = cow + 1;
        }

        else if (results[0].label == "roar") {
            img.src = 'lion.gif';
            lion = lion + 1;
        }
        else {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
        document.getElementById("number_of_times_detected").innerHTML = "Detected Dog - " + dog + " ,Detected Cat - " + cat + " ,Detected Cow - " + cow + " ,Detected Lion - " + lion;
    }
    
}