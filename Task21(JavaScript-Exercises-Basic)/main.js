
  document.getElementById("form1").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    const emailConfirm = document.getElementById("confirmEmail").value;
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    if (email !== emailConfirm) {
      document.getElementById("answer").style.color = "red";
      document.getElementById("answer").innerHTML =
        "Youre email doesnt match the confirmed one try again";
    }
    if (password !== passwordConfirm) {
      document.getElementById("answer").style.color = "red";
      document.getElementById("answer").innerHTML =
        "Youre password doesnt match the confirmed one try again";
    }
    if (
      email &&
      password &&
      emailConfirm &&
      passwordConfirm &&
      password === passwordConfirm &&
      email === emailConfirm
    ) {
      document.getElementById("answer").style.color = "green";
      document.getElementById("answer").innerHTML =
        "Form Submitted Successfully";

      localStorage.setItem(
        "answer",
        JSON.stringify({ email: email, password: password })
      );
      
      form.reset();
      one.remove();
      page = 2;
      two.append();
    }
  });




  const form = document.getElementById("form1");

  form.addEventListener("input", () => {
    document.getElementById("submit").disabled = true;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirmPassword").value;
    const emailConfirm = document.getElementById("confirmEmail").value;
    if (email && password && emailConfirm && passwordConfirm) {
      document.getElementById("submit").disabled = false;
    }
  });







  document.getElementById("form2").addEventListener("submit", (event) => {
    event.preventDefault();
    const email2 = document.getElementById("email2").value;
    const password2 = document.getElementById("password2").value;

    let r =JSON.parse(localStorage.getItem("answer"));
    console.log(r)

    if (email2 !== r.email) {
      document.getElementById("answer2").style.color = "red";
      document.getElementById("answer2").innerHTML =
        "Youre email doesnt match the confirmed one try again";
    }

    if (password2 != r.password) {
        document.getElementById("answer2").style.color = "red";
        document.getElementById("answer2").innerHTML =
          "Youre pass doesnt match the confirmed one try again";
      }
    if (
      email2 &&
      password2 &&
      password2 === r.password &&
      email2 === r.email
    ) {
      document.getElementById("answer2").style.color = "green";
      document.getElementById("answer2").innerHTML =
        "Form Submitted Successfully";
    }
  });
