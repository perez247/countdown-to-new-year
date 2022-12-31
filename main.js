

(() => {

    let dateFuture = new Date(new Date().getFullYear() + 1, 0, 1);

    // For testing 
    // let dateFuture = new Date();
    // dateFuture.setSeconds(dateFuture.getSeconds() + 20);

    let h, m, s = 0; 

    let countDown = () => {

        let dateNow = new Date();

        let seconds = Math.floor((dateFuture - (dateNow))/1000);

        if (seconds < 0) {

            
            // GitHub: https://github.com/matteobruni/tsparticles
            // Website: https://particles.js.org
            // Confetti website: https://confetti.js.org
            tsParticles.load('tsparticles',{ preset: "fireworks" });

            $(`.container1`).fadeOut();
            $(`.container2`).delay(1000).fadeIn();
            

        } else {
            setTimeout(() => {
                displayCoundown(seconds);
            }, 1000);
        }
        


    }

    let displayCoundown = (seconds) => {
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);

        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

        if (h !== hours) {
            h = hours
            setTimeSection(hours, 'h1', 'h2');
        }
        if (m != minutes) {
            m = minutes
            setTimeSection(minutes, 'm1', 'm2');
        }
        if (s != seconds) {
            s = seconds
            setTimeSection(seconds, 's1', 's2');
        }
        countDown();
    }

    let setTimeSection = (numb, section1, section2) => {
        let firstSection = $(`#${section1}`);
        let secondSection = $(`#${section2}`);

        firstSection.removeAttr('class');
        secondSection.removeAttr('class');

        let asString = numb.toString();
        let first = '0';
        let second = '0';

        if (numb < 10) {
            second = asString[0];
        } else {
            first = asString[0];
            second = asString[1];
        }

        firstSection.addClass('wrap-' + first);
        secondSection.addClass('wrap-' + second);
    } 

    countDown();

})()