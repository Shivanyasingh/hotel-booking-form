function roomcost(){
    var tday=parseInt(document.getElementById("tnod").value);
    var rt=parseInt(document.getElementById("rtype").value); 
    document.getElementById("trcost").value=tday*rt;
}
function amenitiescost(){
    var tday=parseInt(document.getElementById("tnod").value);
    var amen=parseInt(document.getElementById("amenities").value);
    document.getElementById("tacost").value=tday*amen;
}  
function additioncost(){
    if(parseInt(document.getElementById("tnop").value)<=2){
    document.getElementById("addcost").value=0;}
    else{
        var sp=parseInt(document.getElementById("tnop").value);
        var sd=parseInt(document.getElementById("tnod").value);
        document.getElementById("addcost").value=(sp-2)*1000*sd;
    }
} 
function totalcost(){
    var trc=parseInt(document.getElementById("trcost").value);
    var tac=parseInt(document.getElementById("tacost").value);
    var tad=parseInt(document.getElementById("addcost").value);
    document.getElementById("tcost").value=trc+tac+tad;
}
function balancecost(){
    var total=parseInt(document.getElementById("tcost").value);
    var addition=parseInt(document.getElementById("aamount").value);
    document.getElementById("balance").value=total-addition;
}
function main(){
    roomcost();
    amenitiescost();
    additioncost();
    totalcost();
    balancecost();
    event.preventDefault();
}