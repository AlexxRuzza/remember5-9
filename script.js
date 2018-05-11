var img = document.getElementById("hplogo");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var srcl = chrome.runtime.getURL("/images/l"+mm+"_"+dd+".png");

if(imageExists(srcl))
{
	img.src = srcl;
	img.srcset = "";
}

function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
