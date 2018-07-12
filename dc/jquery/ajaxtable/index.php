<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="container">

        <table class="table tabule">
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>


    <script>
        
        $(".tabule").on("click",'[sdata-id]',function(e){
            console.log(e.target)
        })

         $.getJSON('studentinfo.json', function (data) {
            $.each(data.student,function(key,data){
                console.log(data.name+data.id);
                $("tbody").append("<tr><td>"+data.name+"</td><td fdata-id="+data.id+">"+data.id+"</td></tr>")
            })
            
        });
        $.getJSON('studentclass.json', function (data) {
            $.each(data.class,function(key,data){
                console.log(data.id);
                $(".tabule").find("[fdata-id="+data.id+"]").after("<td sdata-id="+data.id+">"+data.class+"</td>")
  
            })
            
        });

      
      
    </script>

</body>

</html>