<?php 


if(isset($_POST['alldata'])){

    $Adjusted=array(
        array(
            "quarter"=> "1st Quarter 2010(p)",
            "retail sales"=> array(
                "total1"=> "960,474",
                "e-commerce1"=> "38,707",
              ),
            "totalPrecent"=> "4.0",
            "changePercentFromPriorQuarter"=> array("total2"=> "2.0",
            "e-commerce2"=> "1.5",),

            "changePercentFromSameQuarter"=> array(
                "total3"=> "6.3",
              "e-commerce3"=> "14.3",
            )
            ),

        array(
                "quarter"=> "1st Quarter 2010(p)",
                "retail sales"=> array(
                    "total1"=> "960,474",
                    "e-commerce1"=> "38,707",
                  ),
                "totalPrecent"=> "4.0",
                "changePercentFromPriorQuarter"=> array("total2"=> "2.0",
                "e-commerce2"=> "1.5",),
    
                "changePercentFromSameQuarter"=> array(
                    "total3"=> "6.3",
                  "e-commerce3"=> "14.3",
                )
                ),
        array(
                    "quarter"=> "1st Quarter 2010(p)",
                    "retail sales"=> array(
                        "total1"=> "960,474",
                        "e-commerce1"=> "38,707",
                      ),
                    "totalPrecent"=> "4.0",
                    "changePercentFromPriorQuarter"=> array("total2"=> "2.0",
                    "e-commerce2"=> "1.5",),
        
                    "changePercentFromSameQuarter"=> array(
                        "total3"=> "6.3",
                      "e-commerce3"=> "14.3",
                    )
                    ),
        
        array(
                        "quarter"=> "1st Quarter 2010(p)",
                        "retail sales"=> array(
                            "total1"=> "960,474",
                            "e-commerce1"=> "38,707",
                          ),
                        "totalPrecent"=> "4.0",
                        "changePercentFromPriorQuarter"=> array("total2"=> "2.0",
                        "e-commerce2"=> "1.5",),
            
                        "changePercentFromSameQuarter"=> array(
                            "total3"=> "6.3",
                          "e-commerce3"=> "14.3",
                        )
                        ),
        array(
                            "quarter"=> "1st Quarter 2010(p)",
                            "retail sales"=> array(
                                "total1"=> "960,474",
                                "e-commerce1"=> "38,707",
                              ),
                            "totalPrecent"=> "4.0",
                            "changePercentFromPriorQuarter"=> array("total2"=> "2.0",
                            "e-commerce2"=> "1.5",),
                
                            "changePercentFromSameQuarter"=> array(
                                "total3"=> "6.3",
                              "e-commerce3"=> "14.3",
                            )
                            ),
                
        array(
                                "quarter"=> "1st Quarter 2010(p)",
                                "retail sales"=> array(
                                    "total1"=> "960,474",
                                    "e-commerce1"=> "38,707",
                                  ),
                                "totalPrecent"=> "4.0",
                                "changePercentFromPriorQuarter"=> array("total2"=> "2.0",
                                "e-commerce2"=> "1.5",),
                    
                                "changePercentFromSameQuarter"=> array(
                                    "total3"=> "6.3",
                                  "e-commerce3"=> "14.3",
                                )
                            )
    );


    
     echo json_encode($Adjusted);

      
    
}
?>