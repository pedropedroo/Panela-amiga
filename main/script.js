$(document).ready(function () {
    $('#meuFormulario').submit(function (event) {
        event.preventDefault();

        var formData = $(this).serialize();
        var backendURL = 'https://hidekileonardo.github.io/Backend-PanelaAmiga/';
        $.ajax({
            type: 'POST',
            url: backendURL,
            data: formData,
            success: function (response) {
                console.log(response);
                alert('Dados registrados com sucesso!');
            },
            error: function (error) {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao enviar os dados.');
            }
        });
    });
});
