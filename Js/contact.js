
let btnEnviar = document.getElementById("enviar");

  btnEnviar.addEventListener(`click`,()=>{ 
      var nombreUser = document.getElementById("nombreUser").value;
      var mailUser = document.getElementById("mailUser").value ;
      localStorage.setItem(`username`,`${nombreUser}` );
      localStorage.setItem(`email`,`${mailUser}`)
      alert (`Buen dia ${nombreUser}, el comentario que usted escribio se contestara en las proximas 48hs al siguiente mail: "${mailUser}"`)
})

