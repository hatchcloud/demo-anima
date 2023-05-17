$(document).ready(pagina_lista());

function pagina_lista() {
  $(document).on("keydown", "form input", function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
    }
  });

  //campo Nombre
  $("#nombre").blur(function () {
    if ($("#nombre").val()) {
      $(this).siblings("label").addClass("label-with-value");
      $(this).addClass("exito-input");
      $(this).removeClass("error");
    } else {
      console.log("no tiene");
      $(this).siblings("label").removeClass("label-with-value");
      $(this).removeClass("exito-input");
    }
  });

  //campo Apellido
  $("#apellido").blur(function () {
    if ($("#apellido").val()) {
      $(this).siblings("label").addClass("label-with-value");
      $(this).addClass("exito-input");
      $(this).removeClass("error");
    } else {
      console.log("no tiene");
      $(this).siblings("label").removeClass("label-with-value");
      $(this).removeClass("exito-input");
    }
  });

  let emailError = $("#error-email");
  //campo email
  $("#email").blur(function () {
    if ($("#email").val()) {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test($("#email").val())) {
        emailError.show();
        $("#email").addClass("error");
        $(this).siblings("label").addClass("label-with-error");
      } else {
        emailError.hide();
        $("#email").removeClass("error");
        $(this).siblings("label").removeClass("label-with-error");
      }
      $(this).siblings("label").addClass("label-with-value");
      $(this).addClass("exito-input");
    } else {
      emailError.hide();
      $("#email").removeClass("error");
      $(this).siblings("label").removeClass("label-with-value");
      $(this).siblings("label").removeClass("label-with-error");
      $(this).removeClass("exito-input");
    }
  });

  //campo telefono
  $("#telefono").blur(function () {
    if ($("#telefono").val()) {
      $(this).siblings("label").addClass("label-with-value");
      $(this).addClass("exito-input");
      $(this).removeClass("error");
    } else {
      console.log("no tiene");
      $(this).siblings("label").removeClass("label-with-value");
      $(this).removeClass("exito-input");
    }
  });

  //campo direccion
  $("#direccion").blur(function () {
    if ($("#direccion").val()) {
      $(this).siblings("label").addClass("label-with-value");
      $(this).addClass("exito-input");
      $(this).removeClass("error");
    } else {
      console.log("no tiene");
      $(this).siblings("label").removeClass("label-with-value");
      $(this).removeClass("exito-input");
    }
  });

  //btn submit
  $("#submit").click(function (event) {
    event.preventDefault();

    let camposLlenos = true;

    // Verificar que todos los campos estén llenos
    $(".verificar-campo").each(function () {
      if ($(this).val() === "") {
        camposLlenos = false;
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });

    // Si todos los campos están llenos, enviar el formulario
    if (camposLlenos) {
      if (emailError.is(":visible")) {
        $("#email").addClass("error");
        swal({
          title: "Error",
          text: "Por favor, ingrese un correo válido.",
          icon: "error",
        });
      } else {
        $(".formulario").submit();
        swal("Éxito", "¡Formulario Enviado!", "success");
      }
    } else {
      $("#email").addClass("error");
      swal({
        title: "Error",
        text: "Por favor, llene todos los campos.",
        icon: "error",
      });
    }
  });
}
