const forms= document.querySelector(".forms"),
      passShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".links");

passShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let passFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        passFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                return;
            }
            password.type = "password";
                eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        })
    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();  //preventing form submit
        forms.classList.toggle("show-signup");
    }

    )
})