/*
Javascript for fInstagram
rc3003
3/13/18
*/

var likes =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// [profilepic, name, post, numberOfLikes, caption, timestamp]

var content=[["prof1.jpg","ashleybenson","img1.jpg", "1232", " ","2 MINUTES AGO"],
["prof2.jpg","barnardcollege","img2.jpg","213", " ","5 MINUTES AGO"],
["prof3.jpg","barney_stints","img3.jpg","244", " ","6 MINUTES AGO"],
["prof4.jpg","columbiacollege1754","img4.jpg","321", " ","12 MINUTES AGO"],
["prof5.jpg","eddielikeapuma","img5.jpg","43", " ","32 MINUTES AGO"],
["prof6.jpg","columbiaseas","img6.jpg","653", " ","40 MINUTES AGO"],
["prof7.jpg","presbeilock","img7.jpg","467", " ","55 MINUTES AGO"],
["prof8.jpg","tchalamet","img8.jpg","32456", " ","1 HOUR AGO"],
["prof9.jpg","swavey","img9.jpg","23563", " ","2 HOURS AGO"],
["prof10.jpg","columbiadining","img10.jpg","322", " ","4 HOURS AGO"],
["prof11.jpg","Jesusmann","img11.jpg","32", " ","5 HOURS AGO"],
["prof12.jpg","jimmyfallon","img12.jpg","43684", " ","6 HOURS AGO"],
["prof13.jpg","joejonas","img13.jpg","28134", " ","10 HOURS AGO"],
["prof14.jpg","kellyclarkson","img14.jpg","24435", " ","13 HOURS AGO"],
["prof15.jpg","kourtneykardash","img15.png","11234", " ","1 DAY AGO"],
["prof16.jpg","milliebear","img16.jpg","432", " ","1 DAY AGO"],
["prof17.jpg","paulapanda93","img17.jpg","46", " ","2 DAYS AGO"],
["prof18.jpg","pj2016","img18.jpg","88", " ","2 DAYS AGO"],
["prof19.jpg","mcmallory317","img19.jpg","35", " ","2 DAYS AGO"],
["prof20.jpg","PrezBo","img20.jpg","328", " ","2 DAYS AGO"],
["prof21.jpg","selenagomez","img21.jpg","13467", " ","2 DAYS AGO"],]

$(document).ready(function(){
	load();
})

function LIKE(x) {
    //updates array 
    if(likes[x.id]==0){
    	likes[x.id]=1;
    	incrLikes(x);
    }
    else{
    	likes[x.id]=0;
    	decrLikes(x);
    }
    //changes icon
    x.classList.toggle("glyphicon-heart");
    x.classList.toggle("glyphicon-heart-empty");
}

function decrLikes(x){
	document.getElementById("like"+x.id).innerHTML--;
}

function incrLikes(x){
	document.getElementById("like"+x.id).innerHTML++;
}

function done(){
	document.getElementById("result").innerHTML="<p>Thank you for completing this portion of the experiment. Please copy the following numbers into the google form.</p>"+
						"<p>" + likes + "</p>";
}

function load(){
	var i;
	document.getElementById("add").innerHTML="";
	for(i=0;i<content.length;i++){
		document.getElementById("add").innerHTML += '<div class="row">' +
        	'<div class="col-md-2"></div>'+
        	'<div class="col-md-6" style="padding: 0px" >' +		
				'<div class="card stayInside">'+
					'<!-- profile -->'+
					'<div class="row">'+
						'<div class="col-md-12">'+
							'<img src="prof/'+content[i][0]+'" alt="profpic" class="prof">'+
							'<div class="handle">'+content[i][1]+'</div>'+
						'</div>'+
					'</div>'+
					'<!-- image -->'+
					'<div class="row">'+
						'<div class="col-md-12">'+
							'<img src="pic/'+content[i][2]+'" alt="img" class="cont" onclick="LIKE('+i+')">'+
						'</div>'+
					'</div>'+
					'<!-- icons  -->'+
					'<div class="row">'+
						'<div class="col-md-11">'+
							'<i class="glyphicon glyphicon-heart-empty likeButton"  id="'+i+'" onclick="LIKE(this)"></i>'+
							'<img src="comment.png" alt="person" class="iconsC">'+

						'</div>'+
						'<div class="col-md-1" style="padding:0px">'+
	            			'<img src="bookmark.png" alt="person" class="iconsC" style="margin-left: 0px">'+
						'</div>'+
					'</div>'+
					'<!-- likes and comments   -->'+

					'<div class="row">'+
						'<div class="col-md-12 text">'+
							'<div  class="likeNum"><p id="like'+i+'"  class="likeNum">'+content[i][3]+'</p> likes</div>'+
							'<p><b>'+content[i][1]+'</b>'+content[i][4]+'</p>'+
							'<p class="timeStamp">'+content[i][5]+'</p>'+
							'<div class="divLine"></div>'+
							'<br>'+
							'<div class="row">'+
								'<div class="col-md-12">'+
									'<div class="timeStamp">Add a comment...</div>'+
									'<br>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					
				'</div>'+
		
        	'</div>'+
        '</div>'+
        '<!-- spacer -->'+
        '<div class="spacer"></div>'

	}


}


