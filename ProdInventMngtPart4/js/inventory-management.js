/*eslint-env browser*/

function menu() {
    "use strict";
    window.console.log("Welcome to the Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show the Inventory");
    window.console.log("update - update the inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function display(inventory) {
    //"use strict";
    var i;
    window.console.log("</br>" + "Full product stock");
    for(i=0;i<inventory.length;i+=1){
       
        window.console.log(inventory[i][0]+" "+inventory[i][1]+" "+"("+inventory[i][2]+")"+" "+"$"+inventory[i][3]);
       
    }
   }
   
   function update(inventory){
    var j,sku,stock;
    sku= window.prompt("Enter the sku number of the product to update the stock");
    sku=parseInt(sku);
    stock=window.prompt("Enter the current stock");
    stock=parseInt(stock);

    for(j=0;j<inventory.length;j+=1){
      
        if((inventory[j][0]) === sku){
            inventory[j][2]=stock;
           
        }
    }
    display(inventory);
   }
  
    function main() {
   // "use strict";
    var inventory, command;
        
    inventory = [[2435,"shirt",10,15.55],
                    [3563,"Jeans",15,22.19],
                    [4634,"socks",11,41.1],
                    [5723,"Jacket",8,12.22],
                    [6984,"Hat",31,14.32]];
      menu();
    
    while (true) {
        command = window.prompt("Enter command");
       
            if (command === "show") {
                display(inventory);
                
            
            }
             else if (command === "update") {
                update(inventory);
           
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        
    }
    window.alert("Program terminated.");
}
main();