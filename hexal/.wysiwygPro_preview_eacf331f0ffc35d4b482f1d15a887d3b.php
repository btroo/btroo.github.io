<?php
if ($_GET['randomId'] != "Iw9_Y1Ep_idpnG2luoeLgXVZzsTrP4u1BfOo2A1Rzte6rm1QHhHwDBqRNYSAMB2f") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
