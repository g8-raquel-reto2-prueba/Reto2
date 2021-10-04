function traerInformacion()
{
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta)
        {
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });

}
function pintarRespuesta(items)
{
    let myTable="<table border=1>";
    myTable+="<thead>";
    myTable+="<tr>"
    myTable+="<th>"+'ID'+"</th>"
    myTable+="<th>"+'DEVELOPER'+"</th>"
    myTable+="<th>"+'MINAGE'+"</th>"
    myTable+="<th>"+'CATEGORY ID'+"</th>"
    myTable+="<th>"+'NAME'+"</th>"
    myTable+="</tr>"
    myTable+="</thead>";
    for(i=0;i<items.length;i++)
    {
        
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].developer+"</td>";
        myTable+="<td>"+items[i].minage+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td><br>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });
}
function editarInformacion(){
    let myData={
        id:$("#id").val(),
        developer:$("#developer").val(),
        minage:$("#minage").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#developer").val("");
            $("#minage").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/games/games",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}
function traerInformacionCliente()
{
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta)
        {
            console.log(respuesta);
            pintarRespuestaCliente(respuesta.items)
        }

    });

}
function pintarRespuestaCliente(items)
{
    let myTable="<table border=1>";
    myTable+="<thead>";
    myTable+="<tr>"
    myTable+="<th>"+'ID'+"</th>"
    myTable+="<th>"+'NAME'+"</th>"
    myTable+="<th>"+'EMAIL'+"</th>"
    myTable+="<th>"+'AGE'+"</th>"
    myTable+="</tr>"
    myTable+="</thead>";
    for(i=0;i<items.length;i++)
    {
        
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td><br>";
       
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacionCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
        
            traerInformacionCliente();
            alert("se ha guardado el dato")
        }
    });
}
function editarInformacionCliente(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
        
            traerInformacionCliente();
            alert("se ha guardado el dato")
        }
    });
}
function borrarElementoCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionCliente();
            alert("Se ha Eliminado.")
        }
    });
}
function traerInformacionMensaje()
{
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta)
        {
            console.log(respuesta);
            pintarRespuestaMensaje(respuesta.items)
        }

    });

}
function pintarRespuestaMensaje(items)
{
    let myTable="<table border=1>";
    myTable+="<thead>";
    myTable+="<tr>"
    myTable+="<th>"+'ID'+"</th>"
    myTable+="<th>"+'MENSAJE'+"</th>"
    
    myTable+="</tr>"
    myTable+="</thead>";
    for(i=0;i<items.length;i++)
    {
        
        
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].menssagetext+"</td>";
       
       
        myTable+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";

    }
    myTable+="</table>";
    $("#resultado").append(myTable);

}
function guardarInformacionMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
      
        
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            
        
            traerInformacionMensaje();
            alert("se ha guardado el dato")
        }
    });
}
function editarInformacionMensaje(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
        
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
           
        
            traerInformacionMensaje();
            alert("se ha guardado el dato")
        }
    });
}
function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g7878133dfd81c6-db202109250818.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensaje();
            alert("Se ha Eliminado.")
        }
    });
}
