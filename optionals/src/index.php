

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
    <script>

        $(document).ready(function(){
            showall();
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
            

        })
    </script>
    <!-- <script>
      const adjusted = [
        {
          quarter: "1st Quarter 2010(p)",
          "retail sales": {
            total1: "960,474",
            "e-commerce1": "38,707",
          },
          totalPrecent: "4.0",
          changePercentFromPriorQuarter: {
            total2: "2.0",
            "e-commerce2": "1.5",
          },
          changePercentFromSameQuarter: {
            total3: "6.3",
            "e-commerce3": "14.3",
          },
        },

        {
          quarter: "4th Quarter 2009(r)",
          "retail sales": {
            total1: "941,355",
            "e-commerce1": "38,141",
          },
          totalPrecent: "4.1",
          changePercentFromPriorQuarter: {
            total2: "2.0",
            "e-commerce2": "4.2",
          },
          changePercentFromSameQuarter: {
            total3: "2.1",
            "e-commerce3": "14.6",
          },
        },

        {
          quarter: "3rd Quarter 2009",
          "retail sales": {
            total1: "922,763",
            "e-commerce1": "36,587",
          },
          totalPrecent: "4.0",
          changePercentFromPriorQuarter: {
            total2: "2.1",
            "e-commerce2": "5.1",
          },
          changePercentFromSameQuarter: {
            total3: "-7.8",
            "e-commerce3": "1.7",
          },
        },

        {
          quarter: "2nd Quarter 2009",
          "retail sales": {
            total1: "904,045",
            "e-commerce1": "34,827",
          },
          totalPrecent: "3.9",
          changePercentFromPriorQuarter: {
            total2: "0.0",
            "e-commerce2": "2.8",
          },
          changePercentFromSameQuarter: {
            total3: "-11.1",
            "e-commerce3": "-4.8",
          },
        },
      ];

      const notAdjusted = [
        {
          quarter: "1st Quarter 2010(p)",
          "retail sales": {
            total1: "960,474",
            "e-commerce1": "38,707",
          },
          totalPrecent: "4.0",
          changePercentFromPriorQuarter: {
            total2: "2.0",
            "e-commerce2": "1.5",
          },
          changePercentFromSameQuarter: {
            total3: "6.3",
            "e-commerce3": "14.3",
          },
        },

        {
          quarter: "4th Quarter 2009(r)",
          "retail sales": {
            total1: "941,355",
            "e-commerce1": "38,141",
          },
          totalPrecent: "4.1",
          changePercentFromPriorQuarter: {
            total2: "2.0",
            "e-commerce2": "4.2",
          },
          changePercentFromSameQuarter: {
            total3: "2.1",
            "e-commerce3": "14.6",
          },
        },

        {
          quarter: "3rd Quarter 2009",
          "retail sales": {
            total1: "922,763",
            "e-commerce1": "36,587",
          },
          totalPrecent: "4.0",
          changePercentFromPriorQuarter: {
            total2: "2.1",
            "e-commerce2": "5.1",
          },
          changePercentFromSameQuarter: {
            total3: "-7.8",
            "e-commerce3": "1.7",
          },
        },

        {
          quarter: "2nd Quarter 2009",
          "retail sales": {
            total1: "904,045",
            "e-commerce1": "34,827",
          },
          totalPrecent: "3.9",
          changePercentFromPriorQuarter: {
            total2: "0.0",
            "e-commerce2": "2.8",
          },
          changePercentFromSameQuarter: {
            total3: "-11.1",
            "e-commerce3": "-4.8",
          },
        },
      ];

      document.getElementById("tableId").innerHTML +=
        "<tr><td id='quater'><b>Adjusted</b></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
      adjusted.forEach((element) => {
        rows =
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

        document.getElementById("tableId").innerHTML += rows;
      });
      document.getElementById("tableId").innerHTML +=
        "<tr><td id='quater'><b>Not Adjusted</b></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
      notAdjusted.forEach((element) => {
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
    </script> -->


  </body>
</html>
