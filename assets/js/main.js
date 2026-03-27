/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
	
	// Funcionalidades de contacto
(function() {
    
    // Configuración de contactos
    var phoneNumber = "5545105355"; // Número de teléfono (código país 52 + número sin espacios ni símbolos)
    var whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios.";
    
    // Correos disponibles
    var emails = [
        "rramirez@vigilangel.org",
        "finanzas@certificatic.org", 
        "paleopato@gmail.com"
    ];
    
    // Redes sociales
    var socialLinks = {
        linkedin: "https://www.linkedin.com/in/rodolfo-ramirez-almanza-72471017/", // Reemplaza con el URL real
        facebook: "https://www.facebook.com/paleopato.ingenieria/about?locale=es_LA", // Reemplaza con el URL real

    };
    
    // Función para abrir WhatsApp
    function openWhatsApp() {
        var encodedMessage = encodeURIComponent(whatsappMessage);
        var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
        window.open(whatsappUrl, "_blank");
    }
    
    // Función para enviar correo (abre cliente de correo predeterminado)
    function sendEmail(emailTo, subject, body) {
        var subjectEncoded = encodeURIComponent(subject);
        var bodyEncoded = encodeURIComponent(body);
        var mailtoUrl = "mailto:" + emailTo + "?subject=" + subjectEncoded + "&body=" + bodyEncoded;
        window.location.href = mailtoUrl;
    }
    
    // Función para mostrar selector de correo
    function showEmailSelector() {
        // Crear modal o usar confirm para seleccionar correo
        var emailList = emails.join("\n");
        var selectedEmail = prompt(
            "Selecciona el correo para contactar:\n\n" + 
            "1. " + emails[0] + "\n" +
            "2. " + emails[1] + "\n" +
            "3. " + emails[2] + "\n\n" +
            "Ingresa el número (1, 2 o 3):",
            "1"
        );
        
        if (selectedEmail !== null) {
            var emailIndex = parseInt(selectedEmail) - 1;
            if (emailIndex >= 0 && emailIndex < emails.length) {
                var subject = "Consulta desde el sitio web";
                var body = "Hola, me gustaría obtener más información.%0D%0A%0D%0A" + "Saludos cordiales.";
                sendEmail(emails[emailIndex], subject, body);
            } else {
                alert("Opción no válida. Por favor, selecciona 1, 2 o 3.");
            }
        }
    }
    
    // Función para correo rápido desde footer (usa el primer correo por defecto)
    function sendQuickEmail() {
        var subject = "Consulta desde el sitio web";
        var body = "Hola, me gustaría obtener más información.%0D%0A%0D%0A" + "Saludos cordiales.";
        sendEmail(emails[0], subject, body);
    }
    
    // Asignar eventos a los botones cuando el DOM esté listo
    $(document).ready(function() {
        // Botón de WhatsApp
        $("#whatsappBtn").on("click", function(e) {
            e.preventDefault();
            openWhatsApp();
        });
        
        // Botón de enviar correo (sección CTA)
        $("#emailBtn").on("click", function(e) {
            e.preventDefault();
            showEmailSelector();
        });
        
        // Links de redes sociales
        $("#linkedinLink").on("click", function(e) {
            e.preventDefault();
            if (socialLinks.linkedin && socialLinks.linkedin !== "#") {
                window.open(socialLinks.linkedin, "_blank");
            } else {
                alert("El enlace de LinkedIn estará disponible próximamente.");
            }
        });
        
        $("#facebookLink").on("click", function(e) {
            e.preventDefault();
            if (socialLinks.facebook && socialLinks.facebook !== "#") {
                window.open(socialLinks.facebook, "_blank");
            } else {
                alert("El enlace de Facebook estará disponible próximamente.");
            }
        });
        
        $("#emailFooterLink").on("click", function(e) {
            e.preventDefault();
            sendQuickEmail();
        });
    });
    
})();
		
})(jQuery);