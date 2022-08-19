

 <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <title>Arrays</title>
    <style>
      table {
        max-width: 80%;
        padding: auto;
        border-collapse: collapse;
        margin: auto;
        border: 1px solid black;
        text-align: center;
        /* table-layout: fixed ; */
      }
      th {
        border-collapse: collapse;
        border: 1px solid black;
        font-size: 12px;
      }
      td {
        width: 10%;
        font-size: 12px;
        border-left: 1px solid black;
      }
      #quater {
        text-align: left;
      }
      #quaterHead {
        width: 15%;
      }
    </style>
  </head>
  <body>
  <h2>1.</h2>
    <table id="tableId">
      <tr>
        <th rowspan="2" id="quaterHead">Quarter</th>
        <th colspan="2">Retail Sales(millions of dollers)</th>
        <th rowspan="2">E-Commerce as a percentage of total</th>
        <th colspan="2">Percentage Change From Prior Quarter</th>
        <th colspan="2">Percentage Change From Same Quarter A Year Ago</th>
      </tr>
      <tr>
        <th>Total</th>
        <th>E-Commerce</th>
        <th>Total</th>
        <th>E-Commerce</th>
        <th>Total</th>
        <th>E-Commerce</th>
      </tr>
    </table>
      <h2>2.</h2>

    <table id="tableId2">
      <tr>
        <th rowspan="2" id="quaterHead">Quarter</th>
        <th colspan="2">Retail Sales(millions of dollers)</th>
        <th rowspan="2">E-Commerce as a percentage of total</th>
        <th colspan="2">Percentage Change From Prior Quarter</th>
        <th colspan="2">Percentage Change From Same Quarter A Year Ago</th>
      </tr>
      <tr>
        <th>Total</th>
        <th>E-Commerce</th>
        <th>Total</th>
        <th>E-Commerce</th>
        <th>Total</th>
        <th>E-Commerce</th>
      </tr>
    </table>
    <h2>3.</h2>
    <table id="tableId3">
      <tr>
        <th rowspan="2" id="quaterHead">Quarter</th>
        <th colspan="2">Retail Sales(millions of dollers)</th>
        <th rowspan="2">E-Commerce as a percentage of total</th>
        <th colspan="2">Percentage Change From Prior Quarter</th>
        <th colspan="2">Percentage Change From Same Quarter A Year Ago</th>
      </tr>
      <tr>
        <th>Total</th>
        <th>E-Commerce</th>
        <th>Total</th>
        <th>E-Commerce</th>
        <th>Total</th>
        <th>E-Commerce</th>
      </tr>
    </table>
    <h2>4.</h2>
    <h4>Adjusted average : </h4><h4 id="adjsuted">null</h4>

    <h4>Not-Adjusted average : </h4><h4 id="notadjsuted"></h4>
    <script>

        $(document).ready(function(){
            showall();
            dlt1quarter();
            showall2();
            avrg1();
            avrg2();
            function showall(){
                $.ajax({
                    type:"POST",
                    url:"server.php",
                    data: {
                    alldata: true
                    },
                    success: function(result) {
                    let adj = JSON.parse(result);
                    adj.forEach((element) => {
                    var row =
                    "<tr><td id='quater'>" +
                    element["quarter"] +
                    "</td><td>" +
                    element["retail sales"]["total1"] +
                    "</td><td>" +
                    element["retail sales"]["e-commerce1"] +
                    "</td>" +
                    "<td>" +
                    element["totalPrecent"] +
                    "</td><td>" +
                    element["changePercentFromPriorQuarter"]["total2"] +
                    "</td><td>" +
                    element["changePercentFromPriorQuarter"]["e-commerce2"] +
                    "</td><td>" +
                    element["changePercentFromSameQuarter"]["total3"] +
                    "</td><td>" +
                    element["changePercentFromSameQuarter"]["e-commerce3"] +
                    "</td></tr>";

                    document.getElementById("tableId").innerHTML += row;
                });
                    
                    }

                })
            }

            function dlt1quarter(){
                $.ajax({
                    type:"POST",
                    url:"server.php",
                    data: {
                      delete1qrtr: true
                    },
                    success: function(result) {
                    let data = JSON.parse(result);

                    data.forEach((element) => {
                    var row =
                    "<tr><td id='quater'>" +
                    element["quarter"] +
                    "</td><td>" +
                    element["retail sales"]["total1"] +
                    "</td><td>" +
                    element["retail sales"]["e-commerce1"] +
                    "</td>" +
                    "<td>" +
                    element["totalPrecent"] +
                    "</td><td>" +
                    element["changePercentFromPriorQuarter"]["total2"] +
                    "</td><td>" +
                    element["changePercentFromPriorQuarter"]["e-commerce2"] +
                    "</td><td>" +
                    element["changePercentFromSameQuarter"]["total3"] +
                    "</td><td>" +
                    element["changePercentFromSameQuarter"]["e-commerce3"] +
                    "</td></tr>";

                    document.getElementById("tableId2").innerHTML += row;
                });
                    
                    }

                })
            }

            function avrg1(){
              $.ajax({
                    type:"POST",
                    url:"server.php",
                    data: {
                      average: true
                    },
                    success: function(result) {
                      document.getElementById("adjsuted").innerHTML = result;
                    }})
            }
            function avrg2(){
              $.ajax({
                    type:"POST",
                    url:"server.php",
                    data: {
                      average2: true
                    },
                    success: function(result) {
                      document.getElementById("notadjsuted").innerHTML = result;
                    }})
            }
            function showall2(){
                $.ajax({
                    type:"POST",
                    url:"server.php",
                    data: {
                    addqrter: true
                    },
                    success: function(result) {
                    let adj = JSON.parse(result);
                    adj.forEach((element) => {
                    var row =
                    "<tr><td id='quater'>" +
                    element["quarter"] +
                    "</td><td>" +
                    element["retail sales"]["total1"] +
                    "</td><td>" +
                    element["retail sales"]["e-commerce1"] +
                    "</td>" +
                    "<td>" +
                    element["totalPrecent"] +
                    "</td><td>" +
                    element["changePercentFromPriorQuarter"]["total2"] +
                    "</td><td>" +
                    element["changePercentFromPriorQuarter"]["e-commerce2"] +
                    "</td><td>" +
                    element["changePercentFromSameQuarter"]["total3"] +
                    "</td><td>" +
                    element["changePercentFromSameQuarter"]["e-commerce3"] +
                    "</td></tr>";

                    document.getElementById("tableId3").innerHTML += row;
                });
                    
                    }

                })
            }

        })
    </script>
  </body>
</html>
