async function sendEmail() {
    const btn = document.getElementById('submit');
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    
    const CLOUD_NAME = 'dh0dveabe'; 
    const UPLOAD_PRESET = 'unsigned_preset';

    btn.disabled = true;
    btn.innerText = "Завантаження фото...";

    try {
        let photoUrl = "Фото не додано";

        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', UPLOAD_PRESET);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (data.secure_url) {
                photoUrl = data.secure_url;
            } else {
                throw new Error('Помилка завантаження на хмару');
            }
        }

        btn.innerText = "Відправка листа...";

        let params = {
            from_name: document.getElementById('username').value,
            email: document.getElementById('email').value,
            message: document.getElementById('confirm-message').value,
            photo: photoUrl 
        };

        await emailjs.send("service_ap3mpds", "template_daxfhbe", params);
        
        alert('Успішно відправлено! 😉');

        // --- ОЧИЩЕННЯ ФОРМИ ---
        document.getElementById('username').value = "";
        document.getElementById('email').value = "";
        document.getElementById('confirm-message').value = "";
        fileInput.value = ""; // Очищаємо вибраний файл
        // ----------------------
        
    } catch (error) {
        console.error(error);
        alert('Помилка: ' + error.message);
    } finally {
        btn.disabled = false;
        btn.innerText = "Відправити Повідомлення";
    }
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

    let buttonNextPage = document.querySelector(".next-reg")
    let buttonNextBackstage = document.querySelector('.next-beg')
    let InformatiouDoZayzvu = document.querySelector(".InformatiouDoZayzvu")

    let ConteinerInformation = document.querySelector(".information-con")
    let ZayavkaMain = document.querySelector('.main')

    let GoBackBut = document.querySelector(".GoBackBut")

   


    InformatiouDoZayzvu.addEventListener("click", function(){
              buttonNextPage.style.display = "flex"
              buttonNextBackstage.style.display = "flex"
    })


     function loloo(){
              buttonNextPage.style.display = "flex"
              buttonNextBackstage.style.display = "flex"
    }

    loloo()

   

    buttonNextPage.addEventListener("click", function(){
      ConteinerInformation.style.display = "none";
      ZayavkaMain.style.display = "flex"
    })

    buttonNextBackstage.addEventListener('click', function(){

    })

    GoBackBut.addEventListener("click", function(){
       ZayavkaMain.style.display = "none"
        ConteinerInformation.style.display = "flex";
     
    })