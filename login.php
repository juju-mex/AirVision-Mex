<?php
session_start();
$senha = $_POST['senha'];
$cpf = $_POST['cpf'];
$conexao = mysqli_connect('localhost','root','','ecommerce');
$sql = "SELECT * FROM cadastro WHERE cpf like '$cpf'
and senha like '$senha'";
$executar = mysqli_query($conexao, $sql);
$res = mysqli_fetch_array($executar);
if($res['cpf'] != NULL){
    echo"logado";
   $_SESSION['nome'] = $res['nome'];

}
else{
   echo "Login e/ou senha incorretos";
}
$fechar = mysqli_close($conexao);
?>