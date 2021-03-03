<?php

/* Fonction qui va supprimer les balises, les antislashs et empêcher l'execution de balises html */
function security($input){
    $input = htmlspecialchars(stripcslashes(strip_tags($input)));
    return $input;
}

/* Lorque que l'on appuie sur le bouton submit on execute */
if (isset($_POST["submit"])){
    /* On traite les infos saisies et on les stockes dans des variables */
    /* On supprime les caractères non voulu à l'aide des filtres et du regex*/
    $name = security(filter_var($_POST["name"], FILTER_SANITIZE_STRING));
    $name = preg_replace('/\d/', '', $name );
    $email = security(filter_var($_POST["email"], FILTER_SANITIZE_EMAIL));
    $phone = security(filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT));
    $subject = security(filter_var($_POST["subject"], FILTER_SANITIZE_STRING));
    $message = security(filter_var($_POST["message"], FILTER_SANITIZE_STRING));

    /* On vérifie que les infos saisies soient valides */
    if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){                    
        /* Si c'est bon, on procède à l'envoi */
            $mailTo = "sebepe5498@hancack.com";
            $mailHeader = "From: " . $email;
            $txt = "Cet e-mail vous a été envoyé par " . $name . " Tel: " . $phone . "\n" . $message;

            /* Envoi du mail avec la fonction en utilisant des paramètres*/
            mail($mailTo, $subject, $txt, $mailHeader);
            /* Redirection */
            header("Location: contact.php?mailsend");
            echo "<style>alert('Le mail a été envoyé')</style>";
    }
    /* Si les infos ne sont pas valides */
    else{
        echo "<p style='color:red;'>L'adresse e-mail est incorrecte</p>";
    }
}

?>