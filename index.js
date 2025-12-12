
    let but =  document.getElementById('submit')


    function lol(){
    alert('хапушеня')
}


    function sendEmail(){
      let params = {
        from_name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        message: document.getElementById('confirm-message').value
      }

     console.log(params)

      emailjs.send("service_ap3mpds","template_daxfhbe", params) 
      .then(function(){
        alert('ПОВІДОМЛЕННЯ УСПІШНО ВІДПРАВЛЕННО 😉' )
      })

      
    }




function createStars(numStars) {
      for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        
        let size = Math.random()  + 1;  
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDuration = `${Math.random() + 1}s`;

        document.body.appendChild(star);
      }
    }

    createStars(100);

    document.body.addEventListener("mousemove", function(e) {
      let ripple = document.createElement("div");
      ripple.classList.add("ripple");
      document.body.appendChild(ripple);

      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      setTimeout(() => {
        ripple.remove();
      }, 300);
    });

    